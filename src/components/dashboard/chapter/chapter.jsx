import { useLocation, useNavigate,useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getChapter, getLevel } from "../../../happyexamReducer/happyexam";
import LottieLoading from "../../../loading/loading";
import Error from "../../error/error";
import React, { useEffect, useRef } from "react";

import { SwiperSlide, Swiper } from "swiper/react";
import 'swiper/css';

function Chapter(){


      
    const chapter = useSelector((state)=>state.happyexam.chapter);
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
          dispatch(getChapter(params))
          mounted.current = true;
        }
    },[])

    function navigateLevel(chapterId){
        dispatch(getLevel({classId:params.classId, subjectId:params.subjectId,chapterId:chapterId}))
 navigate(`/${params.classId}/${params.subjectId}/${chapterId}`, {state:{isClick:true}})


    }

    
   
    return(
        
        <>

        { Loading ?     (<div className="w-full
    h-screen flex items-center justify-center"><LottieLoading></LottieLoading></div>) : chapter?.length === 0 ?
    <Error></Error>

        :
        
        <div className="relative top-[80px] w-full h-full flex flex-col justify-center items-center gap-16">
        <div className="flex flex-col font-Nunito font-semibold">
            <div className="text-[40px] tracking-wide">Chapter Path</div>
            <div className="text-text_grey tracking-wide">Happy to Happy Complete Chapter</div>
        </div>
    
        {/* Add a fixed width and height container for overflow */}
        <div className="w-full max-w-[95vw] md:max-w-[90vw] overflow-x-auto pb-4">
        <div className="px-2 flex  justify-start items-center min-w-max">
            {
                chapter?.map((item, index)=>{
                    console.log(index,chapter.length)
                    return(
                        <main className="  flex items-center justify-center">
                        <div key={item._id} className="flex flex-col justify-start items-center h-[230px] md:h-[260px]">
                            <div className="font-Nunito text-text_grey ml-1">chap-{index+1}</div>
                            <div key={index} className="select-none flex justify-center items-center w-[150px] h-[150px] md:w-[180px] md:h-[175px] bg-white border-[2px] border-solid border-border_grey rounded-[20px] shadow-grey_shadow cursor-pointer font-Nunito text-[12px] md:text-[15px]" onClick={()=>navigateLevel(item.chapter_name.english)}> 
                               {item?.chapter_image ? <img  src={item.chapter_image} style={{width:"100px", height:"100px"}}></img> : "image not found"}
                            </div>
                            <div className="w-[150px] md:w-[180px] h-[40px] md:h-[50px] flex items-start justify-center text-center font-Nunito font-medium tracking-wide text-[12px] md:text-[15px] py-8">
                                {user.language ==="english" ? item.chapter_name.english : item.chapter_name.hindi}
                            </div>
            
                          </div>
                          {  index+1 < chapter.length ?   <div className=" w-[20px] h-[3px] bg-[#e5e5e5] "> </div>     : null}
                          </main>
                    )
                })
            }
        </div>
    </div>
    </div>
       }
        </>
    )
}

export default Chapter;
