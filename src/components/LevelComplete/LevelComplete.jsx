

import { useLocation, useNavigate, useParams } from "react-router-dom";


function LevelComplete(){


    const params = useParams();
    const navigate = useNavigate()
    const  location = useLocation();
    const questionAnalysisData = location.state.questionAnalysisData;
  


     const ScoreCard = [
        { id: 1, tittle:"Total HEP", icon:"/icons/HEP.svg", bgColor:"#E6C60D", value:questionAnalysisData.correct *10 < 1  ? '00' : questionAnalysisData.correct *10},

        { id:2 , tittle:"Correct", icon:"/icons/correct.svg", bgColor:"#27C46E", value:questionAnalysisData.correct > 9  ? questionAnalysisData.correct :  `0${questionAnalysisData.correct}`},

        { id:3, tittle:"Wrong", icon:"/icons/wrong.svg", bgColor:"#F67810",  value:questionAnalysisData.wrong > 9  ? questionAnalysisData.wrong :`0${questionAnalysisData.wrong}`}
     ]
 
    
    
    function goLevelHandle(){
     navigate(`/course/${params.class_name}/${params.subject_name}/${params.chapter_name}`)
    }
   
    return(

        <>
        <div className=" w-full h-full flex flex-col gap-[80px] justify-center items-center ">
      
            <div className=" flex flex-col justify-center items-center gap-5">
          <img src="/icons/lessonCompleted.svg" width={96} height={96}/>
            <p className=" font-semibold font-Space_Grotesk text-3xl">Level Completed</p>
            </div>


            <div className=" flex  gap-5">
            {
                ScoreCard?.map((item)=>{
                    return (
                        <div  key={item.id} className={` w-[110px] h-[94px] md:w-[130px] rounded-xl flex flex-col justify-center items-center`} style={{backgroundColor:item.bgColor}} >
                            <p className="  font-semibold text-white font-Nunito text-sm">{item.tittle}</p>
                         <div className=" w-[105px] h-[75px] md:w-[125px]  bg-white rounded-xl  mb-[2px] flex justify-center items-center gap-4 font-Space_Grotesk font-bold text-xl">
                            <span><img  src={item.icon} width={35} height={35} /></span>
                            <span>{item.value}</span>
                        </div>
                        </div>
                    )
                })
            }
            </div>

            <button className="  font-Nunito text-white bg-black shadow-btn-black rounded-full h-[48px] w-[350px] font-semibold" onClick={goLevelHandle}> Continue</button>

        </div>



        </>
    )
}

export default LevelComplete;