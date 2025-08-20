
import { IoClose, IoTerminalSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { ExplanationOpenOrClose } from "../../../../happyexamReducer/happyexam";
import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import { combineSlices } from "@reduxjs/toolkit";
import React, { useState } from "react";
import  continueAudio from "../../../../audio/continue.mp3";


function Explanation({data}){

  const user = useSelector((state)=>state.auth.user);
 const [solutionIndex, setSolutionIndex] = React.useState(0);
const [solution, setsolution] = useState(!data.explanation ?  [data.solution[solutionIndex]] : null);
const [continueSound] = useState(new Audio(continueAudio))
const explanation =  useSelector((state)=>state.happyexam.explanation);




  const dispatch = useDispatch();
    function handleExplanationClose(){
       dispatch(ExplanationOpenOrClose(false));
   
    }
    function  solutionNext(){
      if(solutionIndex === data.solution.length-1)  return;
      continueSound.play()
      setSolutionIndex((prev)=>prev+1);
      setsolution((prev)=>[...prev,data.solution[solutionIndex+1]])
    }

    return(

        

       <div className={`fixed top-0 w-full md:w-[720px] h-[100vh] bg-black bg-opacity-50 rounded-lg transition-all  duration-75 z-50 ${explanation ? "right-0" : "-right-full"}`}>

  <div className=" shadow-2xl bg-white  h-[100%] w-[100%] rounded-lg font-Nunito overflow-auto" >

    <div className=" flex flex-col gap-5 p-5">
          
            <div className=" flex justify-between">
            <p className=" text-[18px] font-semibold">{data.explanation ? "Explanation" : "Solution"}</p>
            <span className=" cursor-pointer"  onClick={handleExplanationClose}><IoClose  size={25} color="#407719"></IoClose></span>
          </div>

       {
      data.explanation  ?
        <div className="  p-2  text-[18px] font-medium trackWing-wide text-start ">
          <Markdown rehypePlugins={rehypeKatex} remarkPlugins={remarkMath}>
           {user.language === 'english' ? data.explanation.english : data.explanation.hindi}</Markdown>
          </div> 


          :  


           <div className=" flex flex-col  gap-10">
            
            {
              solution?.map((item)=>{
               
              
               return <section className="  flex flex-col  font-Nunito gap-3">

                {/*here the terms  */}
       <Markdown rehypePlugins={rehypeKatex} remarkPlugins={remarkMath}>{item.terms.english}</Markdown> 

       {item.value && 

       <div className=" w-full h-auto flex flex-col gap-5 justify-center items-center"> 
       {/* here the image of explaintion  */}
       {item.value.image && <img src={item.value.image} className=" w-[200px] h-[200px]"></img>}
{/* her ethe calcultion  */}
       <Markdown rehypePlugins={rehypeKatex} remarkPlugins={remarkMath}>
        {user.language === "english" ?
         item.value.calculation.english : 
         item.value.calculation.hindi}
         </Markdown>
         </div>

         }
       
  </section>
              })
            }
     

      {data.solution.length-1 === solutionIndex ? null :    <button className=" self-start bg-[#000c] text-white px-8 py-[10px] rounded-full font-Nunito shadow-black border-none"  onClick={solutionNext}>continue</button> }
       
         </div>

       }
        
       
     

    </div>

  </div>
 
</div> // main parent div

    )
}
export default Explanation;