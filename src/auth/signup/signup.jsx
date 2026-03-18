import { useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useForm} from "react-hook-form"
import { userSignup } from "@/happyexamReducer/auth";
import { avatarCollection } from "@/config/constant";
import { toastError } from "@/config/toast";

function Signup(){
  
    const user = useSelector((state)=>state.auth.user)
    const location = useLocation()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const errorRef = useRef()
    const [isLoading , setIsLoading] = useState(false);
    const {register, handleSubmit,formState:{errors}} = useForm()


    function  createAccount(data){
      const defaultUserPreference = {
        language: "english",
        class_name:10,
        heardFrom:"Youtube",
        time:"5 min"
      }

  const UsersignupData = {
    ...data,
  avatar: avatarCollection[Math.floor(Math.random()*10)],
  userPreference: location.state ? {...location.state} : defaultUserPreference,
  LevelCompleted: [],
 
}

 setIsLoading(true)

    dispatch(userSignup(UsersignupData)).then((action)=>{
      
       setIsLoading(false)
 if( action.payload?.status === 0) return toastError(action.payload?.data?.message)
      else if(action.payload?.status === 200) return navigate(`/home/${action.payload?.data?.result?.userPreference?.class_name}`);
     else  if(action.payload?.status >= 500 ) return toastError(action.payload?.data?.message);
     
     else  errorRef.current.innerHTML = action.payload?.data?.message;

    })

    
       
    

      
 
    }

 return (
    <div className=" relative w-full h-full flex flex-col gap-2  justify-center items-center ">
     

       <form  className=" max-w-[450px] w-full p-6 flex flex-col gap-1 justify-center items-center" onSubmit={handleSubmit(createAccount)}>
    
         
        <input {...register("email", {required:'This is required',  pattern: {value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message:"Enter a valid email address."}})}  placeholder="Email Address" className=" items-start font-Nunito border-[2px] border-solid border-gray-200 w-full  h-12 rounded-lg px-2"  />
        <p className=" self-start text-[12px] text-red-500  px-1">{errors.email?.message}</p>

        <input {...register("first_name", {required:'This is required.'})}  placeholder="Firstname" className=" font-Nunito border-[2px] border-solid border-gray-200 w-full  h-12 rounded-lg px-2"    />
        <p className=" self-start text-[12px] text-red-500  px-1">{errors.first_name?.message}</p>

        <input {...register("last_name", {required:'This is required.'})} placeholder="Lastname" className=" font-Nunito border-[2px] border-solid border-gray-200 w-full  h-12 rounded-lg px-2"   />
        <p className=" self-start text-[12px] text-red-500  px-1">{errors.last_name?.message}</p>

       <input {...register("password",{required:'this is required.', minLength:{value:6, message:"Password should be greater than 6 "}})}  type="password"  placeholder="Password" className=" font-Nunito border-[2px] border-solid border-gray-200 w-full  h-12 rounded-lg px-2" />
      <p className=" self-start text-[12px] text-red-500 px-1">{errors.password?.message}</p>

        <input {...register("age",{required:'this is required.', min:{value:14, message:"Sorry, your age is not eligible to signup Happyexam"}, max:{value:150, message:"Ohh! the age not look valid"}})}  type="number" placeholder="Age" className=" font-Nunito border-[2px] border-solid border-gray-200 w-full  h-12 rounded-lg px-2"  />
        <p className=" self-start text-[12px] text-red-500 px-1">{errors.age?.message}</p>

        <p ref={errorRef} className=" text-red-500  gap-[2px]"></p>

      <button disabled={isLoading} type="submit" className={` w-[364px]  md:w-full max-w-[402px] h-[48px] rounded-full bg-black shadow-btn-black text-white font-Nunito flex justify-center items-center  ${isLoading?"cursor-not-allowed " :"cursor-pointer"}`} >

          {
          isLoading  ? <div className=" w-5 h-5 animate-spin rounded-full border-[2px] border-solid border-white border-t-black"></div> :
            "Continue"
          }

          </button>     
   
        </form>

      

  

     <p className=" mt-5"><span>Existing user? </span> <a href="./login" className=" underline underline-offset-4 decoration-blue-500 decoration-2 hover:text-blue-500 cursor-pointer transition-all duration-100 ease-in-out">Login</a></p>


    </div>

  
   
 )
}

export default Signup