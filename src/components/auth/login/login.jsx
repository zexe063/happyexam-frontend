
import { useState,useRef} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { userLogin } from "../../../happyexamReducer/auth";
import { MdError } from "react-icons/md";

function Login(){
     
    const errorRef =  useRef();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loginData, setLoginData] = useState({});
    const [isLoading, setIslLoading] = useState(false);
  
  function handleLogin(e){
    setLoginData((prev)=>({...prev, [e.target.title]:e.target.value}))
    }
  
function onLogin(){
   setIslLoading(true)
  errorRef.current.innerHTML  = null
   dispatch(userLogin(loginData)).
     then((res)=>{
          if( res.payload?._id )  {
            setIslLoading(false);
            return  navigate(`/home/${res.payload?.userPreference?.class_name}`) 
           }
          else{
            setIslLoading(false);
              errorRef.current.innerHTML = `email and password are invalid`
          }
           return;
         })
  
}
    
    return(
 <div className=" relative w-full h-full flex flex-col gap-2  justify-center items-center ">
     
        <div  className=" max-w-[450px] w-full p-6 flex flex-col gap-2 justify-center items-center">
        <input title="email"  type="text" placeholder="Email Address" className=" items-start font-Nunito border-[2px] border-solid border-border_grey w-full  h-12 rounded-lg px-2" onChange={(e)=>handleLogin(e)}></input>
        
       <input  title="password" type="password" placeholder="Password" className=" font-Nunito border-[2px] border-solid border-border_grey w-full  h-12 rounded-lg px-2"  onChange={(e)=>handleLogin(e)}></input>
            <span ref={errorRef} className=" text-red-500  flex justify-center items-center  gap-[2px]"> </span>
       </div>
    
     <button  disabled={isLoading} className=" w-[364px]  md:w-full max-w-[402px] h-[48px] rounded-full bg-background_black shadow-black text-white font-Nunito flex justify-center items-center"  onClick={onLogin}>
          {
            isLoading  ? <div className=" w-5 h-5 animate-spin rounded-full border-[2px] border-solid border-white border-t-black"></div> :
            "Login"
          }
        
          </button>

     <p className=" mt-5"><span>New user? </span> <a href="./welcome" className=" underline underline-offset-4 decoration-blue-500 decoration-2 hover:text-blue-500 cursor-pointer transition-all duration-100 ease-in-out">Signup</a></p>
    </div>
    )
}


export default Login