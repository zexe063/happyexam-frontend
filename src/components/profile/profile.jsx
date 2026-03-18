import { useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

import { MdEdit, MdSettings } from "react-icons/md";
import {persistor} from "@/main"
import React, {useState } from "react";
import {toastError} from "@/config/toast";
import { userProfile } from "@/happyexamReducer/auth";

function Profile(){
const dispatch = useDispatch();
const navigate =  useNavigate()
const user = useSelector((state)=>state.auth.user);
const [id, setId] = useState(0);



 if(!user?._id){
         navigate("/")
    
       } 

    const Achievement = [
        {id:1, name:"HappyExam points", value:user.HEP, icon:"/icons/HEP.svg"},
        {id:2, name:"Question Attempt", value:user.questionAttempt, icon:"/icons/questionAttempt.svg"}
        
    ]

    const langauge = [
        {id:1, name:"english", value:"Eng", icon:"/icons/english.svg"},
        {id:2,  name:"hindi", value:"Hin", icon:"/icons/hindi.svg"},
    ]

    function Handlelanguage(item){
         setId(item.id);
         
           dispatch(userProfile({payload:{"userPreference.language":item.name}})).then((action)=>{
               setId(0);
                 if(action.payload?.data?.code === "TOKEN_FAILED"){
                       toastError(action.payload?.data?.message);
                        setTimeout(async() => {
                            const Logout = await persistor.purge()
                            if(Logout) return window.location.href= "/";
                        }, 1000);
                 }
           })
    }
    async function HandleSignout(){
        const Logout = await persistor.purge();
       if(Logout)   window.location.href="/"
    }
  

  

    
    return(
        <section className=" relative w-full h-[calc(100vh-70px)] flex justify-center items-center overflow-x-hidden mt-5">
          
       <div className=" w-[412px] md:w-[600px] h-full  flex  items-center flex-col gap-5">

      <div className=" self-end pr-6 cursor-pointer" onClick={()=>navigate("/setting/account")}><MdSettings size={25} color="#e5e5e5"/></div>

        <div className=" relative w-[90%] h-[200px]  rounded-xl flex justify-center items-center" style={{backgroundColor:`${user?.avatar?.bgcolor}`}}>

       <button className="w-[40px] h-[36px] rounded-xl shadow-btn-grey border-[2px] border-solid border-gray-200 bg-white  absolute right-3 top-2 flex justify-center items-center" onClick={()=>navigate("/avatar")}><MdEdit size={21}></MdEdit></button>

      <img src={`/avatar/${user?.avatar?.id}.svg`} width={180} height={180}></img>
        </div>

        <div className=" font-Nunito text-base self-start border-b-[2px] border-solid border-gray-200 w-[90%] p-2 py-4 ml-4">
            <div className=" flex gap-1 ">
                <p className="font-semibold text-lg" >{user?.first_name}</p>
                <p className="font-semibold text-lg" >{user?.last_name}</p>
            </div>
            

            <p className="text-sm text-gray-500 font-medium"> Joined {`${new Date(user.createdAt).toLocaleDateString('en-GB', {day:"numeric", month:"long", year:"numeric"})}`} </p>
        </div>

        <div className=" flex font-Nunito text-[22px]  flex-col gap-3 self-start ml-4 border-solid border-b-[2px] border-gray-200 w-[90%] p-2 pb-8">
            <p>Achievements</p>

            <div className="flex  gap-3">
       {
    Achievement.map((item)=>{
        return(
            <div key={item.id} className=" w-[180px] h-[60px] rounded-xl border-[2px] border-solid border-gray-200 flex gap-2 justify-center items-center py-8"  >
              <div><img src={item.icon} width={30} height={30} /></div>
              <div className=" flex flex-col font-Nunito text-[14px]">
                <p className=" font-semibold">{item?.value}</p>
                <p>{item?.name}</p>
              </div>
            </div>
        )
    })
       }
            </div>
        </div>

         <div  className=" w-full self-start px-4 flex  justify-between">
                <p className=" text-lg text-gray-400">Language</p>
                <div className="w-[200px] h-[48px] bg-gray-100 flex  gap-2 items-center justify-between  rounded-lg px-1">
                
                { 
                langauge.map((item)=>{
              return (
                <React.Fragment key={item.id}>
                 <div className={` h-10 ${user.userPreference.language === item.name   && " bg-blue-B400"}  flex flex-1 justify-center items-center gap-2 rounded-xl cursor-pointer`}  onClick={()=>{Handlelanguage(item)}}>
                    {id === item.id  ? <div className=" w-5 h-5 animate-spin rounded-full border-[2px] border-solid border-black border-t-gray-200"> </div>
                     : 
                     <>
                    <img src={item.icon} width={20} height={20} />
                    <span>{item.value}</span> 
                    </>
                    }
                    </div>
                </React.Fragment>
              )
                })
                
                }
                </div>
            </div>
        {/* her some seeting */}

        <div className="  py-5">
        <button className=" w-[300px] h-[48px] bg-black rounded-full text-white self-end" onClick={()=>HandleSignout()}>Signout</button>
        </div>
        </div>

        
        </section>
    )
}
export  default Profile;