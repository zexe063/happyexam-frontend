import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import {persistor} from "@/main"
import { avatarCollection } from "@/config/constant"
import { userProfile } from "@/happyexamReducer/auth";
import {toastError} from "@/config/toast"




export default function Avatar(){
    const user = useSelector((state)=>state.auth.user);
    const dispatch = useDispatch()
    const naviagte = useNavigate()
    const [selectedAvatarIndex , setSelectedAvatarIndex] = useState(user?.avatar?.id);
     const [isLoading, setIsLoading] = useState(false);


     function AvatarSave(){
      setIsLoading(true)

        const avatarId = avatarCollection[selectedAvatarIndex-1];

        dispatch(userProfile({payload:{avatar:avatarId}})).then((action)=>{

          if(action.payload.status ===200){
            naviagte("/profile")
            setIsLoading(false);
          }
           else if(action.payload?.data.code === "TOKEN_FAILED"){
            setIsLoading(false)
            toastError(action.payload?.data?.message);
            setTimeout(async() => {
              const Logout = await persistor.purge();
                if(Logout) return window.location.href ="/"
            }, 1000);

           }
          else{
            setIsLoading(false)
            toastError(action.payload?.data?.message);
            
          }
        })
     }
     

    return (
         <section className=" w-full h-[calc(100vh-70px)] flex justify-center items-center overflow-x-hidden py-2">
       <div className="w-[412px] md:w-[800px] h-full  rounded-xl border-[2px] border-solid border-gray-200 flex justify-between flex-col md:flex-row gap-3">

        <div className=" relative w-full h-[30%] md:w-[50%] md:h-full border-r-[2px] border-solid border-gray-200 flex justify-center items-center rounded-xl"  style={{backgroundColor:`${avatarCollection[selectedAvatarIndex-1]?.bgcolor}`}}>
            <img src={`/avatar/${avatarCollection[selectedAvatarIndex-1]?.id}.svg`} className=" w-full h-full md:w-[500px] md:h-[500px]"></img>

            <button className="w-[80px] h-[40px] rounded-xl shadow-btn-grey border-[2px] border-solid border-gray-200 bg-white self-start absolute right-2 md:right-4 mt-4 flex justify-center items-center font-Nunito text-blue-500 font-semibold" onClick={()=>AvatarSave()}>

         {

isLoading ?<div className=" w-5 h-5 animate-spin rounded-full border-[2px] border-solid border-black border-t-white"></div>  : "Save"

         }

            </button>
        </div>

          <div className=" w-full h-[70%] md:w-[50%] md:h-full overflow-auto grid grid-cols-3 place-items-center ">
            {
            avatarCollection.map((item,index)=>{
               return( 

                 <div key={item.id} className={`w-[112px] h-[112px] rounded-xl ${selectedAvatarIndex===index+1 && "outline outline-2 outline-offset-2 outline-blue-700"} cursor-pointer `} style={{backgroundColor:`${item.bgcolor}` }} onClick={()=>setSelectedAvatarIndex(index+1)}>
            <img src={`/avatar/${item.id}.svg`} className=" w-full h-full "></img>
        </div>
               )
            })
            }
          </div>

        </div>
        </section>
    )
}