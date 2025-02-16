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
        <div className="w-full h-[600px] md:h-[600px] flex flex-col gap-5 justify-center items-center font-Nunito font-medium">
             <div><p className="  font-Nunito text-[15px] font-medium w-[250px]  h-[50px]  bg-hero_green border-[2px] border-solid  border-hero_green_border text-here_green_text rounded-full flex justify-center items-center ">Indroducing happyexam</p></div> 

             <header className=" w-full flex justify-center items-center">
         {logoSectionSVG}
             </header>
            <div className=" w-full h-auto flex justify-center items-center flex-col  gap-5  relative top-[100px] md:top-0">
             <div className=" w-[80%] ml-10 justify-center flex items-center font-Nunito text-[20px]">We Offer 20000+ MCQ question for CBSE , BSEB  and more Boards </div>
             <Link className=" w-[250px] h-[60px]  flex justify-center items-center text-white font-semibold sm:text-[15px] md:text-[20px] rounded-full bg-button_green shadow-green_button_shadow" onClick={getStartHandle} >Get Started</Link>
            
             </div>
        </div>
    )   
}

export default LogoSection