import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { PremiumHappyexamLogo, UnlimitedheartsIcon, Notes, Videoads, Newcontent} from "../../svgicon/icon"
import { userProgressEvent } from "../../happyexamReducer/auth";



function Subscription(){
const user = useSelector((state)=>state.auth.user)
const dispatch = useDispatch()
const navigate = useNavigate()
const [lock, setLock] = useState(true);
const[ isLoading,setIsLoading]= useState(false)
    

    function HandleSubscription(){
        if(!lock) return navigate(`/home/${user.userPreference.class_name}`);
setLock(false);
    setIsLoading(true)

         dispatch(userProgressEvent({action:"SUBSCRIPTION", userId:user._id})).then((res)=>{
            console.log(res)
            if(res?.payload?._id) {
                setIsLoading(false);
                setLock(false);
            }
            else {
                setIsLoading(false);
                setLock(true);
            }
         })
        
    }
    const list = [
        {id:1, value:"Unlimited Hearts", icon:UnlimitedheartsIcon},
        {id:2, value:"All chapters Notes", icon:Notes},
        {id:3, value:"No Video Ads", icon:Videoads},
        {id:4, value:"New chapter added continuosly", icon:Newcontent}
    ]
    return(
        <div className=" relative w-full h-full flex flex-col items-center py-5 justify-between">
           
           {
            lock ? 

             <div className=" flex flex-col gap-10">

       <div className=" flex justify-center items-center flex-col">  
         <div >{PremiumHappyexamLogo}</div>
          <p className="w-[350px] md:w-full font-Nunito md:text-[48px] text-[32px] font tracking-wider ">Unlock the full marks in the Exam</p>
          </div>

        <div className=" flex flex-col gap-5">
            {
                list?.map((item)=>{
                    return (
                        <div className=" flex items-center gap-2">
                        <div>{item.icon}</div>
                        <p className=" font-Nunito text-[20px]">{item.value}</p>
                        </div>
                    )
                })
            }
       </div>
</div>

:  <div className=" flex flex-col justify-center items-center mt-10">
                <div>{PremiumHappyexamLogo}</div>
                <p className="w-[400px] md:w-full font-Nunito font-semibold md:text-[36px] text-[28px] flex justify-center items-center font tracking-wider ">Congratulations {user.first_name}</p>
                <p className="w-[400px] md:w-full font-Nunito md:text-[18px] text-[16px]  flex justify-center items-center font tracking-wider">you unlock the premium</p>
            </div>
           }

        <button className="w-[350px] h-[48px] font-Nunito text-[16px] font-semibold tracking-wider bg-premiumUnlock_gradient shadow-premiumUnlock_shadow rounded-full  flex justify-center items-center text-white " onClick={HandleSubscription}>
        {
        lock ? 'TRY FOR  ₹0.00'

        : isLoading ? 
         <div className=" w-5 h-5 animate-spin rounded-full border-[2px] border-solid border-white border-t-[#E350E3]"></div>

           : "Continue"
           }
           </button>
        </div>
    )
}

export default Subscription



