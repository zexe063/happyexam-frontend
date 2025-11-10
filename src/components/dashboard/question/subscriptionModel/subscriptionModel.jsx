import { useDispatch } from "react-redux";
import { PremiumHeartIcon } from "../../../../svgicon/icon";
import { HeartsRefill } from "../../../../happyexamReducer/auth";
import { IoClose } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";

function SubscriptionModel(){

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    return(
        <div className=" fixed flex justify-center items-center w-full h-full bg-black bg-opacity-20 inset-0 z-50 ">
 
 <div  className=" relative shadow-2xl w-[350px] h-[400px] md:w-[400px] md:h-[450px] bg-white rounded-2xl font-Nunito flex flex-col justify-center items-center gap-5">

<div className="  absolute top-5 right-5 cursor-pointer" onClick={()=>navigate(`/course/${params.class_name}/${params.subject_name}/${params.chapter_name}`)}><IoClose size={25}></IoClose></div>

   <p className=" font-semibold text-[24px]">You have 0 Hearts</p>
<PremiumHeartIcon width={150} height={150}></PremiumHeartIcon>
<button className=" w-[90%] h-[45px] bg-premium_button shadow-premium_shadow rounded-full" onClick={()=>navigate('/subscription')}>Unlock premium</button>
<button className=" font-medium text-[16px] tracking-wider text-blue-500" onClick={()=>dispatch(HeartsRefill())}>Refill for Free</button>
 </div>


        </div>


    )
}


export default SubscriptionModel;