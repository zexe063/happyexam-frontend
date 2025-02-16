

import { useSelector,useDispatch } from "react-redux";
import Progress from "../progress/progress";
import { useEffect, useState } from "react";
import { ExplanationOpenOrClose, getQuestion, ToggleReport } from "../../../happyexamReducer/happyexam";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import correctAudio from "../../../audio/correct.mp3"
import wrongAudio from "../../../audio/correct.mp3"
import ClipLoader from "react-spinners/ClipLoader";
import { TiTick } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { MdOutlinedFlag } from "react-icons/md";
import Explanation from "./explanation/explanation";
import ArrowSVG from "./arrowSVG";
import Motion from "./Motion";
import {motion,easeInOut,AnimatePresence} from "motion/react"
import { easeOut } from "motion";
import Error from "../../error/error";
import ReportQuestion from "./ReportQuestion/ReportQuestion";
import { useRef } from "react";
import { questionAnalysis } from "../../../happyexamReducer/happyexam";
import { increaseHappyPoints } from "../../../happyexamReducer/auth";






function Question(){

    const  Questiondata = useSelector((state)=>state.happyexam.question);
    const explanation = useSelector((state)=>state.happyexam.explanation);
    const ToggleReportValue = useSelector((state)=>state.happyexam.ToggleReport);
    const user = useSelector((state)=>state.auth.user);
    const Loading = useSelector((state)=>state.happyexam.Loading);
    const dispatch = useDispatch();
    const [isblue, setIsblue] = useState(false)
    const [correct, setCorrect]  = useState(false);
    const [isgreen,setIsgreen] = useState(false);
  const [correctIndex, setCorrectIndex] = useState(null);
    const [attempt, setAttempt] = useState(false);
    const [questionIndex, setQuetsionIndex] = useState(0);
   const question =Questiondata[questionIndex];
   const [questionAnalysisData, setQuestionAnaylsisData] = useState({correct:0, wrong:0})
   const [correctSound] = useState((new Audio(correctAudio)))
   const [wrongSound] = useState((new Audio(wrongAudio)));
   const mounted = useRef(false)
 const params = useParams()
 const location = useLocation()
 const navigate = useNavigate()

 if(!user.id){
  navigate("/")
 }

  useEffect(()=>{
    if(!mounted.current && !location?.state?.isClick){
      dispatch(getQuestion(params))
       mounted.current = true
    }
  
  },[])

   function HandleSelectoption(index){
    
    if(attempt) return   null;
    setIsblue(index);
     setIsgreen(true)
 

   }
 
   function HandleCheckorNext(e){
  
    if(attempt){
  
      if(questionIndex ===  Questiondata.length-1){
         dispatch(questionAnalysis(questionAnalysisData))
         dispatch(increaseHappyPoints(+questionAnalysisData.correct*10))
        navigate(`/${params.classId}/${params.subjectId}/${params.chapterId}/${params.levelId}/completed`)
        return;
      }
      else{
        
        
        setQuetsionIndex((prev)=>prev+1);
        setIsgreen(false);
        setAttempt(false);
        setCorrectIndex(null);
        setCorrect(null);
     
        
  
       return null;
      }

      
    }

    if(!isgreen)  return  null;

    setIsblue(null);
   setCorrectIndex(isblue)
  setAttempt(true);

    if(question.answer === isblue) {
      setCorrect(true);
      correctSound.play()
      setQuestionAnaylsisData((prev)=>({...prev, correct:prev.correct+1}))
          
    }
      
    else{
    setCorrect(false)
  wrongSound.play()
  setQuestionAnaylsisData((prev)=>({...prev, wrong:prev.wrong+1}))
      
    }
  
   } 
   

   
   
   function renderSVG(image){
    
   if(!image) return;

    return(
      <>
     {
      typeof image  === 'string' ?  (<div dangerouslySetInnerHTML={{__html: image}}/>) : image
     }
    </>
    )
   }

   renderSVG()

   function  handleExplanationOpen(){
    dispatch(ExplanationOpenOrClose(true))
   }

    
    return(
      <>
      
    { Loading ? 
    (<div className=" w-full
    h-full flex items-center justify-center"> <ClipLoader ></ClipLoader></div>)

    :Questiondata?.length  === 0 ? (<Error></Error>)

    :<div className=" relative  flex  flex-col items-center justify-between gap-2  w-full h-full overflow-hidden">
        {ToggleReportValue? <ReportQuestion questionId={question._id}></ReportQuestion> : null}
  {explanation ? <Explanation data={question}></Explanation> : null}
    
             <Progress  currentLength={questionIndex+1} totalLength={Questiondata.length}></Progress>

       <AnimatePresence mode="wait">
            < motion.div  key={questionIndex} initial={{opacity:0, x:-500}} animate={{opacity:1, x:0}} transition={{duration:0.1, delay:0.3, ease:easeInOut}}  className={`  relative  md:left-10  w-full h-auto flex flex-col  items-center justify-center gap-5  md:gap-10 transition-all duration-300 ease-out`}>

                {/* here the question */}

             <div className=" w-full  max-w-[600px] md:max-w-[700px]  px-10  flex  gap-1  font-Nunito   text-[16px] md:text-[17px] tracking-wide  font-medium">
              <span className=" flex-shrink-0">{questionIndex+1}.</span>
            <div className="  flex-1 break-words text-justify">
              {
                user.language === "english" ?
              question.question_name.english: question.question_name.hindi
              }

            </div>
            </div>

            
            {/* here the image */}

{
  question.image ?  renderSVG(question.image): null
}

          {/* here the option */}

          <div className=" font-Nunito text-black
           flex flex-col gap-3  md:grid md:grid-cols-2 md:gap-5">

            {
              
              question.option?.[user.language === "english"?"english" : "hindi"].map((item,index)=>{
                return(

                  <motion.div  whileTap={{ 
                    scale: 0.95,
                    transition:{
                      duration:0.15,
                      ease:easeOut
                    }
                  }}
                  animate={{scale:0.96}}
                 key={index} className={` relative w-[300px]    min-h-[60px]  p-2 rounded-lg flex  gap-5 items-center cursor-pointer  transition-all duration-100 ease-in-out ${isblue  === index ? "bg-background_blue   border-border_blue border-[2px] border-solid "  : correctIndex  ===  index ? correct ? "bg-correct_green  border-border_green border-[2px] border-solid ": " bg-wrong_red  border-[2px] border-solid  border-border_red " :"bg-white border-[2px] border-solid border-border_grey "} `} onClick={()=>HandleSelectoption(index)}>
                   
                   {
                    isblue === index ? <ArrowSVG color="#88a4f9" bgColor="#eef3ff"></ArrowSVG> :  correctIndex === index ?  correct ? <ArrowSVG color="#04F204" bgColor="#EBFFDB"></ArrowSVG> : <ArrowSVG color="#d32f2f" bgColor="#FEEBE6"></ArrowSVG> : null
                   }

                  {
                    correctIndex === index ? correct ? <div  className=" w-[15px] h-[15px] absolute top-[-5px] right-[-5px] rounded-sm bg-green_tick_rectangle"><TiTick size="15" color="white"></TiTick></div> : <div className=" w-[15px] h-[15px] absolute top-[-5px] right-[-5px] rounded-sm bg-red_tick_rectangle"><IoClose color="white" size="15" stroke="5"></IoClose></div> : null
                  }

                    <div className={` w-[30px] h-[30px]  flex justify-center items-center ${isblue  === index ?   " border-[1px]  border-solid  border-border_blue  text-text_blue" : correctIndex === index ? correct ? " border-[1px] border-solid border-border_green text-text_green " : " border-[1px] border-solid  text-text_red border-border_red" : "border-[1px] border-solid border-black text-black"}  rounded-md`}>{
                       user.language === "english"? String.fromCharCode(97+index) : String.fromCharCode(2325 + index)
                      }</div>
                    <div className={` font-Nunito text-[14px]  font-medium ${isblue  === index ? "text-text_blue" : correctIndex === index ? correct ? "text-text_green" :"text-text_red" : "text-black"}`}>{item} </div>
                  </motion.div>
                )
              })
            }
          </div>
           

   
            
           
            </motion.div>

            </AnimatePresence>


            <div  className={`   w-full  h-[150px] flex  flex-col justify-evenly    md:justify-between gap-1  md:flex md:flex-row  transition-all durationfont-Nunito-100  ease-in-out  ${ attempt  ?  correct  ? " bg-popup_green text-text_green" :" bg-popup_red  text-chcek_text_red" : "border-[1px] border-solid border-border_grey" } `}>
            
            

         <div className="  flex md:flex-col justify-between md:justify-center md:px-10  gap-1">
          {
            attempt ?(
              <>
               <div className=" px-10 flex gap-1 justify-center items-center font-Nunito text-[20px] font-semibold ">
             
            
              <div className=" font-Nunito flex gap-3 justify-center items-center">{correct ? "Awesome !" :  `correct answer : ${String.fromCharCode(97+question.answer)}` }  
                 {correct  ?<div className=" flex items-center font-Nunito text-[15px]"><span className="transform translate-y-[-1.5px]">+</span><Motion value={10}></Motion> </div>:null}
        </div>

            
             </div>

            <div className=" mr-10 flex justify-center items-center cursor-pointer" onClick={()=>dispatch(ToggleReport())}><MdOutlinedFlag size={20}></MdOutlinedFlag></div>
             </>
            ) : null
          }                 
         </div>

         <div className=" flex justify-around items-center gap-5 md:pr-20">
        {
          attempt ? !correct ?    <div className=" flex justify-center items-center border-[2px] border-solid border-border_check_red rounded-xl  min-w-[150px] min-h-[50px] md:min-h-[45px] font-Nunito  font-medium text-chcek_text_red text-[20px] cursor-pointer" onClick={handleExplanationOpen}>why</div> : null : null
        }

          <div className={`  flex justify-center items-center p-2 ${attempt ? correct ? "w-[350px]" : "w-[150px]" :"w-[350px]"} md:w-[200px] min-h-[48px] md:min-h-[45px] rounded-full  translate-y-0 transition-all ease-in-out duration-100 cursor-pointer font-Nunito text-[16px] font-semibold active:translate-y-[3px]  active:shadow-none ${attempt ?  correct ? "  bg-button_green  shadow-check_next_green  text-white"  : " bg-button_red shadow-check_next_red text-chcek_text_red" : isgreen ?  "bg-button_green    shadow-check_next_green text-white" : "  bg-check_grey shadow-grey_shadow "}`} onClick={HandleCheckorNext}>{attempt ?  questionIndex === Questiondata.length-1  ? "Complete" :  "Next" : "Check"}</div>
         </div>
             

              
      
            </div>  

         
            </div>//  parent div
}
            </>
     

    )
}

export default Question;



