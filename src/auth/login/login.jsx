
import { useState,useRef} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { userLogin } from "@/happyexamReducer/auth";
import {toastError } from "@/config/toast";



function Login(){
     
    const errorRef =  useRef();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {
    register,
    handleSubmit,
    formState:{errors}
    } = useForm()
    const [isLoading, setIsLoading] = useState(false);
  
  
function onLogin(data){
   setIsLoading(true)
  
  errorRef.current.innerHTML  = null
   dispatch(userLogin(data)).then((action)=>{
    setIsLoading(false);

     if( action.payload?.status === 0) return toastError(action.payload?.data?.message)
      else if(action.payload?.status === 200) return navigate(`/home/${action.payload?.data?.result?.userPreference?.class_name}`);
     else  if(action.payload?.status >= 500 ) return toastError(action.payload?.data?.message);
     
     else  errorRef.current.innerHTML = action.payload?.data?.message;



   })
}
    
    return(
 <div className=" relative w-full h-full flex flex-col gap-2  justify-center items-center ">
     
        <form  onSubmit={handleSubmit(onLogin)} className=" max-w-[450px] w-full p-6 flex flex-col gap-2 justify-center items-center">

        <input {...register("email", {required:'This is required',  pattern: {value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message:"Enter a valid email address."}})}    type="email" placeholder="Email Address" className=" items-start font-Nunito border-[2px] border-solid border-gray-200 w-full  h-12 rounded-lg px-2" />
          <p className=" self-start text-[12px] text-red-500  px-1">{errors.email?.message}</p>

       <input {...register("password",{required:'This is required.'})}   type="password" placeholder="Password" className=" font-Nunito border-[2px] border-solid border-gray-200 w-full  h-12 rounded-lg px-2" />
       <p className=" self-start text-[12px] text-red-500  px-1">{errors.password?.message}</p>

       <span ref={errorRef} className=" text-red-500  flex justify-center items-center  gap-[2px]"> </span>
              <button  type="submit"  disabled={isLoading} className={` w-[364px]  md:w-full max-w-[402px] h-[48px] rounded-full bg-black shadow-btn-black text-white font-Nunito flex justify-center items-center ${isLoading ? "cursor-not-allowed" : "cursor-pointer"}`}>
          {
            isLoading  ? <div className=" w-5 h-5 animate-spin rounded-full border-[2px] border-solid border-white border-t-black"></div> :
            "Login"
          }
        
          </button>
       </form>
    
   

     <p className=" mt-5"><span>New user? </span> <a href="./welcome" className=" underline underline-offset-4 decoration-blue-500 decoration-2 hover:text-blue-500 cursor-pointer transition-all duration-100 ease-in-out">Signup</a></p>
    </div>
    )
}


export default Login