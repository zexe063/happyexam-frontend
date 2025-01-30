 import { HappyexamLogo } from "../../svgicon/icon"
function HomeHeader(){
    return(
        <div className=" pl-5 w-full fixed z-50 h-[80px]  border-[1px] border-solid border-x-border_grey shadow-sm flex items-center justify-between  bg-white
        ">

       <div className= " flex justify-center items-center gap-2 font-bold text-[20px] md:text-[32px] font-Nunito">{HappyexamLogo}HappyExam</div>

  <div className=" flex justify-center items-center gap-2 p-5">
    <div className=" w-[80px] h-[40px] md:w-[100px] md:h-[50px] rounded-full flex justify-center items-center border-[2px] border-solid border-x-border_grey font-Nunito text-black">Log in</div>
  <div className=" w-[100px] h-[40px] md:w-[120px] md:h-[50px] rounded-full bg-button_green text-white flex justify-center items-center font-semibold font-Nunito " >Get Start</div>
  </div>

        </div>
    )
}

export default HomeHeader