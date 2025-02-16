
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useRef } from "react";
import Quest from "./subcomponents/quest/quest";
import Streak from "./subcomponents/streak/streak";
import ClipLoader from "react-spinners/ClipLoader";
 import { getChapter, getSubject } from "../../../happyexamReducer/happyexam";
 import Error from "../../error/error";
  import {useLocation, useNavigate, useParams} from 'react-router-dom'
  import 'swiper/css';
  import 'swiper/css/effect-cards';
  import {Swiper, SwiperSlide} from "swiper/react"
  import {EffectCards} from "swiper/modules"

function Subject(){
  const user = useSelector((state)=>state.auth.user)
    const subject = useSelector((state)=>state.happyexam.subject);
    const Loading = useSelector((state)=>state.happyexam.Loading)
   const navigate = useNavigate();
   const dispatch = useDispatch()
   const location = useLocation()
   const mounted = useRef(false)
   const params = useParams()
  

 if(!user.id){
  navigate("/")
 }
   
   useEffect(()=>{
    if(!mounted.current && !location?.state?.isClick){
    dispatch(getSubject(params.classId))
    mounted.current = true;
    }
   },[])

    function handleSubject(subjectId){
  dispatch(getChapter({classId:params.classId, subjectId:subjectId}))
 navigate(`/${params.classId}/${subjectId}`, {state:{isClick:true}})
    return;

    }

    function BackgroundColor(subject){
      switch(subject){
          case "Maths":
             return 'bg-Maths text-Maths shadow-Maths  border-Maths_border'
              break;
            
           case "Physics":
          return  "bg-Physics  text-Physics shadow-Physics  border-Physics_border"
            break;
            
            case "Chemistry":
             return "bg-Chemistry text-Chemistry shadow-Chemistry border-Chemistry_border"
              break;
              case "Biology":
                return "bg-Biology text-Biology shadow-Biology border-Biology_border"
                 break;

                default:
                 return null;
      }

 
    }
   
    return(
       <>  
       {
          Loading ?     (<div className="w-full 
            h-screen flex items-center justify-center"> <ClipLoader ></ClipLoader></div>) :   
            subject?.length ===0 ? <Error></Error>

     :  <div className=" relative top-5 md:right-[100px] overflow-hidden  w-full  h-[calc(100vh-80px)] flex flex-col md:flex-row  justify-around gap-5 items-center">

<div className=" md:hidden" >
   <Streak />
</div>

<Swiper
effect={'cards'}
grabCursor={true}
modules={[EffectCards]}
 cardsEffect={{
  slideShadows:false,
  rotate:true,
  perSlideOffset:8
  

 }}
 speed={200}
 className="   mySwiper relative right-3 w-[calc(100vw-15%)] md:w-[550px] h-[350px] md:h-[600px]">
{
       subject?.map((item,index)=>{
           return(
               <SwiperSlide key={item._id} className={` font-Nunito border-[2px] border-solid ${BackgroundColor(item.subject_name.english)} flex justify-center items-center  bg-contain gap-2 w-[380px] md:w-[500px] rounded-xl h-[350px] md:h-[350px] bg-white`}>
               

                <div className="flex flex-col justify-center items-center mb-5 gap-3">
                 <div className=" font-Nunito  absolute left-5 top-5 font-medium text-[19px] ">
               {user.language === "english" ?  item.subject_name.english : item.subject_name.hindi}
             <span className=" font-Nunito text-[12px]">  {item?.available? null  : "(Coming soon)"}</span>
                 </div>

                  <div className=" absolute bottom-[20%]">
                  <button className="w-[200px] h-[50px] font-semibold bg-white rounded-full  outline-none border-none"  onClick={()=>handleSubject(item.subject_name.english)}>Get Start</button>
                  </div>
                 </div>

               </SwiperSlide>
           )
       })
   } 
</Swiper>

<div className=" hidden  md:flex flex-col gap-2 ">
  <Streak />
   <Quest />
</div>

<div className=" md:hidden">
  <Quest />
</div>

  </div>

  }  
  </>
       
    )
}
export default Subject;