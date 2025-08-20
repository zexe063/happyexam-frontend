import { useLocation, useNavigate,useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  getCourse, getLevel } from "../../../happyexamReducer/happyexam";
import LottieLoading from "../../../loading/loading";
import Error from "../../error/error";
import React, { useEffect, useRef } from "react";

import { SwiperSlide, Swiper } from "swiper/react";
import 'swiper/css';
import "./chapter.css"

function Chapter(){


      
    const course = useSelector((state)=>state.happyexam.course);
    const Loading = useSelector((state) => state.happyexam.Loading);
    const user = useSelector((state)=>state.auth.user);
    const navigate =useNavigate()
    const dispatch = useDispatch()
    const location =  useLocation()
    const mounted = useRef(false)
    const params = useParams();
   

    if(!user.id){
        navigate("/")
       } 
    useEffect(()=>{
        if(!mounted.current && !location?.state?.isClick){
          dispatch(getCourse(params))
          mounted.current = true;
        }
    },[])

    function navigateLevel(data){
     

        dispatch(getLevel({class_name:data.class_name, subject_name:data.subject_name.english,chapter_name:data.chapter_name.english}))
    navigate(`/course/${data.class_name}/${data.subject_name.english}/${data.chapter_name.english}`, {state:{isClick:true}})


    }

    
   



   
    return(
        <>

         {
          Loading ? (<div className="w-full 
            h-screen flex items-center justify-center"><LottieLoading></LottieLoading></div>)
        :   
             course?.length ===0 ? <Error></Error>  

     :
      <section className=" relative  py-10  w-full h-[calc(100vh-70px)] overflow-x-hidden">
        

        <div className=" flex flex-col gap-[50px]">
         {
          course?.map((subject,index)=>{
            // here subject render//
            

        return(
    
          <>
          {subject.chapter && subject.chapter.length > 0 ? 

       <div className=" flex flex-col gap-2">
        <p className=" font-Nunito font-semibold text-[24px] ml-6">{user.language ==="english"?subject.subject_name.english : subject.subject_name.hindi}</p>

{/* here the chapter render */}
        <div className=" w-full   items-center  overflow-x-auto flex  gap-3 px-5 py-2 bg-course_grey" id="chapter" >

          {
            subject.chapter?.map((chapter,index)=>{
               return(
              
                        <div key={chapter._id} className=" mt-2 md:mt-8 flex flex-col gap-2 justify-start items-center h-[230px] md:h-[260px]">
                            
                            <div  key={index} className="select-none  flex justify-center items-center w-[150px] h-[150px] md:w-[180px] md:h-[175px] bg-white border-[2px] border-solid border-border_grey rounded-[20px] shadow-grey_shadow cursor-pointer font-Nunito text-[12px] md:text-[15px]" onClick={()=>navigateLevel(chapter)}> 
                               {chapter?.chapter_image ? <img  src={chapter.chapter_image} style={{width:"100px", height:"100px", objectFit:"contain"}}></img> : "image not found"}
                            </div>
                            <p className=" font-Nunito text-center font-medium">
                                {user.language ==="english" ? chapter.chapter_name.english : chapter.chapter_name.hindi}
                            </p>
            
                          </div>
                         
                          
               )
            })
          }
        </div>
        </div>
        
        : null }

        </>
      
       ) 
          })
         }



        </div>
      </section>
}
      </>
      
    )
}

export default Chapter;