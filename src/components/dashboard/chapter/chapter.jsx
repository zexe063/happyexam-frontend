import { useLocation, useNavigate,useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getChapter, getLevel } from "../../../happyexamReducer/happyexam";
import LottieLoading from "../../../loading/loading";
import Error from "../../error/error";
import React, { useEffect, useRef } from "react";

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

    
    function renderSVG(SVGcode){
   
        return(
            <>
            {
              typeof SVGcode === "string" ? (<div dangerouslySetInnerHTML={{__html:SVGcode}}></div>) :  null
            }
            
              </>
        )
     }
    return(
        <>

        { Loading ?     (<div className="w-full
    h-screen flex items-center justify-center"><LottieLoading></LottieLoading></div>) : chapter?.length === 0 ?
    <Error></Error>

        :<div className=" relative top-[50px] w-full h-full flex flex-shrink flex-col justify-center items-center gap-16">
            <div className="  flex flex-col font-Nunito  font-semibold">
           <div className=" text-[40px] tracking-wide">Chapter Path</div>
           <div className=" text-text_grey tracking-wide">Happy to Happy Complete Chapter</div>
            </div>

            <div className=" px-2 grid  gap-10 md:gap-[50px] justify-center items-center  grid-rows-2  grid-cols-2 md:grid-rows-2 md:grid-cols-5">
                {
 chapter?.map((item, index)=>{
    return(
        <div key={item._id} className=" flex  gap-[10px] flex-col justify-center">

            <div className=" font-Nunito text-text_grey ml-1">chap-{index+1}</div>
        <div key={index} className=" select-none flex justify-center  items-center  w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-white border-[2px] border-solid border-border_grey  rounded-xl shadow-grey_shadow active:shadow-none active:translate-y-[5px] transition-all duration-100 ease-in-out cursor-pointer font-Nunito text-[12px] md:text-[15px] " onClick={()=>navigateLevel(item.chapter_name.english)}> 
        
    {item?.chapter_image ? renderSVG(item.chapter_image) : "image  not found"}
   
        </div>

       <div className=" flex-shrink px-1 font-Nunito font-medium tracking-wide text-[12px] md:text-[15px] w-[200px]">  {user.language ==="english" ?  item.chapter_name.english : item.chapter_name.hindi}</div>
        </div>
    )
 })
                }
            </div>
        </div>
       
       }
        </>
    )
}

export default Chapter;