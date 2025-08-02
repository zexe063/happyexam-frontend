


import { useSelector,useDispatch } from "react-redux";
import { InlineMath, BlockMath } from "react-katex";
 import "katex/dist/katex.min.css";
import Progress from "../progress/progress";
import { useEffect, useState } from "react";
import { ExplanationOpenOrClose, getQuestion, ToggleReport } from "../../../happyexamReducer/happyexam";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import correctAudio from "../../../audio/correct.mp3";
import wrongAudio from "../../../audio/wrong.mp3";
import clickAudio from "../../../audio/click.mp3";
import nextAudio from "../../../audio/next.mp3";
import dndAudio from "../../../audio/dnd.mp3";
import LottieLoading from "../../../loading/loading";



import { TiTick } from "react-icons/ti";
import { IoClose, IoGitNetworkOutline, IoSpeedometer } from "react-icons/io5";
import { MdOutlinedFlag } from "react-icons/md";
import Explanation from "./explanation/explanation";
import ArrowSVG from "./arrowSVG";
import Motion from "./Motion";
import {motion,easeInOut,AnimatePresence, px, color} from "motion/react";
import { easeOut } from "motion";
import Error from "../../error/error";
import ReportQuestion from "./ReportQuestion/ReportQuestion";
import { useRef } from "react";
import { questionAnalysis } from "../../../happyexamReducer/happyexam";
import { increaseHappyPoints } from "../../../happyexamReducer/auth";
import Loading from "../../../loading/loading";
import Lottie from "lottie-react";
import tick from "./tick.json";
import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import { correctIcon,wrongIcon } from "../../../svgicon/icon";


