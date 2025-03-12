import { useSelector } from "react-redux"
import { logoSectionSVG } from "./heroSvg"
import { Link, useNavigate } from "react-router-dom"

function LogoSection(){

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
    return (
        <div className="  relative w-screen bg-white bg-opacity-50 h-[600px] md:h-[600px] flex flex-col md:flex-row  gap-[150px]  md:gap-5 font-Nunito">
            <div className=" text-center md:w-[50%] h-full text-[4rem] md:text-[7rem] font-everett  leading-none">unveiled<br />HappyExam</div>
            <div className=" md:w-[50%] h-full bg-clip bg-contain bg-repeat flex justify-center items-center">{logoSectionSVG}</div>

            
            
    
        </div>
    )   
}

export default LogoSection