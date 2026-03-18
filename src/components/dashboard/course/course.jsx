import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate,useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import LottieLoading from "@/loading/loading";
import { getCourse, getLevel } from "@/happyexamReducer/happyexam";
import NetworkError from "@/components/error/NetworkError";
import ServerError from "@/components/error/ServerError";




function Course(){


    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation() 

    const user = useSelector((state)=>state.auth.user);
    const course = useSelector((state)=>state.happyexam.course);
    const Loading = useSelector((state) => state.happyexam.Loading);
    const isNetworkError = useSelector((state)=>state.happyexam.isNetworkError);
    const isServerError = useSelector((state)=>state.happyexam.isServerError)
    const params =  useParams();
   

  
    useEffect(()=>{
        if(!location?.state?.isClick){
          dispatch(getCourse(params))
      ;
        }
    },[])

    function navigateLevel(data){
     

        dispatch(getLevel({class_name:data.class_name, subject_name:data.subject_name.english,chapter_name:data.chapter_name.english}))
    navigate(`/course/${data.class_name}/${data.subject_name.english}/${data.chapter_name.english}`, {state:{isClick:true, chapter:data}})


    }

    function HandleRetry(){
       dispatch(getCourse(user.userPreference.class_name))
    }
   



   
    return(
        <>

         {
          Loading ? (<div className="w-full 
            h-screen flex items-center justify-center"><LottieLoading></LottieLoading></div>)

            : 
            isNetworkError ? <NetworkError  HandleRetry={HandleRetry}/> 
            : 
            isServerError ?  <ServerError HandleRetry={HandleRetry} />
            :
            <section className=" relative  py-10  w-full h-[calc(100vh-70px)] overflow-x-hidden">
           
           
            <div className="  flex flex-col gap-[50px]  md:justify-center md:items-center">
         {
          course?.map((subject)=>{
            // here subject render//
             
        return(
    
          <React.Fragment key={subject._id}>
          {subject.chapter && subject.chapter.length > 0 ? 

       <div    className=" md:min-w-[1200px] md:max-w-[1200px] flex flex-col gap-2">
        <p className=" font-Nunito font-semibold text-[24px] ml-6">{user?.userPreference?.language ==="english"?subject.subject_name.english : subject.subject_name.hindi}</p>

{/* here the chapter render */}
        <div className=" w-full items-center  overflow-x-auto flex  gap-3 px-5 py-2 bg-gray-300 rounded-2xl" style={{scrollbarWidth:"none"}}>

          {
            subject.chapter?.map((chapter,index)=>{
               return(
              
                        <div key={chapter._id} className=" mt-2 md:mt-8 flex flex-col gap-2 justify-start items-center h-[230px] md:h-[260px]">
                            
                            <div className="relative flex justify-center items-center">

                            <div  key={index} className="select-none  flex justify-center items-center w-[150px] h-[150px] md:w-[170px] md:h-[170px] bg-white border-[2px] border-solid border-gray-200 rounded-[20px] shadow-btn-grey-lg cursor-pointer font-Nunito text-[12px] md:text-[15px]" onClick={()=>navigateLevel(chapter)}> 
                               {chapter?.chapter_image ? <img  src={chapter?.chapter_image} style={{width:"100px", height:"100px", objectFit:"contain"}}></img> : "image not found"}
                            </div>
                        
                           {index+1 < subject.chapter.length   ?   <div  className="absolute -right-6 w-6 h-[2px] bg-gray-200"></div> : null}

                            </div>


                             <p className=" max-w-[180px] font-Nunito text-center font-medium text-wrap">
                                {user?.userPreference?.language ==="english" ? chapter.chapter_name.english : chapter.chapter_name.hindi}
                            </p>
                           
            
                          </div>
                         
                          
               )
            })
          }
        </div>
        </div>
        
        : null }

        </ React.Fragment>
      
       ) 
          })
         }



        </div>
      </section>
}
      </>
      
    )
}

export default Course;