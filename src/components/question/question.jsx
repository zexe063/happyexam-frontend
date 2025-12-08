import { useEffect, useState,useRef} from "react";
import { useSelector,useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {Howl, Howler} from 'howler';
import { easeOut } from "motion";
import {motion,easeInOut,AnimatePresence, px, color} from "motion/react";

import "katex/dist/katex.min.css";
import  Markdown  from "react-markdown";
import ReactMarkdown from 'react-markdown';
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

import correctAudio from "@/audio/correct.mp3";
import wrongAudio from "@/audio/wrong.mp3";
import clickAudio from "@/audio/click.mp3";
import nextAudio from "@/audio/next.mp3";
import dndAudio from "@/audio/dnd.mp3";
import LottieLoading from "@/loading/loading";


import { TiTick } from "react-icons/ti";
import { IoClose, IoGitNetworkOutline, IoSpeedometer } from "react-icons/io5";
import { MdOutlinedFlag } from "react-icons/md";
import { GrFormNext } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";

import { ExplanationOpenOrClose, getQuestion } from "@/happyexamReducer/happyexam";
import { increaseHEP,userProgressEvent } from "@/happyexamReducer/auth";
import Explanation from "./explanation/explanation";
import MotionCounter from "../motionCounter/motionCounter";
import NetworkError from "../error/NetworkError";
import ServerError from "../error/ServerError";
import ReportQuestion from "./reportQuestion/reportQuestion";
import SubscriptionModel from "./subscriptionModel/subscriptionModel";
import Progress from "./progress/progress";
import { ToggleReport } from "../../happyexamReducer/happyexam";



function Question(){


    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector((state)=>state.auth.user);
    const Questiondata = useSelector((state)=>state.happyexam.question);
    const explanation = useSelector((state)=>state.happyexam.explanation);
    const ToggleReportValue = useSelector((state)=>state.happyexam.ToggleReport);
    const Loading = useSelector((state)=>state.happyexam.Loading);
    const isNetworkError = useSelector((state)=>state.happyexam.isServerError);
    const isServerError = useSelector((state)=>state.happyexam.isServerError);
  
  
    const [isOptionSelect,SetisOptionSelect] = useState(false);
    const [OptionSelectedIndex, setOptionSelectedIndex] = useState(null)
    const [correct, setCorrect]  = useState(false)
    const [correctIndex, setCorrectIndex] = useState(null);
    const [attempt, setAttempt] = useState(false);
    const [questionIndex, setQuetsionIndex] = useState(0);
    const question =Questiondata[questionIndex];
    const [questionAnalysisData, setQuestionAnaylsisData] = useState({correct:0, wrong:0})
    const [isLevelLoading, setIsLevelLoading] = useState(false);
    const  blank  = useRef();
    const [FillUp, setFillUp] = useState(false);
    const [correctRow, setCorrectRow]= useState(0);

    const correctSound = new Howl({
      src:[correctAudio]
     })
    const wrongSound = new Howl({
      src:[wrongAudio]
      })
    const clickSound = new Howl({
      src:[clickAudio]
     })
    const nextSound  = new Howl({
      src:[nextAudio]
      })
    const dndSound = new Howl({
      src:[dndAudio]
     })

 

 useEffect(()=>{
    if(!location?.state?.isClick){
      dispatch(getQuestion(params))
    }
  
  },[])

  function FillBox(e,index){

     if(attempt) return null;
    const box = e.currentTarget;
  const  boxpos  =  (e.currentTarget).getBoundingClientRect();
 const  blankpos = blank.current.getBoundingClientRect();
  const boxseatpos = (e.currentTarget).parentNode.getBoundingClientRect()


//  if else start for drag abd r
  if(box.id ==="active"){
  dndSound.play()

      Object.assign(box.style,{
     left:`${boxseatpos.x}px`,
     top:`${boxseatpos.y}px`,
     transition:"all 0.3s ease"
     })
        box.id =  null;
        SetisOptionSelect(false)
        setOptionSelectedIndex(null);
        setFillUp(false)
       

        }

else{

   if(FillUp) return null;
     dndSound.play()

   box.style.position = "fixed";
  box.style.left = boxpos.x+'px';
   box.style.top = boxpos.y +"px";

 setTimeout(()=>{
   
 Object.assign(box.style,{
     left:`${blankpos.x}px`,
     top:`${blankpos.y}px`,
     transition:"all 0.3s ease"
 })
 box.id = "active"
setFillUp(true)
SetisOptionSelect(true);
setOptionSelectedIndex(index);
    
},10)

}
// end of if and else

  }
 


 

   function HandleSelectoption(index){
    
    if(attempt) return   null;
    setOptionSelectedIndex(index);
    clickSound.play()
     SetisOptionSelect(true)
 

   }

   function HandleCheck(){
      if(!isOptionSelect && !attempt) return null;

    setOptionSelectedIndex(null)
     setCorrectIndex(OptionSelectedIndex)
      setAttempt(true);
      

    if(question.answer === OptionSelectedIndex) {
      correctSound.play()
      setQuestionAnaylsisData((prev)=>({...prev, correct:prev.correct+1}))
      setCorrect(true)
      // CHECK CORRECT ROW;
      setCorrectRow((prev)=>prev+1)
    }

    else{
  wrongSound.play()
  setQuestionAnaylsisData((prev)=>({...prev, wrong:prev.wrong+1}))
   setCorrect(false)

 // CHECK CORRECT ROW;
 setCorrectRow(0)
 const action = {action:"HEART-LOST", userId:user._id}
  !user.isPremium && dispatch(userProgressEvent(action));
   
      
    }
   }
 
   function HandleContinue(e){
    
    if(attempt){
  
      if(questionIndex ===  Questiondata.length-1){
   setIsLevelLoading(true)
         dispatch(increaseHEP(+questionAnalysisData.correct*10))
        const LevelCompletedData = {userId:user?._id, action:"LEVEL-COMPLETED", payload:{chapter_name:params.chapter_name,levelId:Questiondata[0]?.levelId, HEP:questionAnalysisData.correct*10}};
       

          dispatch(userProgressEvent(LevelCompletedData)).then((action)=>{
             
             if(action.payload.status === 200){
              setIsLevelLoading(false);
              return navigate(`/course/${params.class_name}/${params.subject_name}/${params.chapter_name}/${params.level_name}/completed`,{state:{questionAnalysisData:questionAnalysisData}})
             }
             else{
              setIsLevelLoading(false);
             }
          })

        
      }
      else{
        
        
        setQuetsionIndex((prev)=>prev+1);
        
        setAttempt(false);
        setCorrectIndex(null);
        setCorrect(null);
        SetisOptionSelect(false)
        setFillUp(false)
        nextSound.play();
     
        
  
       return null;
      }

      
    }


    setOptionSelectedIndex(null);
   setCorrectIndex(OptionSelectedIndex)
  setAttempt(true);

  
   } 
   

       function HandleRetry(){
         dispatch(getQuestion(params))
       }

    
    return(
      <>
      
    { Loading ? 
    (<div className=" w-full
    h-full flex items-center justify-center"><LottieLoading></LottieLoading></div>)

    :isNetworkError ? <NetworkError HandleRetry={HandleRetry}/> 
    :isServerError ?<ServerError HandleRetry={HandleRetry} />

    :<section className=" w-full h-full flex flex-col">
     
    
             <Progress  currentLength={questionIndex+1} totalLength={Questiondata?.length} correctRow={correctRow}></Progress>

<div className=" relative  w-full h-[calc(100vh-60px)] overflow-y-auto overflow-x-hidden py-10   flex  justify-center items-center">
      <AnimatePresence mode="wait">

            < motion.div  key={questionIndex} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.1, delay:0.3, ease:easeInOut}}  className={`  relative  w-[412px] md:w-[540px] h-[100%] flex flex-col   items-center  gap-5  md:gap-10 transition-all duration-300 ease-out`}>

                {/* here the question */}

                  <div className=" w-full flex flex-col px-5 py-5 md:px-0  justify-center items-center gap-12">

             <div className=" w-full  flex  gap-1   font-Nunito   text-[16px] tracking-wide">

             <span>{(questionIndex+1)}.</span>
                 
             <div className=" w-full h-auto flex flex-col gap-2 font-normal">
               <ReactMarkdown 
            rehypePlugins={[rehypeKatex]} remarkPlugins={[remarkMath]}>{user?.userPreference?.language ==="english"?(question?.question_name?.english)?.replace(/<br>/g, '\n\n'): question?.question_name?.hindi}</ReactMarkdown>
             </div> 

             </div>
            
            {/* here the image */}

{
  question?.image && <img  src={question.image}  className="w-[90vw] h-full  md:w-[400px] md:max-h-[300px]  object-contain"></img>
}



          {/* here the option */}
          <div className="  relative  w-full justify-center items-center flex flex-col gap-5">

            {/* here the blank */}
            {
  question?.question_type ==="DND" && <div  className=" w-[100px] h-[100px] border-[2px] border-dashed border-gray-200 rounded-lg flex justify-center items-center">
    <div ref={blank} className=" w-[48px] h-[48px] bg-gray-100 rounded-lg"></div>
    </div>
}

          <div className={`   ${question?.question_type === "DND" ? " flex gap-2 " : "flex flex-col gap-2 md:gap-2"}font-Nunito text-black
           `}>

            {
              
              question?.option?.[user?.userPreference?.language === "english"?"english" : "hindi"].map((item,index)=>{
                      
                return question.question_type === "DND" ? (
                      <div  className="w-[48px] h-[48px] rounded-lg bg-gray-100">

                        <div className={`  flex justify-center items-center cursor-grabbing select-none  w-[48px] h-[48px] bg-white rounded-lg border-[2px] border-solid

                        ${OptionSelectedIndex === index ? " shadow-btn-box-blue border-blue-500 text-btn-box-blue_text " : correctIndex === index ?  correct ? " shadow-btn-box-correct border-green-B700  text-green-B700" : "  border-red-500 shadow-btn-box-wrong text-red-500" : "  shadow-btn-grey border-gray-200 text-black"   }
                          `} onClick={(e)=>FillBox(e, index)}>

                          <Markdown  remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{item}</Markdown>

                        </div>

                        </div>
                      
                    ) :

                     (
                 
           
                  <motion.div  whileTap={{ 
                    scale: 0.95,
                    transition:{
                    duration:0.15,
                    ease:easeOut
                    }
                  }}
                  animate={{scale:0.96}}
                 key={index} className={` relative w-[370px] md:w-[540px]  border-[2px] border-solid  pt-[16px] pb-[16px]  rounded-[12px] flex gap-2 items-center cursor-pointer  transition-all duration-100 ease-in-out ${OptionSelectedIndex === index ? "border-blue-400 text-blue-600" : correctIndex === index ?  correct ? " border-green-400" : " border-red-B500" : "border-gray-A100"   }`} onClick={()=>HandleSelectoption(index)}>
                  
                   
                   <span  className={` ml-2 flex-shrink-0   font-Nunito w-[22px] h-[22px]  text-[13px] flex justify-center items-center ${OptionSelectedIndex  === index ?   " bg-blue-A400 text-white " : correctIndex === index ? correct ? " bg-green-500  text-white" : " bg-red-400 text-white" : " text-black  bg-gray-50"}  rounded-full font-semibold`}>

                  {user?.userPreference?.language === "english"? String.fromCharCode(65+index) : String.fromCharCode(2325 + index)}
                        
                      </span>

                    <span className=" font-Nunito  text-[16px] font-normal "> 
                      <Markdown  remarkPlugins={remarkMath} rehypePlugins={rehypeKatex}>{item}</Markdown>
                      </span>

                  {
                    correctIndex === index ? correct ? <div  className=" w-[15px] h-[15px] absolute top-[-5px] right-[-5px] rounded-sm bg-green-C600"><TiTick size="15" color="white"></TiTick></div> : <div className=" w-[15px] h-[15px] absolute top-[-5px] right-[-5px] rounded-sm bg-red-A500"><IoClose color="white" size="15" stroke="5"></IoClose></div> : null
                  }

                   
                  </motion.div>
                )

              })
            }
          </div>
           
           </div>

   
            </div>
           
            </motion.div>

            </AnimatePresence>

            </div>

    

 {/* here the contiue system  */}

 <div className=" sticky z-50 bottom-0  w-full h-[100px] border-[1px] border-solid flex justify-center items-center  border-gray-200">
 
  {/* <button className={` mr-10 w-[50px] h-[45px]  font-Nunito text-lg  font-medium rounded-lg  bg-black shadow-btn-black text-white flex justify-center items-center top-5" `} onClick={()=>setQuetsionIndex((prev)=>prev-1)} > <IoIosArrowBack  size={25} color="white"/></button>  */}
 <button className={`w-[90%] md:w-[300px] h-[48px]  font-Nunito text-lg  font-medium rounded-full   ${isOptionSelect  ? "bg-black shadow-btn-black text-white" : " bg-black/5  text-gray-500"}`} onClick={HandleCheck}>check</button>
   {/* <button className={` ml-10 w-[50px] h-[45px]  font-Nunito text-lg  font-medium rounded-lg  bg-black shadow-btn-black text-white flex justify-center items-center top-5" `} onClick={()=>setQuetsionIndex((prev)=>prev+1)} ><GrFormNext size={25} color="white" ></GrFormNext></button>  */}
 </div>

 {/* here the continue end */}




  {/* here the poup window of correct answr is start */}
  <div  className={` ${attempt ?  "translate-y-0" : "translate-y-[150px]"}  fixed bottom-0   left-[50%] -translate-x-[50%] w-full md:w-[500px] rounded-tr-xl rounded-tl-xl    h-[150px]  transition-all duration font-Nunito-100  ease-in-out z-50  ${ correct  ? " bg-green-200 text-green-A700" :" bg-gray-200  text-chcek_red-B500" } `}>


  <div className=" relative w-full h-full flex flex-col justify-between py-2">

    <div className="relative top-5 w-full flex justify-between px-2 ">
       <div className=" flex  justify-center   gap-2">
      <span>{correct ? <img src="/icons/questionCorrect.svg" width={30} height={30}/> :  <img src="/icons/magnify.svg" width={30} height={30}/> }</span>
      <div className="font-Nunito text-black text-[22px]  md:text-[16px]  flex justify-center items-center gap-2 font-semibold">

        {user?.userPreference?.language === "english" ? correct ? " Correct" : "here is answer" : correct ? "सही जवाब" : "आपका उत्तर है:" }
        {
        correct ?  <span className=" text-[14px]  text-green-700"> +<MotionCounter value={10} /></span> 
        :
        <span>  {user?.userPreference?.language === "english"? String.fromCharCode(65+question?.answer) : String.fromCharCode(2325 + question?.answer)}</span>
        }

      </div>
      </div>

      <span className=" cursor-pointer" onClick={()=>dispatch(ToggleReport(true))}><MdOutlinedFlag size={20} color="grey"></MdOutlinedFlag></span>
    </div>

    <div className=" mb-2 flex justify-between px-2">
      <button  onClick={()=>dispatch(ExplanationOpenOrClose(true))} className="w-[30%] h-[48px] bg-black/5 shadow-btn-why text-black font-Nunito font-medium rounded-full">Why?</button>

      <button  className={`w-[65%] h-[48px] text-white font-Nunito font-medium rounded-full ${correct ? "bg-green-600  shadow-btn-correct" : "bg-black shadow-btn-black"} flex justify-center items-center`} onClick={HandleContinue}>

        {
        Questiondata.length-1 === questionIndex  ? isLevelLoading ? 

       <div className={` w-5 h-5 animate-spin rounded-full border-[2px] border-solid border-white ${correct? "border-t-green-600" : "border-t-black"}  `}></div>
        : "Level complete"
        :"Continue"
        }
        
        </button>
    </div>
  </div>
            
      </div>  


  {/* here the poup window of correct answer is end */}
          
            
            {/* here the report question */}
             {ToggleReportValue? <ReportQuestion questionId={question?._id}></ReportQuestion> : null}

             {/* here the explaintion  */}
          {explanation ? <Explanation data={Questiondata[questionIndex]}></Explanation> :  null}
          {!user.isPremium && user.hearts <1 && <SubscriptionModel></SubscriptionModel>}



  
            </section>//
}


            </>
     

    )



}

export default Question;