function Question(){


   const dispatch = useDispatch();
    const  Questiondata = useSelector((state)=>state.happyexam.question);
    const explanation = useSelector((state)=>state.happyexam.explanation);
    console.log(explanation)
    const ToggleReportValue = useSelector((state)=>state.happyexam.ToggleReport);
    const user = useSelector((state)=>state.auth.user);
    const Loading = useSelector((state)=>state.happyexam.Loading);


     const [isOptionSelect,SetisOptionSelect] = useState(false);
    const [OptionSelectedIndex, setOptionSelectedIndex] = useState(null)
    const [correct, setCorrect]  = useState(false)
  const [correctIndex, setCorrectIndex] = useState(null);
    const [attempt, setAttempt] = useState(false);
    const [questionIndex, setQuetsionIndex] = useState(0);
   const question =Questiondata[questionIndex];
   const [questionAnalysisData, setQuestionAnaylsisData] = useState({correct:0, wrong:0})
   const [correctSound] = useState((new Audio(correctAudio)))
   const [wrongSound] = useState((new Audio(wrongAudio)));
   const [clickSound] = useState((new Audio(clickAudio)));
   const [nextSound]  = useState((new Audio(nextAudio)));
   const [dndSound] = useState(new Audio(dndAudio));
   const mounted = useRef(false);
 const params = useParams();
 const location = useLocation();
 const navigate = useNavigate();
const  blank  = useRef();
const  [FillUp, setFillUp] = useState(false);


console.log(question)
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
// end of if and elese

  }
 

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
    }

    else{
  wrongSound.play()
  setQuestionAnaylsisData((prev)=>({...prev, wrong:prev.wrong+1}))
   setCorrect(false)
      
    }
   }
 
   function HandleContinue(e){
  
    if(attempt){
  
      if(questionIndex ===  Questiondata.length-1){
         dispatch(questionAnalysis(questionAnalysisData))
         dispatch(increaseHappyPoints(+questionAnalysisData.correct*10))
        navigate(`/${params.classId}/${params.subjectId}/${params.chapterId}/${params.levelId}/completed`)
        return;
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
   

   
   
   function renderSVG(image){
    
   if(!image) return;

    return(
      <>
     {/* {
      typeof image  === 'string' ?  (<div dangerouslySetInnerHTML={{__html: image}}/>) : image.test(/(https)/gm) ?(<image src={image}></image>): null
     } */}
     {
      /(https)/gm.test(image) ?  <img src={image}  style={{width:"300px", height:"300px"}}></img> :  <div dangerouslySetInnerHTML={{__html:image}}></div>
     }
    </>
    )
   }


   

    
    return(
      <>
      
    { Loading ? 
    (<div className=" w-full
    h-full flex items-center justify-center"><LottieLoading></LottieLoading></div>)

    :Questiondata?.length  === 0 ? (<Error></Error>)

    : 


 <section className=" w-full h-full flex flex-col">
     
    
             <Progress  currentLength={questionIndex+1} totalLength={Questiondata.length}></Progress>

<div className=" relative  w-full  h-[calc(100vh-60px)] overflow-y-auto overflow-x-hidden p-10   flex  justify-start">
      <AnimatePresence mode="wait">
            < motion.div  key={questionIndex} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.1, delay:0.3, ease:easeInOut}}  className={`  relative  w-full h-[100%] flex flex-col   items-center  gap-5  md:gap-10 transition-all duration-300 ease-out`}>

                {/* here the question */}

             <div className=" w-full max-w-[700px] md:max-w-[700px] flex gap-1 px-10   font-Nunito   text-[16px] md:text-[18px] tracking-wide  font-medium">
              <Markdown rehypePlugins={rehypeKatex} remarkPlugins={remarkMath}>{question.question_name.english}</Markdown></div>
            
            {/* here the image */}

{
  question.image ?  renderSVG(question.image): null
}



          {/* here the option */}
          <div className="  relative  w-full flex justify-center items-center flex-col gap-5 p-5">

            {/* here the blank */}
            {
  question.question_type ==="DND" && <div  className=" w-[100px] h-[100px] border-[2px] border-dashed border-border_grey rounded-lg flex justify-center items-center">
    <div ref={blank} className=" w-[48px] h-[48px] bg-[#f2f2f2] rounded-lg"></div>
    </div>
}

          <div className={`   ${question.question_type === "DND" ? " flex gap-2 " : "flex flex-col gap-3  md:grid md:grid-cols-2 md:gap-5"}font-Nunito text-black
           `}>

            {
              
              question.option?.[user.language === "english"?"english" : "hindi"].map((item,index)=>{
                      
                return question.question_type === "DND" ? (
                      <div  className="w-[48px] h-[48px] rounded-lg bg-[#f2f2f2]">

                        <div className={`  flex justify-center items-center cursor-grabbing select-none  w-[48px] h-[48px] bg-white rounded-lg border-[2px] border-solid

                        ${OptionSelectedIndex === index ? " shadow-box_blue border-box_blue_border text-box_blue_text " : correctIndex === index ?  correct ? " shadow-box_coreect border-box_correct_border  text-box_coreect_text" : "  shadow-box_wrong border-box_wrong_border text-box_wrong_text" : "  shadow-grey_shadow border-border_grey text-black"   }
                          `} onClick={(e)=>FillBox(e, index)}>

                          <Markdown  remarkPlugins={remarkMath} rehypePlugins={rehypeKatex}>{item}</Markdown>

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
                 key={index} className={` relative w-[300px] border-[2px] border-solid p-2   min-h-[52px]  rounded-[10px] flex  gap-5 items-center cursor-pointer  transition-all duration-100 ease-in-out ${OptionSelectedIndex === index ? "border-border_blue" : correctIndex === index ?  correct ? " border-border_green" : " border-border_red" : "border-check_grey"   }`} onClick={()=>HandleSelectoption(index)}>
                  
                   
                   <p  className={` w-[22px] h-[22px] text-[13px] flex justify-center items-center ${OptionSelectedIndex  === index ?   " bg-tick_bg_blue text-white " : correctIndex === index ? correct ? " bg-tick_bg_green text-white" : " bg-tick_bg_red text-white" : " text-black  bg-tick_bg"}  rounded-full font-semibold`}>

                  {user.language === "english"? String.fromCharCode(65+index) : String.fromCharCode(2325 + index)}
                        
                      </p>

                    <div className=" font-Nunito font-medium text-[14px] "> 
                      <Markdown  remarkPlugins={remarkMath} rehypePlugins={rehypeKatex}>{item}</Markdown>
                      </div>

                  {
                    correctIndex === index ? correct ? <div  className=" w-[15px] h-[15px] absolute top-[-5px] right-[-5px] rounded-sm bg-green_tick_rectangle"><TiTick size="15" color="white"></TiTick></div> : <div className=" w-[15px] h-[15px] absolute top-[-5px] right-[-5px] rounded-sm bg-red_tick_rectangle"><IoClose color="white" size="15" stroke="5"></IoClose></div> : null
                  }

                   
                  </motion.div>
                )

              })
            }
          </div>
           
           </div>

   
            
           
            </motion.div>

            </AnimatePresence>

            </div>

    

 {/* here the contiue system  */}

 <div className=" sticky z-50 bottom-0  w-full h-[100px] border-[1px] border-solid flex justify-center items-center  border-border_grey">
 <button className={`w-[300px] h-[48px]  font-Nunito text-lg  font-medium rounded-full   ${isOptionSelect  ? "bg-background_black shadow-black text-white" : " bg-check_grey  text-black"}`} onClick={HandleCheck}>check</button>
 </div>

 {/* here the continue end */}




  {/* here the poup window of correct answr is start */}
  <div  className={` ${attempt ?  "translate-y-0" : "translate-y-[150px]"}  fixed bottom-0   left-[50%] -translate-x-[50%] w-full md:w-[500px] rounded-tr-xl rounded-tl-xl    h-[150px]  transition-all duration font-Nunito-100  ease-in-out z-50  ${ correct  ? " bg-popup_green text-text_green" :" bg-popup_red  text-chcek_text_red" } `}>


  <div className=" relative w-full h-full flex flex-col justify-between py-2">

    <div className="relative top-5 w-full flex justify-between px-2 ">
       <div className=" flex  justify-center   gap-2">
      <span>{correct ? correctIcon : wrongIcon}</span>
      <p className="font-Nunito text-black text-[22px]  md:text-[16px]  flex justify-center items-center gap-2 font-semibold">

        {correct ? "Correct" : "Here is answer:"}
        {
        correct ?  <span className=" text-[14px]  text-text_motion_green"> +<Motion value={15}></Motion></span> 
        :
        <span> {String.fromCharCode(97+question.answer)} </span>
        }

      </p>
      </div>

      <span><MdOutlinedFlag size={20} color="grey"></MdOutlinedFlag></span>
    </div>

    <div className=" mb-2 flex justify-between px-2">
      <button  onClick={()=>dispatch(ExplanationOpenOrClose(true))} className="w-[30%] h-[48px] bg-why_grey shadow-why text-black font-Nunito font-medium rounded-full">Why?</button>
      <button className={`w-[65%] h-[48px] text-white font-Nunito font-medium rounded-full ${correct ? "bg-button_green  shadow-correct_shadow" : "bg-background_black shadow-black"}`} onClick={HandleContinue}>{Questiondata.length-1 === questionIndex  ? "Complete" : "Continue"}</button>
    </div>
  </div>

            
      </div>  


  {/* here the poup window of correct answer is end */}
          
            
            {/* here the report question */}
             {ToggleReportValue? <ReportQuestion questionId={question._id}></ReportQuestion> : null}

             {/* here the explaintion  */}
          {explanation ? <Explanation data={Questiondata[questionIndex]}></Explanation> :  null}


  
            </section>//
}


            </>
     

    )






}

export default Question;
