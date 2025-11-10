import { useNavigate } from "react-router-dom";
import { PremiumHeartIcon } from "../../../../../svgicon/icon";


function Premium(){

    const navigate = useNavigate()
    return(
 <section className=" w-[350px]  h-[150px]  bg-premium_gradient border-[2px] border-solid border-border_grey flex flex-col justify-around items-center rounded-2xl">


<div className=" flex justify-center items-center gap-2 ml-3">
<PremiumHeartIcon  width={60} height={60}></PremiumHeartIcon>
 <p className="  font-NSupercharge your learning with Premiumunito text-[16px] font-medium">Supercharge your learning with Premium</p>
</div>


<button className=" w-[90%] h-[45px] bg-premium_button shadow-premium_shadow text-white font-semibold rounded-full text-[14px]" onClick={()=>navigate("/subscription")}>Unlock Premium</button>
 </section>
    )
}

export default Premium;
