import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

function LogoSection(){

    const user =  useSelector((state)=>state.auth.user);
    const navigate =  useNavigate();
    function getStartHandle(){
       
   if(!user.id){
     navigate("/welcome")
   } else{
    navigate(`/home/${user.class_name}`)
   }
    }
    return (
        <div className=" w-full bg-header bg-cover bg-center md:bg-left  h-[700px]  flex flex-col  gap-[45px] justify-center items-center font-Nunito">
       
       <h1  className="  text-[50px] md:text-[80px] font-bold font-Nunito text-black leading-[24px]">
        <span className=" flex justify-center items-center text-lg text-red-A500">Indroduced Happyexam</span>
        <br/>Happy at Exam
        </h1>

       <button className=" px-[60px] py-[12px] bg-green-500 shadow-btn-green flex justify-center items-center text-white font-Nunito font-medium rounded-full  border-none outline-none" onClick={getStartHandle}>Start for free</button>

            
    
        </div>
    )   
}

export default LogoSection