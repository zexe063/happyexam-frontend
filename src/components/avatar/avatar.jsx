import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { avatarCollection } from "../../config/constant"
import { UserAvatarSave } from "../../happyexamReducer/auth";




export default function Avatar(){
    const user = useSelector((state)=>state.auth.user);
    const dispatch = useDispatch()
    const naviagte = useNavigate()
    const [selectedAvatarIndex , setSelectedAvatarIndex] = useState(user?.avatar?.id);
     
     function AvatarSave(){
         naviagte("/profile")
        dispatch(UserAvatarSave(avatarCollection[selectedAvatarIndex-1]))
     }
     

    return (
         <section className=" w-full h-[calc(100vh-70px)] flex justify-center items-center overflow-x-hidden py-2">
       <div className="w-[412px] md:w-[800px] h-full  rounded-xl border-[2px] border-solid border-border_grey flex justify-between flex-col md:flex-row gap-3">

        <div className=" relative w-full h-[30%] md:w-[50%] md:h-full border-r-[2px] border-solid border-border_grey flex justify-center items-center rounded-xl"  style={{backgroundColor:`${avatarCollection[selectedAvatarIndex-1]?.bgcolor}`}}>
            <img src={`/Avatar/${avatarCollection[selectedAvatarIndex-1]?.id}.svg`} className=" w-full h-full md:w-[500px] md:h-[500px]"></img>
            <button className="w-[80px] h-[40px] rounded-xl shadow-grey_shadow border-[2px] border-solid border-border_grey bg-white self-start absolute right-2 md:right-4 mt-4 flex justify-center items-center font-Nunito text-blue-500 font-semibold" onClick={()=>AvatarSave()}>Save</button>
        </div>

          <div className=" w-full h-[70%] md:w-[50%] md:h-full overflow-auto grid grid-cols-3 place-items-center ">
            {
            avatarCollection.map((item,index)=>{
               return( 
                 <div className={`w-[112px] h-[112px] rounded-xl ${selectedAvatarIndex===index+1 && "outline outline-2 outline-offset-2 outline-blue-700"} cursor-pointer `} style={{backgroundColor:`${item.bgcolor}` }} onClick={()=>setSelectedAvatarIndex(index+1)}>
            <img src={`/Avatar/${item.id}.svg`} className=" w-full h-full "></img>
        </div>
               )
            })
            }
          </div>

        </div>
        </section>
    )
}