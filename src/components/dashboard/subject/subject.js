
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useRef } from "react";
import Quest from "./subcomponents/quest/quest";
import Streak from "./subcomponents/streak/streak";
import ClipLoader from "react-spinners/ClipLoader";
 import { getChapter, getSubject } from "../../../happyexamReducer/happyexam";
 import Error from "../../error/error";
  import {useLocation, useNavigate, useParams} from 'react-router-dom'

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

    function renderSVG(SVGcode){
   
      return(
          <>
          {
            typeof SVGcode === "string" ? (<div dangerouslySetInnerHTML={{__html:SVGcode}}></div>) :  SVGcode
          }
          
            </>
      )
   }

    return(
       <>  
       {
          Loading ?     (<div className="w-full 
            h-screen flex items-center justify-center"> <ClipLoader ></ClipLoader></div>) :   
            subject?.length ===0 ? <Error></Error>

     :  <div className=" relative  top-[50px] w-full h-full flex flex-col justify-center items-center gap-5">

<div className=" md:absolute left-[65%] bottom-[75%]" >
   <Streak></Streak>
</div>

<div className=" flex flex-col gap-5 md:relative right-[150px]">
{
       subject?.map((item,index)=>{
           return(
               <div key={item._id} className=" gap-2 w-[380px] md:w-[500px] rounded-xl h-[350px] md:h-[350px] bg-white border-[2px] border-solid border-border_grey shadow-grey_shadow flex  justify-center items-center flex-col">
                <div>{item.subject_image?renderSVG(item.subject_image) : null}</div>
                <div className="flex flex-col justify-center items-center mb-5 gap-3">
                 <div className=" font-Nunito  font-semibold text-[19px] ">
               {user.language === "english" ?  item.subject_name.english : item.subject_name.hindi}
             <span className=" font-Nunito text-[12px]">  {item?.available? null  : "(Coming soon)"}</span>
                 </div>
                 <div className=" w-[200px] h-[50px] md:w-[196px] md:h-[50px] bg-black rounded-full flex items-center justify-center text-white font-Nunito cursor-pointer" onClick={()=>handleSubject(item.subject_name.english)}>Get Started</div>
                 </div>
               </div>
           )
       })
   } 
</div>

<div className=" md:absolute left-[65%]  bottom-[100px]   md:bottom-[60%]">
   <Quest></Quest>
</div>



  </div>

  }  
  </>
       
    )
}
export default Subject;