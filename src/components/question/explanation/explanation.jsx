import  { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import 'katex/dist/katex.min.css'
import "./explanation.css"

import { IoClose} from "react-icons/io5";
import { ExplanationOpenOrClose } from "@/happyexamReducer/happyexam";
import continueAudio from "@/audio/continue.mp3";
import { motion } from "motion/react";


function Explanation({data}){
  
const user = useSelector((state)=>state.auth.user);
const [solutionIndex, setSolutionIndex] = useState(0);
const [solution, setsolution] = useState(!data.explanation ?  [data.solution[solutionIndex]] : null);
const [continueSound] = useState(new Audio(continueAudio))
const isMobile = window.innerWidth < 768


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

        
 <div className={`fixed w-full h-[100vh]  bg-black/50 inset-0 bg-opacity-50 z-50 md:bg-transparent md:bg-opacity-0`}>

       <motion.div 
       initial={isMobile ? { y: "100%" } : { x: "100%" }}
        animate={isMobile ? { y: 0 } : { x: 0 }}
        exit={isMobile ? { y: "100%" } : { x: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 280 }}
      className={` w-full fixed bg-white shadow-2xl rounded-2xl overflow-auto  bottom-0 md:right-0  h-[90vh] md:w-[720px]  md:h-[100vh]`}>



    <div className=" flex flex-col gap-5 p-5">
          
            <div className=" flex justify-between">
            <p className=" text-[18px] font-semibold">{data.explanation ? "Explanation" : "Solution"}</p>
            <span className=" cursor-pointer"  onClick={handleExplanationClose}><IoClose  size={25} color="#407719"></IoClose></span>
          </div>

       {
      data.explanation  ?
        <div className="  p-2  text-[18px] font-normal trackWing-wide text-start font-Nunito flex flex-col
         gap-1 ">
          <Markdown rehypePlugins={[rehypeKatex]} remarkPlugins={[remarkMath]}>
           {user.userPreference.language === 'english' ? (data.explanation.english).replace(/<br>/g, '\n\n') : (data.explanation.hindi).replace(/<br>/g, '\n\n') }</Markdown>
          </div> 

          :  

           <div className=" flex flex-col  gap-10">
            
            {
              solution?.map((item)=>{
               
              
               return <section  key={item._id} className="  flex flex-col  font-Nunito gap-3">

                {/*here the terms  */}
       <h3 className=" font-semibold"> <Markdown rehypePlugins={[rehypeKatex]} remarkPlugins={[remarkMath]}>{user.userPreference.language === "english" ? item.terms?.english : item.terms?.hindi}</Markdown> </h3>

       {item.value && 

       <div  className=" w-full h-auto flex flex-col gap-8 justify-center items-center"> 
       {/* here the image of explaintion  */}
       {item.value.image && <img src={item.value.image} className=" w-[200px] h-[200px]"></img>}
{/* her ethe calcultion  */}

       <Markdown rehypePlugins={[rehypeKatex]} remarkPlugins={[remarkMath]}>
        {(user.userPreference.language === "english" ? 
    item.value.calculation.english : 
    item.value.calculation.hindi
  ).replace(/<br>/g, '\n\n')}
         </Markdown>

         
         </div>

         }
       
  </section>
              })
            }

      {data.solution.length-1 === solutionIndex ? null :    <button className=" self-start bg-[#000c] text-white px-8 py-[10px] rounded-full font-Nunito shadow-btn-black border-none"  onClick={solutionNext}>continue</button> }
       
         </div>

       }

    </div>

  </motion.div>
 

</div>
  )
}
export default Explanation;





