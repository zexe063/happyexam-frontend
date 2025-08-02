import Motion from "../dashboard/question/Motion";
import {LevelCompleteIcon } from "../../svgicon/icon"
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Lottie from "lottie-react";
 import Levelbadge  from "./Levelbadge.json"

function LevelComplete(){
const questionAnalysis = useSelector((state)=>state.happyexam.questionAnalysis);
    const params = useParams();
    const navigate = useNavigate()
    function goLevelHandle(){
     navigate(`/${params.classId}/${params.subjectId}/${params.chapterId}`)
    }
    console.log("i am here")
    return(
        <div className=" w-full h-full flex flex-col gap-[30px] justify-center items-center ">
      
            <div className=" flex flex-col justify-center items-center  gap-2">
               <Lottie animationData={Levelbadge} loop={true}  autoPlay={true} className=" w-[300px] h-[300px]" >   </Lottie>
                

                <p className=" font-Nunito text-[48px] text-black flex   gap-2"><Motion value={questionAnalysis.correct*10}></Motion></p>

            </div>

            <button className="  font-Nunito text-white bg-[#F7C325] rounded-full h-[48px] w-[350px] font-semibold" onClick={goLevelHandle}> Continue</button>

        </div>
    )
}

export default LevelComplete;