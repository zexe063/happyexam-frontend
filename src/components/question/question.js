

import { useSelector,useDispatch } from "react-redux";
import Progress from "../progress/progress";
import { useState } from "react";
import { Height } from "../../happyexamReducer/happyexam";
import { TbJumpRope, TbNavigationUp, TbPlayerTrackNextFilled } from "react-icons/tb";
import { use } from "react";
import { FaHandHolding, FaLeaf } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import correctAudio from '../../audio/correct.mp3';
import wrongAudio  from  '../../audio/wrong.mp3'

import { TiTick } from "react-icons/ti";
import { IoClose } from "react-icons/io5";





function Question(){

    const  Questiondata = useSelector((state)=>state.happyexam.question);
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
   

   
   
   function renderSVG(){
    if(!question.image)
      dispatch(Height("200px"))
    
    else
      dispatch(Height("70px"))

    return(
      <div dangerouslySetInnerHTML={{__html: question.image}}/>)
   }


    
    return(
        <div className=" relative select-none flex  flex-col items-center justify-between gap-2  w-full h-full overflow-hidden">
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
  question.image ? renderSVG() : null
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


            <div className={`  relative w-full h-[200px] flex flex-col md:flex md:flex-row  transition-all duration-100  ease-in-out  ${ correct ===   null ? "border-[1px] border-solid border-border_grey" : correct ? " bg-popup_green" :" bg-popup_red" } `}>
            
            {
              correct === null ? null : correct ?
              <div className=" flex gap-5 transition-all duration-100  ease-in-out justify-center items-center  absolute top-3 md:top-[20%] left-[10%]">
                <div className=" bg-white w-[30px] h-[30px]   rounded-full flex justify-center items-center"><TiTick size={30} color="#d7ffb8"></TiTick></div>
              <div className=" font-Nunito text-[25px] font-semibold text-text_green tracking-wide">Awesome !</div>
              </div>
              :
              <div className=" flex gap-5  justify-center items-center  absolute top-5 md:top-[20%] left-[10%]">
              <div className=" bg-white w-[30px] h-[30px]  rounded-full flex justify-center items-center">
                <IoClose size={25} color="#d32f2f"></IoClose>
              </div>
            <div className=" font-Nunito text-[25px] text-text_red font-semibold tracking-wide">Correct Solution  : {String.fromCharCode(97+question.answer)}</div>
            </div>
              
            }
        
            <div className={` select-none tracking-wide  absolute  top-[30%] md:top-[20%] left-[10%] md:left-[80%] w-[calc(100%-20%)] md:w-[200px] h-[50px] flex items-center justify-center gap-2 rounded-xl  font-Nunito text-[18px] font-semibold  transition-all duration-100 ease-in-out translate-y-0 active:shadow-none active:translate-y-[5px]   cursor-pointer ${attempt ? correct ?   "bg-button_green shadow-green_button_shadow text-white  border-border_green" : " bg-button_red shadow-wrong_shadow  border-[1px] border-solid  border-border_red text-white" : isgreen ?   " bg-button_green shadow-green_button_shadow text-white  border-border_green" : "bg-check_grey shadow-grey_shadow round   text-check_text_grey"}`}  onClick={HandleCheckorNext}>
              {attempt ? questionIndex ===  Questiondata.length -1 ? "Complete" :"Next" :"Check"}
              </div>

             

              
      
            </div> 

            </div>
    )
}

export default Question;



