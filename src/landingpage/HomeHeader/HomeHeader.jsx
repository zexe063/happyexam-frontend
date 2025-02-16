 import { HappyexamLogo } from "../../svgicon/icon"

 import { useNavigate } from "react-router-dom";
 import { useSelector } from "react-redux";
function HomeHeader(){

  const user =  useSelector((state)=>state.auth.user);
  const navigate =  useNavigate();
  function getStartHandle(){
      console.log("get start")
 if(!user.id){
   navigate("/welcome")
 } else{
  navigate(`/${user.class}`)
 }
  }

    return(
        <nav className=" md:p-5 w-full fixed z-50 h-20  border-[1px] border-solid border-x-border_grey shadow-sm flex items-center justify-between  bg-white
        ">

       <div className= "  flex justify-center items-center gap-2 font-bold text-xl md:text-2xl font-Nunito">{HappyexamLogo}<span>HappyExam</span></div>

  <div className=" flex justify-center items-center gap-2 pr-2">
    {/* <div className=" w-[70px] h-[35px] md:w-[80px] md:h-[40px] rounded-full flex justify-center items-center border-[2px] border-solid border-x-border_grey font-Nunito text-black">Log in</div> */}
  <div className="   w-[80px] h-[35px] md:w-[100px] md:h-[45px] rounded-full bg-button_green text-white flex justify-center items-center font-semibold font-Nunito  cursor-pointer"  onClick={getStartHandle}>Get Start</div>
  </div>

        </nav>
  
  
    )
}

export default HomeHeader