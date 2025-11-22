
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {MdHome, FaGraduationCap, ExamKey, Streak, Heart, UnlimitedHeart } from "../../../svgicon/icon";







function Header(){

  const user = useSelector((state)=>state.auth.user);
  const navigate = useNavigate();
  const params = useParams();

    
    return (
        <section className=" sticky top-0 left-0   w-full h-[70px] bg-white   z-50   border-[1px] border-solid border-border_grey flex items-center justify-between">

            <div className=" flex justify-center items-center gap-6 md:px-[200px] px-6">

            <div className=" flex gap-[5px] justify-center items-center cursor-pointer" onClick={()=>navigate(`/home/${params.class_name}`)}><MdHome ></MdHome><span className=" font-medium  font-Nunito text-[15px] hidden md:block ">Home</span>
            </div>

           <div className=" flex gap-[5px] justify-center items-center cursor-pointer" onClick={()=>navigate(`/course/${params.class_name}`)}><FaGraduationCap ></FaGraduationCap><span className=" font-medium  font-Nunito text-[15px] hidden md:block ">course</span>
            </div>
 
        </div>


{/* last part */}
      <div  className=" flex justify-center items-center gap-4 md:gap-6  font-JetBarins md:px-[200px] px-6">

 <div className="  text-[18px] flex justify-center items-center gap-1 font-semibold   md:border-solid md:border-[2px] md:border-border_grey md:px-4 md:py-1 md:rounded-full">
  { 
   user.isPremium ?  <span>{UnlimitedHeart}</span> 
   :  
   <>
  <span>{user?.hearts}</span>
  <span>{Heart}</span>  
  </> 
   }
  </div>

  

 <div className=" w-[35px] h-[35px] rounded-full cursor-pointer" onClick={()=>navigate("/profile")} style={{backgroundColor:`${user?.avatar?.bgcolor}`}}>
   <img src={`../Avatar/${user?.avatar?.id}.svg`}  alt="avatar" className=" rounded-full"></img>
     </div>

      </div>
      {/* last part end */}


        </section>
    )
}

export default Header;