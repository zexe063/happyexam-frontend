import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userProgressEvent } from "@/happyexamReducer/auth";



function Subscription(){
const user = useSelector((state)=>state.auth.user)
const dispatch = useDispatch()
const navigate = useNavigate()
const [lock, setLock] = useState(true);
const[ isLoading,setIsLoading]= useState(false)

    
  const list = [
        {id:1, value:"Unlimited Hearts", icon:"/icons/unlimitedHearts.svg"},
        {id:2, value:"All chapters Notes", icon:"/icons/notes.svg"},
        {id:3, value:"No Video Ads", icon:"/icons/videoAds.svg"},
        {id:4, value:"New chapter added continuosly", icon:"/icons/newContent.svg"}
    ]

    function HandleSubscription(){

    if(!lock) return navigate(`/home/${user.userPreference.class_name}`);
      
      setIsLoading(true)

         dispatch(userProgressEvent({action:"SUBSCRIPTION", userId:user._id})).then((action)=>{
            if(action.payload?.status=== 200) {
                setIsLoading(false);
                setLock(false);
            }
            else {
                setIsLoading(false);
                setLock(true);
            }
         })
        
    }

    return(
        <div className=" relative w-full h-[calc(100vh-70px)] flex flex-col items-center py-5 justify-between">
           
           {
            lock ? 

             <div className=" flex flex-col gap-10">

       <div className=" flex justify-center items-center flex-col">  
         <div ><img src="/icons/PremiumhappyexamLogo.svg" width={100} height={100}/></div>
          <p className="w-[350px] md:w-full font-Nunito md:text-[48px] text-[32px] font tracking-wider ">Unlock the full marks in the Exam</p>
          </div>

        <div className=" flex flex-col gap-5">
            {
                list?.map((item)=>{
                    return (
                        <div className=" flex items-center gap-2">
                        <div><img src={item.icon} width={40}height={40} /></div>
                        <p className=" font-Nunito text-[20px]">{item.value}</p>
                        </div>
                    )
                })
            }
       </div>
</div>

:  <div className=" flex flex-col justify-center items-center mt-10">
                <div><img src="/icons/PremiumhappyexamLogo.svg" width={100} height={100}/></div>
                <p className="w-[400px] md:w-full font-Nunito font-semibold md:text-[36px] text-[28px] flex justify-center items-center font tracking-wider ">Congratulations {user.first_name}</p>
                <p className="w-[400px] md:w-full font-Nunito md:text-[18px] text-[16px]  flex justify-center items-center font tracking-wider">you unlock the premium</p>
            </div>
           }

        <button className="w-[350px] h-[48px] font-Nunito text-[16px] font-semibold tracking-wider bg-gradient-premium-unlock shadow-btn-premium-unlock rounded-full  flex justify-center items-center text-white " onClick={HandleSubscription}>
        {
        isLoading ? lock ? 
         <div className=" w-5 h-5 animate-spin rounded-full border-[2px] border-solid border-white border-t-[#E350E3]"></div>

           : "Continue" : 'TRY FOR  ₹0.00'

           }
           </button>
        </div>
    )
}

export default Subscription



