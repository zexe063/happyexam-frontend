import Motion from "../dashboard/question/Motion";
import {LevelCompleteIcon } from "../../svgicon/icon"
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

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
        {LevelCompleteIcon}
                <div className=" flex  gap-5 font-Nunito text-[25px]">
                    <p className="  text-text_green text-[15px]">Correct:{questionAnalysis.correct}</p>
                    <p className="  text-text_red text-[15px]" >wrong:{questionAnalysis.wrong}</p>
                </div>

                <p className=" font-Nunito text-[25px] text-text_green flex   gap-2"><span className=" font-medium">Reward</span>: <Motion value={questionAnalysis.correct*10}></Motion></p>

            </div>

            <button className="  font-Nunito text-white bg-black rounded-full px-[50px] py-4 font-semibold" onClick={goLevelHandle}> go level </button>

        </div>
    )
}

export default LevelComplete;