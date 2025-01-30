 import { HappyexamLogo } from "../../svgicon/icon"
function HomeHeader(){
    return(
        <nav className="    w-full fixed z-50 h-20  border-[1px] border-solid border-x-border_grey shadow-sm flex items-center justify-between  bg-white
        ">

       <div className= " p-3 flex justify-center items-center gap-2 font-bold text-xl md:text-2xl font-Nunito">{HappyexamLogo}<span>HappyExam</span></div>

  <div className=" flex justify-center items-center gap-2 p-5">
    <div className=" px-3 py-2 md:px-8 md:py-3 rounded-full flex justify-center items-center border-[2px] border-solid border-x-border_grey font-Nunito text-black">Log in</div>
  <div className=" px-3 py-2 md:px-8 md:py-3 rounded-full bg-button_green text-white flex justify-center items-center font-semibold font-Nunito " >Get Start</div>
  </div>

        </nav>
    )
}

export default HomeHeader