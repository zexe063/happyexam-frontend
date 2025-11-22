import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";

import { getUser, userSignup } from "../../../happyexamReducer/auth";
import { avatarCollection } from "../../../config/constant";


function Signup(){
  
    const user = useSelector((state)=>state.auth.user)
    const location = useLocation()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [signupData, setSignData] = useState({});
    const [isLoading , setIslLoading] = useState(false);
   
   
    function handleSignup(e){
    setSignData((prev)=>({...prev, [e.target.title]:e.target.value}))
    }

    function  createAccount(){

  const UsersignupData = {
  first_name: signupData.first_name,
  last_name: signupData.last_name,
  email: signupData.email,
  password: signupData.password,
  age:signupData.age,
  avatar: avatarCollection[Math.floor(Math.random()*10)],
  userPreference: {...location.state},
  LevelCompleted: [],
 
}
 setIslLoading(true)
    dispatch(userSignup(UsersignupData)).then((res)=>{
      if(res.payload?._id){ 
        setIslLoading(false)
        return navigate(`/home/${res.payload?.userPreference?.class_name}`) 
      }
      else setIslLoading(false)
      return;
    })

    
      //  return 
    

      
 
    }

 return (
    <div className=" relative w-full h-full flex flex-col gap-2  justify-center items-center ">
     
        <div  className=" max-w-[450px] w-full p-6 flex flex-col gap-2 justify-center items-center">

        <input title="email"  type="text" placeholder="Email Address" className=" items-start font-Nunito border-[2px] border-solid border-border_grey w-full  h-12 rounded-lg px-2" onChange={(e)=>handleSignup(e)}></input>

        <input  title="first_name" type="text" placeholder="Firstname" className=" font-Nunito border-[2px] border-solid border-border_grey w-full  h-12 rounded-lg px-2"   onChange={(e)=>handleSignup(e)}></input>
        
        <input  title="last_name" type="text" placeholder="Lastname" className=" font-Nunito border-[2px] border-solid border-border_grey w-full  h-12 rounded-lg px-2"  onChange={(e)=>handleSignup(e)}></input>

       <input  title="password" type="password" placeholder="Password" className=" font-Nunito border-[2px] border-solid border-border_grey w-full  h-12 rounded-lg px-2"  onChange={(e)=>handleSignup(e)}></input>

        <input  title="age" type="number" placeholder="Age" className=" font-Nunito border-[2px] border-solid border-border_grey w-full  h-12 rounded-lg px-2"  onChange={(e)=>handleSignup(e)}></input>
      
       </div>
       
     <button  className=" w-[364px]  md:w-full max-w-[402px] h-[48px] rounded-full bg-background_black shadow-black text-white font-Nunito flex justify-center items-center" onClick={createAccount}>{
            isLoading  ? <div className=" w-5 h-5 animate-spin rounded-full border-[2px] border-solid border-white border-t-black"></div> :
            "Continue"
          }</button>

     <p className=" mt-5"><span>Existing user? </span> <a href="./login" className=" underline underline-offset-4 decoration-blue-500 decoration-2 hover:text-blue-500 cursor-pointer transition-all duration-100 ease-in-out">Login</a></p>
    </div>
  
   
 )
}

export default Signup