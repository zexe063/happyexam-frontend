

import { useSelector,useDispatch } from "react-redux";
import Progress from "../progress/progress";
import { useState } from "react";
import { ExplanationOpenOrClose, Height } from "../../../happyexamReducer/happyexam";
import { TbJumpRope, TbNavigationUp, TbPlayerTrackNextFilled } from "react-icons/tb";
import { use } from "react";
import { FaHandHolding, FaLeaf } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import correctAudio from "../../../audio/correct.mp3"
import wrongAudio from "../../../audio/correct.mp3"
import ClipLoader from "react-spinners/ClipLoader";
import { TiTick } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { FaBomb } from "react-icons/fa6";
import { MdOutlinedFlag } from "react-icons/md";
import Explanation from "./explanation/explanation";





function Question(){

    const  Questiondata = useSelector((state)=>state.happyexam.question);
const explanation = useSelector((state)=>state.happyexam.explanation);
   console.log(explanation)
    const user = useSelector((state)=>state.happyexam.user);
    const dispatch = useDispatch();
    const [isblue, setIsblue] = useState(false);
    const [correct, setCorrect]  = useState(null);
    const [isgreen,setIsgreen] = useState(false);
  const [correctIndex, setCorrectIndex] = useState(null);
    const [attempt, setAttempt] = useState(false);
    const [questionIndex, setQuetsionIndex] = useState(0);
    const [isAnimating,  setIsAnimating] = useState(false);
   const question =Questiondata[questionIndex];
   const [correctSound] = useState((new Audio(correctAudio)))
   const [wrongSound] = useState((new Audio(wrongAudio)));
   const height = useSelector((state)=>state.happyexam.height);
   const [popupToggle, setPopupToggle] = useState(false)
   
  
const navigate = useNavigate()
   function HandleSelectoption(index){
    
    if(attempt) return   null;
    setIsblue(index);
     setIsgreen(true)
 

   }
 
   function HandleCheckorNext(e){
  
    
    
    if(attempt){
  
      if(questionIndex ===  Questiondata.length-1){
        navigate("/completd")
        return;
      }
      else{
        setIsAnimating(true);

        setTimeout(()=>{
          setQuetsionIndex((prev)=>prev+1);
          setIsAnimating(false)

        },500)
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
      // correctSound.currentTime = 0;
      correctSound.play()
          
    }
      
    else{
    setCorrect(false)
  wrongSound.play()
      
    }
  
      
  
     
   } 
   

   
   
   function renderSVG(image){
    
  

    return(
      <>
     {
      typeof image  === 'object' ? image : (<div dangerouslySetInnerHTML={{__html: image}}/>)
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
      {
   !Questiondata.length ?  <div className=" w-full
    h-full flex items-center justify-center"> <ClipLoader ></ClipLoader></div>
      :

        <div className=" relative  flex  flex-col items-center justify-between gap-2  w-full h-full overflow-hidden">
       {explanation ?   <Explanation   data={user.language === "english" ? ({explain:question.explanation.english, solution:question.solution}) :({explain:question.explanation.hindi, solution:question.solution})}></Explanation>: null}

             <Progress  currentLength={questionIndex+1} totalLength={Questiondata.length}></Progress>

       
            <div  className={`  relative left-0  w-full h-auto flex flex-col  items-center justify-center gap-5 transition-all duration-300 ease-out
            ${isAnimating ? 'translate-x-[-5%] opacity-0' : 'translate-x-0 opacity-100'} `}>

                {/* here the question */}
             <div className=" w-[calc(100%-10%)]  justify-center items-center  flex gap-3 font-Nunito   text-[18px] md:text-[20px]">
              <span >{questionIndex+1}.</span>
            <div>
              {
                user.language === "english" ?
              question.question_name.english: question.question_name.hindi
              }

            </div>
            </div>

            
            {/* here the image */}

{
  question.image ? renderSVG(question.image): null
}

          {/* here the option */}

          <div className=" font-Nunito  text-black
           flex flex-col gap-3  ">

            {
              
              question.option?.[user.language === "english"?"english" : "hindi"].map((item,index)=>{
                return(

                  <div key={index} className={` w-[300px]    min-h-[60px]  p-2 rounded-lg flex  gap-5 items-center cursor-pointer  transition-all duration-100 ease-in-out active:shadow-none active:translate-y-[3px]   ${isblue  === index ? "bg-background_blue  shadow-blue_shadow  border-border_blue border-[2px] border-solid "  : correctIndex  ===  index ? correct ? "bg-correct_green shadow-correct_shadow border-border_green border-[1px] border-solid ": " bg-wrong_red shadow-wrong_shadow  border-[1px] border-solid  border-border_red " :"bg-white   shadow-grey_shadow border-[2px] border-solid border-border_grey "} `} onClick={()=>HandleSelectoption(index)}>

                    <div className={` w-[30px] h-[30px]  flex justify-center items-center ${isblue  === index ?   " border-[1px]  border-solid  border-border_blue  text-text_blue" : correctIndex === index ? correct ? " border-[1px] border-solid border-border_green text-text_green " : " border-[1px] border-solid  text-text_red border-border_red" : "border-[1px] border-solid border-border_grey text-text_grey"}  rounded-md`}>{
                       user.language === "english"? String.fromCharCode(97+index) : String.fromCharCode(2325 + index)
                      }</div>
                    <div className={` font-Nunito text-[15px]  ${isblue  === index ? "text-text_blue" : correctIndex === index ? correct ? "text-text_green" :"text-text_red" : "text-black"}`}>{item} </div>
                  </div>
                )
              })
            }
          </div>
           

   
            
           
            </div>


            <div  className={`   w-full  h-[200px] flex  flex-col justify-around  md:flex md:flex-row  transition-all duration-100  ease-in-out  ${ attempt  ?  correct  ? " bg-popup_green text-text_green" :" bg-popup_red text-text_red" : "border-[1px] border-solid border-border_grey" } `}>
            
            

         <div className=" flex md:flex-col justify-around md:justify-center gap-2">
          {
            attempt ?(
              <>
               <div className="flex gap-2 justify-center items-center font-Nunito text-[20px] font-semibold ">
             {correct ? <TiTick></TiTick> : <FaBomb></FaBomb>}
              <span>{correct ? "Awesome!" :  `Correct Answer : ${String.fromCharCode(97+question.answer)}` }</span>
             </div>

            <div className=" flex justify-center items-center cursor-pointer"><MdOutlinedFlag size={20}></MdOutlinedFlag></div>
             </>
            ) : null
          }                 
         </div>

         <div className=" flex justify-around items-center  gap-5">
        {
          attempt ? !correct ?    <div className=" flex justify-center items-center border-[2px] border-solid border-border_red rounded-xl  min-w-[150px] min-h-[50px] md:min-h-[45px] font-Nunito  font-medium text-text_red text-[20px] cursor-pointer" onClick={handleExplanationOpen}>Why</div> : null : null
        }

          <div className={`  flex justify-center items-center p-2   min-w-[150px] min-h-[50px] md:min-h-[45px] rounded-xl  translate-y-0 transition-all ease-in-out duration-100 cursor-pointer font-Nunito text-[16px] font-semibold active:translate-y-[3px]  active:shadow-none ${attempt ?  correct ? "bg-button_green  shadow-check_next_green  text-white"  : " bg-button_red shadow-check_next_red text-white" : isgreen ?  "bg-button_green    shadow-check_next_green text-white" : "  bg-check_grey shadow-grey_shadow "}`} onClick={HandleCheckorNext}>{attempt ?  questionIndex === Questiondata.length-1  ? "Complete" :  "Next" : "Check"}</div>
         </div>
             

              
      
            </div>  


            </div>//  parent div
}
            </>

    )
}

export default Question;



