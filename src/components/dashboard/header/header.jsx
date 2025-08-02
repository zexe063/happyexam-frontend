import {MdHeadphones, MdLeaderboard } from "react-icons/md";
import {MdHome, FaGraduationCap, ExamKey, Streak } from "../../../svgicon/icon";
import { LuMenu } from "react-icons/lu";
 import { HEPicon } from "../../../svgicon/icon";
import Setting from "../Setting/setting";
import { useState } from "react";
 import { MdClose } from "react-icons/md";
import { FiHome } from "react-icons/fi"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";


function Header(){

  const navigate = useNavigate()
     const user = useSelector((state)=>state.auth.user)

    
    return (
        <section className=" sticky top-0 left-0   w-full h-[70px] bg-white   z-50   border-[1px] border-solid border-border_grey flex items-center justify-between">

        

            <div className=" flex justify-center items-center gap-6 md:px-[200px] px-6">

            <div className=" flex gap-[5px] justify-center items-center cursor-pointer"><MdHome ></MdHome><span className=" font-medium  font-Nunito text-[15px] hidden md:block ">Home</span>
            </div>


           <div className=" flex gap-[5px] justify-center items-center cursor-pointer"><FaGraduationCap ></FaGraduationCap><span className=" font-medium  font-Nunito text-[15px] hidden md:block ">course</span>
              </div>

             
    
        </div>
           
              
           
      

{/* last part */}
      <div  className=" flex justify-center items-center gap-4 md:gap-6  font-JetBarins md:px-[200px] px-6">

 <div className="  text-[18px] flex justify-center items-center gap-1 font-semibold   md:border-solid md:border-[2px] md:border-border_grey md:px-4 md:py-2 md:rounded-full">
  <p >{user.Examkey}</p>
  <span>{ExamKey}</span>
  </div>

     <div className=" text-[18px] flex justify-center items-center gap-1 font-semibold  md:border-solid md:border-[2px] md:border-border_grey md:px-4 md:py-2 md:rounded-full ">
      <p>{user.OnStreak}</p>
      <span>{Streak}</span>
    </div>

 <div className=" w-[25px] h-[25px] cursor-pointer" onClick={()=>navigate("/profile")}>
   <img src="https://api.dicebear.com/9.x/dylan/svg?seed=Maria" alt="avatar" className=" rounded-full"></img>
              </div>

      </div>
      {/* last part end */}


        </section>
    )
}

export default Header;