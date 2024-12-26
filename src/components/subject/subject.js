
import { useSelector } from "react-redux";
import Quest from "./subcomponents/quest/quest";
import Streak from "./subcomponents/streak/streak";
import Subheader from "../header/header";
import { IoMdPaper } from "react-icons/io";
import { Outlet } from "react-router-dom";
 
  import {useNavigate} from 'react-router-dom'
function Subject(){

    const subject = useSelector((state)=>state.happyexam.subject);
   const navigate = useNavigate();

    
    function handleSubject(){
     navigate("/subject/chapter")    
    }
    return(
        // <div className=" w-full h-auto ">

          
         <div className=" relative top-[100px]  w-full h-full flex flex-col justify-center items-center gap-5">

<div className=" md:absolute left-[65%] bottom-[75%]" >
   <Streak></Streak>
</div>

<div className=" flex flex-col gap-5 md:relative right-[150px]">
   {
       subject?.map((item,index)=>{
           return(
               <div key={index} className=" w-[380px] md:w-[500px] rounded-xl h-[180px] md:h-[250px] bg-white border-[1px] border-solid border-border_grey shadow-grey_shadow flex  justify-center items-center flex-col gap-5  ">
                 <div className=" font-Nunito  font-semibold text-[19px] ">{item}</div>
                 <div className=" w-[150px] h-[40px] md:w-[196px] md:h-[50px] bg-black rounded-full flex items-center justify-center text-white font-Nunito cursor-pointer" onClick={handleSubject}>Get Started</div>
               </div>
           )
       })
   }
</div>

<div className=" md:absolute left-[65%]  bottom-[67%]">
   <Quest></Quest>
</div>




  </div>

          

        // </div>
    )
}
export default Subject;