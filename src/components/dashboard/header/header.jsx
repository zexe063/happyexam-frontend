import { MdHome, MdLeaderboard } from "react-icons/md";
import { LuMenu } from "react-icons/lu";
 import { HEPicon } from "../../../svgicon/icon";
import Setting from "../Setting/setting";
import { useState } from "react";
 import { MdClose } from "react-icons/md";
import { useSelector } from "react-redux";
import { use } from "react";
import Motion from "../question/Motion";

function Header(){
     const user = useSelector((state)=>state.auth.user)
    const [isVisible, setIsVisible] = useState(false)
    
    return (
        <div className="  w-full h-[70px] bg-white  relative z-50  border-[1px] border-solid border-border_grey flex  justify-between items-center">

           <div className=" flex justify-center items-center gap-4 md:gap-10 pl-5 md:pl-[200px]">

            <div className=" flex justify-center items-center gap-2">
            <div className=" hidden md:block"><MdHome></MdHome></div>
            <div className=" font-Nunito text-[15px] md:text-[20px] font-semibold underline decoration-1" >Home</div>
            </div>
              
            <div className=" flex justify-center items-center gap-2">
            <div className=" hidden md:block"><MdLeaderboard></MdLeaderboard></div>
            <div className=" font-Nunito text-[15px] md:text-[20px] font-semibold">Rank</div>
            </div>
              
           </div>
      

      <div  className=" flex justify-center items-center gap-4 md:gap-10 md:pr-[200px]">
<div className=" flex justify-center items-center   gap-2 border-[2px] border-solid border-border_grey  w-[80px] h-[40px] rounded-full ">
    <div className=" font-Nunito text-[18px]"><Motion value={user.HappyPoints}></Motion></div>
    <div>{HEPicon}</div>
</div> 
<div  className=" relative flex flex-col justify-center items-center gap-1 pr-5 cursor-pointer">
    <div onClick={()=>setIsVisible((prev)=>!prev)}>{isVisible ? <MdClose size={25} /> : <LuMenu size={25}></LuMenu>}</div>
  {isVisible ? <Setting></Setting> :  null}
</div>

      </div>


        </div>
    )
}

export default Header;