import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"

import { userProgressEvent } from "../../../happyexamReducer/auth";

import { IoClose } from "react-icons/io5";
import { PremiumHeartIcon } from "../../../svgicon/icon";



function SubscriptionModel(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    const user = useSelector((state)=>state.auth.user);
    const [isLoading, setIsLoading]  = useState(false);


    function HandleRefill(){
        const  action = {action:"HEART-REFILL", userId:user._id};
        setIsLoading(true)
          dispatch(userProgressEvent(action)).then((res)=>{
            if(res?.payload?._id) {
                setIsLoading(false) 
                return;
            }
            else {
                setIsLoading(false)
            }
            
          })
    }
    return(
        <div className=" fixed flex justify-center items-center w-full h-full bg-black bg-opacity-20 inset-0 z-50 ">
 
 <div  className=" relative shadow-2xl w-[350px] h-[400px] md:w-[400px] md:h-[450px] bg-white rounded-2xl font-Nunito flex flex-col justify-center items-center gap-5">

<div className="  absolute top-5 right-5 cursor-pointer" onClick={()=>navigate(`/course/${params.class_name}/${params.subject_name}/${params.chapter_name}`)}><IoClose size={25}></IoClose></div>

   <p className=" font-semibold text-[24px]">You have 0 Hearts</p>
<PremiumHeartIcon width={150} height={150}></PremiumHeartIcon>
<button className=" w-[90%] h-[45px] bg-premium_button shadow-premium_shadow rounded-full" onClick={()=>navigate('/subscription')}>Unlock premium</button>
<button className=" font-medium text-[16px] tracking-wider text-blue-500" onClick={HandleRefill}>

    {
            isLoading  ? <div className=" w-5 h-5 animate-spin rounded-full border-[2px] border-solid border-black border-t-white"></div> :
            "Refill for free"
          }
        
</button>
 </div>


        </div>


    )
}


export default SubscriptionModel;