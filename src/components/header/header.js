
import { MdLeaderboard } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
 import { HEPicon } from "../../svgicon/icon";
function Header(){
    return (
        <div className=" w-full h-[70px] bg-white fixed z-50  border-[1px] border-solid border-border_grey flex  justify-between items-center">

           <div className=" flex justify-center items-center gap-4 md:gap-10 pl-5 md:pl-[200px]">

            <div className=" flex justify-center items-center gap-2">
            <div className=" hidden md:block"><IoMdHome></IoMdHome></div>
            <div className=" font-Nunito text-[15px] md:text-[20px] font-semibold underline decoration-1" >Home</div>
            </div>
              
            <div className=" flex justify-center items-center gap-2">
            <div className=" hidden md:block"><MdLeaderboard></MdLeaderboard></div>
            <div className=" font-Nunito text-[15px] md:text-[20px] font-semibold">Rank</div>
            </div>
              
           </div>
      

      <div  className=" flex justify-center items-center gap-4 md:gap-10 md:pr-[200px]">
<div className=" flex justify-center items-center   gap-2 border-[2px] border-solid border-border_grey  w-[80px] h-[40px] rounded-full ">
    <div className=" font-Nunito text-[20px]">0</div>
    <div>{HEPicon}</div>
</div> 
<div  className=" flex flex-col justify-center items-center gap-1 pr-5">
    <div className=" w-[30px] h-[30px] rounded-full border-[2px] border-solid border-border_grey flex justify-center items-center"><FaUser></FaUser></div>
    <div className=" font-Nunito text-[12px] tracking-wide">thekms</div>
</div>

      </div>


        </div>
    )
}

export default Header;