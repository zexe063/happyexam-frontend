import { useEffect, useState } from "react";
import { LockIcon,LeftwingIcon ,RightwingIcon } from "../../../svgicon/icon"

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getQuestion } from "../../../happyexamReducer/happyexam";



function Level(){
    
    const level = useSelector((state)=>state.happyexam.level)
   
    const startX=   window.innerWidth / 2;
    const startY = 150;
const params= useParams();
const dispatch = useDispatch();
  const navigate = useNavigate()
  console.log(params)



  function navigatQuestion(levelId){
  console.log(levelId)
    dispatch(getQuestion({classId:params.classId, subjectId:params.subjectId,chapternumId:params.chapterId, levelId:levelId}))
    navigate(`/${params.classId}/${params.subjectId}/${params.chapterId}/${levelId}`);
    return;
  }
   


    return (
        <div className="  w-full  h-auto relative top-[100px] flex flex-col justify-center items-center">
            <div></div>

            {/* here the level content start */}
            <div className=" w-full  relative h-auto flex flex-col gap-5 justify-center items-center">
             
             {
                level?.map((item, index)=>{
                    
                    return(
                     
                        <div className=" flex   justify-center  items-center  cursor-pointer select-none " style={{ position:"absolute",
                            top:`${startY*index}px`,
                             left : (index+1) %2 === 0 ? `${startX+ 0}px` : `${startX -100}px`
                         }} onClick={()=>navigatQuestion(item.level_name)} >

                             <div>{LeftwingIcon}</div>
                        <div className={ `   w-[80px] h-[80px] rounded-full flex flex-col gap-1 justify-center items-center  bg-level_grey shadow-level_shadow active:shadow-none  active:translate-y-[8px] transition-all duration-100 ease-in-out`} id="level" >
                         <div>  {LockIcon}</div>
                         <div className=" font-Nunito text-[10px] text-check_text_grey">Level {item.level_name}</div>
                         </div>

                            <div>{RightwingIcon}</div>

                         </div>
                    )
                })
             }

            </div>
        </div>
    )
}

export default Level;


