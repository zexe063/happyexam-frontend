


 import { useNavigate } from "react-router-dom";
 import { useSelector } from "react-redux";
 
function HomeHeader(){
  
  const navigate =  useNavigate();
 


    return(
        <section className=" w-full h-[80px] sticky top-0 left-0 px-1 md:px-4  bg-white   z-50   border-[1px] border-solid border-gray-200 flex items-center justify-between">

       <div className= "  flex justify-center items-center gap-2 font-bold text-xl md:text-2xl font-Nunito"><img className=" w-[50px] h-[50px] object-contain" src="/logo.png" /><span>HappyExam</span></div>

  <div className=" flex justify-center items-center gap-2 pr-2">

  <button className="   w-[80px] h-[35px] md:w-[100px] md:h-[45px] rounded-full  bg-green-500  text-white flex justify-center items-center font-medium text-sm font-Nunito  cursor-pointer" onClick={()=>navigate("/welcome")} >Get Start</button>

    <button className="   w-[80px] h-[35px] md:w-[100px] md:h-[45px] border-[2px] border-solid  border-gray-200  rounded-full flex justify-center items-center font-medium text-sm font-Nunito  cursor-pointer"  onClick={()=>navigate("/login")}>Login</button>
 
  </div>

        </section>
  
  
    )
}

export default HomeHeader