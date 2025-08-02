import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { getUser } from "../../../happyexamReducer/auth";
import { useDispatch } from "react-redux";



function Signup(){
    const location = useLocation()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [SignupData, setSignData] = useState({});
    

    function handleSignup(e){
    setSignData((prev)=>({...prev, [e.target.title]:e.target.value}))
    }

    function  createAccount(){
         
  const  value = "1234567890abcdefghijklmn0pqrstuvwxyz"
   let Id = ''
   for(let i=0; i<20; i++){
   Id +=   value[Math.floor(Math.random()*value.length)];
    }      
    const userData = {id:Id, ...location.state, ...SignupData, Examkey:3, OnStreak:0, LongestStreak:0 , HEP:10}
     dispatch(getUser(userData))
      navigate(`/${userData.class}`)
 
    }

 return (
    <div className=" w-full h-full flex flex-col gap-2  justify-center items-center ">
        
        <input title="email"  type="text" placeholder="Email Address" className=" items-start font-Nunito border-[1px] border-solid border-border_grey w-[300px]  h-[48px] rounded-xl px-2" onChange={(e)=>handleSignup(e)}></input>
        <input  title="Firstname" type="text" placeholder="Firstname" className=" font-Nunito border-[1px] border-solid border-border_grey w-[300px]  h-[48px] rounded-xl px-2"   onChange={(e)=>handleSignup(e)}></input>
        <input  title="Lastname" type="text" placeholder="Lastname" className=" font-Nunito border-[1px] border-solid border-border_grey w-[300px]  h-[48px] rounded-xl px-2"  onChange={(e)=>handleSignup(e)}></input>
       
        <button  className=" w-[308px] h-[48px] rounded-full bg-background_black shadow-black text-white font-Nunito" onClick={createAccount}>Continue</button>
        </div>
   
   
 )
}

export default Signup