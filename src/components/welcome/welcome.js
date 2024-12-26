import { useState } from "react";
import { useSelector } from "react-redux";
import "./welcome.css"
import {  useNavigate } from "react-router-dom";


function Welcome(){

  const welcomeData= useSelector((state)=>state.happyexam.welcomeData);
 const [welcomeIndex, setwelcomeIndex] = useState(0);
 const navigate = useNavigate()
 const [isgreen, setIsgreen] = useState(false)
const [selectcardIndex, setSelectcardIndex] = useState(null);

 function Selectcard(index){
 setSelectcardIndex(index);
setIsgreen(true)

 }

 function handleclick(e){
    if(welcomeIndex>0) return  navigate("/subject")
    setwelcomeIndex((prev)=>prev+1);
setIsgreen(false);
setSelectcardIndex(null);

  
 }



 

    return(
        <div className=" w-full h-full relative  overflow-hidden  select-none">  

         <div  className=" w-full h-full flex justify-center items-center flex-col ">
            <div className=" relative right-[80px] md:right-[160px]  mb-10 font-Nunito text-[18px] md:text-[20px]">{welcomeData[welcomeIndex].ask}</div>
            <div className=" flex justify-center  items-center gap-6 md:gap-[100px]">
                {
                    welcomeData[welcomeIndex].element.map((item, index)=>{
                        return(
                            <div key={index} className={` w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-lg  md:rounded-xl flex justify-center items-center font-Nunito text-[20px] md:text-[25px] cursor-pointer transition-all duration-100 ease-in-out translate-y-0 active:shadow-none active:translate-y-[3px] ${selectcardIndex === index ?" bg-background_blue shadow-blue_shadow border-[2px] border-solid border-border_blue text-text_blue" : "bg-white border-[2px] border-solid border-border_grey shadow-grey_shadow " }` } onClick={()=>Selectcard(index)} id="card">{item.data}</div>
                        )
                    })
                }
            </div>
            <div className={` relative top-[100px] left-[100px] md:left-[300px] font-Nunito font-bold text-[18px]  w-[100px]  h-[50px]  md:w-[150px] md:h-[50px] rounded-2xl flex justify-center items-center cursor-pointer transition-all duration-100 ease-in-out translate-y-0 active:shadow-none active:translate-y-[5px] ${ isgreen ?  "bg-button_green shadow-green_button_shadow text-white" : " bg-check_grey text-check_text_grey border-[1px] border-solid shadow-grey_shadow" }`} onClick={handleclick}>{welcomeIndex>0 ? "Complete" : "Next"}</div>
         </div>
        </div>
    )
}

export default Welcome;

