import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useForm} from "react-hook-form"
import { userProfile, userPassword } from "@/happyexamReducer/auth";
import { toastSucess, toastError } from "@/config/toast";
import { persistor } from "@/main";

function Setting (){

const dispatch = useDispatch();  
const user= useSelector((state)=>state.auth.user);


const {
  register: registerPersonalinfo,
  handleSubmit: handleSubmitPersonalinfo,
  formState: { errors: errorsPersonalinfo }
} = useForm();

const {
  register: registerPassword,
  handleSubmit: handleSubmitPassword,
  formState: { errors: errorsPassword }
} = useForm();


const [isEnabled, setIsEnabled] = useState({Personalinfo:false, Password:false})
const [isloading, setIsloading]  = useState({Personalinfo:false, Password:false})



function handlePersonalinfo(data){
  setIsloading((prev)=>({...prev, Personalinfo:true}))
 dispatch(userProfile({payload:data})).then((action)=>{
  
    if(action?.payload?.status === 200){
      setIsEnabled((prev)=>({...prev, Personalinfo:false}));
      setIsloading((prev)=>({...prev, Personalinfo:false}))
       toastSucess(action.payload?.data?.message);
    }
    
    else if(action.payload?.data?.code === "TOKEN_FAILED") {
         setIsEnabled((prev)=>({...prev, Personalinfo:false}));
      setIsloading((prev)=>({...prev, Personalinfo:false}))
       toastError(action.payload?.data?.message);

       setTimeout(async() => {
         const Logout = await persistor.purge();
        if(Logout) return window.location.href = "/"
      }, 1000);  
    }

    else{
  setIsEnabled((prev)=>({...prev, Personalinfo:false}));
      setIsloading((prev)=>({...prev, Personalinfo:false}))
       toastError(action.payload?.data?.message);

    }
 })

 
  
}


function handlePassword(data){

    setIsloading((prev)=>({...prev, Password:true}))

  dispatch(userPassword(data)).then((action)=>{

    if(action?.payload?.status === 200){
      setIsEnabled((prev)=>({...prev, Password:false}));
      setIsloading((prev)=>({...prev, Password:false}))
       toastSucess(action.payload?.data?.message);
    }
      else if(action?.payload?.data?.code === "TOKEN_FAILED"){
           setIsEnabled((prev)=>({...prev, Password:false}));
      setIsloading((prev)=>({...prev, Password:false}))
       toastError(action.payload?.data?.message)

       setTimeout(async() => {
         const Logout = await persistor.purge();
        if(Logout) return window.location.href = "/"
      }, 1000);  


      }
      
    else {
         setIsEnabled((prev)=>({...prev, Password:false}));
      setIsloading((prev)=>({...prev, Password:false}))
       toastError(action.payload?.data?.message)
    
    
    }
  })
}

 return(
  <section className=" w-full h-[calc(100vh-70px)] flex justify-center">
<div className=" min-w-[400px] md:w-[600px]  max-w-[800px] flex flex-col items-center gap-10 mt-5">
  {/* Personal info */}

  <form onSubmit={handleSubmitPersonalinfo(handlePersonalinfo)} className=" w-full flex flex-col gap-3  ml-3">

    <p className=" text-xl font-semibold ">Personal info</p>

{/* first_name */}

    <div>
      <span>First name</span>

    <input {...registerPersonalinfo("first_name", {required:"This is required"})} type="text" title="first_name" placeholder="name" defaultValue={user.first_name} className=" w-[95%]  border-[1px] border-solid border-gray-200 rounded-lg px-1 py-1.5 text-sm" onChange={()=>setIsEnabled((prev)=>({...prev, Personalinfo:true}))}></input>

   <p className=" self-start text-[12px] text-red-500  px-1">{errorsPersonalinfo.first_name?.message}</p>
    </div>

{/* last_name */}

      <div>
      <span>Last name</span>

    <input  {...registerPersonalinfo("last_name", {required:"This is required"})} type="text"  title="last_name" defaultValue={user.last_name} className=" w-[95%]  border-[1px] border-solid border-gray-200 rounded-lg px-1 py-1.5 text-sm" onChange={()=>setIsEnabled((prev)=>({...prev, Personalinfo:true}))}></input>

    <p className=" self-start text-[12px] text-red-500  px-1">{errorsPersonalinfo.last_name?.message}</p>
    </div>

{/* email */}

      <div>
      <span>email</span>

    <input type="text"  defaultValue={user.email} readOnly className=" w-[95%]  border-[1px] border-solid border-gray-200 rounded-lg px-1 py-1.5 text-gray-400 text-sm"></input>

    </div>

 <button type="submit" disabled={!isEnabled.Personalinfo || isloading.Personalinfo} className={`w-[300px] h-[45px] ${isEnabled.Personalinfo ?  " bg-black shadow-btn-black text-white cursor-pointer"  : "  bg-black/5 text-gray-500 cursor-not-allowed"}  rounded-full  self-center md:self-start md:ml-6 flex justify-center items-center`} >
 {
isloading.Personalinfo ? <div className=" w-5 h-5 animate-spin rounded-full border-[2px] border-solid border-white border-t-black"></div>  
: "Update Personal Info"
 }

 </button> 
  </form>


{/* Password*/}


  <form onSubmit={handleSubmitPassword(handlePassword)} className=" w-full flex flex-col gap-3  ml-3">
    <p className=" text-xl font-semibold ">Change Password</p>

{/* currentpassword */}

    <div>
      <span>Current password</span>

    <input {...registerPassword("currentPassword", {required:"This is required"} )} type="password" className=" w-[95%]  border-[1px] border-solid border-gray-200 rounded-lg px-1 py-1.5 text-sm" onChange={()=>setIsEnabled((prev)=>({...prev, Password:true}))} autoComplete="off"></input>

       <p className=" self-start text-[12px] text-red-500  px-1">{errorsPassword.currentPassword?.message}</p>
    </div>


{/* newpassword */}

      <div>
      <span>New password</span>

    <input {...registerPassword("newPassword", {required:"This is required", minLength:{value:"6", message:"Password should be greater than 6 "}} )} type="password"   className=" w-[95%]  border-[1px] border-solid border-gray-200 rounded-lg px-1 py-1.5 text-sm" autoComplete="off"  onChange={()=>setIsEnabled((prev)=>({...prev, Password:true}))}></input>

   <p className=" self-start text-[12px] text-red-500  px-1">{errorsPassword.newPassword?.message}</p>
    </div>

    <button disabled={!isEnabled.Password || isloading.Password } className={`w-[300px] h-[45px] ${isEnabled.Password ?  " bg-black shadow-btn-black text-white  cursor-pointer"  : "bg-black/5 text-gray-500 cursor-not-allowed"}  rounded-full  self-center md:self-start md:ml-6 flex justify-center items-center `} >
    {
    isloading.Password ? <div className=" w-5 h-5 animate-spin rounded-full border-[2px] border-solid border-white border-t-black"></div> 
    : "Update Password"

    }
    </button> 
 
  </form>


</div>
  </section>
 )
}


export default Setting;