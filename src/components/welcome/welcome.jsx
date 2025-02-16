import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./welcome.css"
import {  useNavigate } from "react-router-dom";
import { getUser } from "../../happyexamReducer/auth";
import { getSubject } from "../../happyexamReducer/happyexam";


function Welcome(){

  const welcomeData= useSelector((state)=>state.happyexam.welcomeData);
 const [welcomeIndex, setwelcomeIndex] = useState(0);
 const user = useSelector((state)=>state.auth.user);
 const navigate = useNavigate()
 const [isgreen, setIsgreen] = useState(false)
const [selectcardIndex, setSelectcardIndex] = useState(null);
const [SelectData, setSelectData]= useState({});
const dispatch = useDispatch()
console.log(SelectData)




useEffect(() => {

    if(user.id) {
      navigate(`/${user.class}`);
    }
  }, [user, navigate]);


 function Selectcard(e, index,value){
  
setSelectData((prev)=>({...prev, [welcomeData[welcomeIndex].key]:  value}))
 setSelectcardIndex(index);
setIsgreen(true)

 }

 function  userData(){
const  value = "1234567890abcdefghijklmn0pqrstuvwxyz"
 let Id = ''
  for(let i=0; i<20; i++){
    Id +=   value[Math.floor(Math.random()*value.length)];

 }
 const classId =  +SelectData.class || 10 
 const language = SelectData.language  || "english"
 const userData = {id:Id, class:classId, language: language, HappyPoints:0}
 console.log(userData)
return userData


 
}
userData()


 function handleclick(e){
   const user = userData()

  if(user.class === 12){
 return null;
  }
    
    if(welcomeIndex>0) {
        dispatch(getUser(user))
         dispatch(getSubject(SelectData.class))
          navigate(`/${SelectData.class || 10}`,{state:{isClick:"true"}})
         return;

        
    }
    setwelcomeIndex((prev)=>prev+1);
setIsgreen(false);
setSelectcardIndex(null);

  
 }



 
 

    return(
        <div className=" w-full h-full relative  overflow-hidden  select-none">  

         <div  className=" w-full h-full flex justify-center items-center flex-col  ">
            <div className=" absolute top-10 font-Nunito text-[18px] md:text-[20px] border-[2px] border-solid  border-border_explanation_green px-10 py-5 rounded-xl ">
                {welcomeData[welcomeIndex].ask}
                <div className=" absolute top-[30%] left-[-14px]">
            <svg width="20" height='20' viewBox="0 0 17 35"   focusable="false" class="chakra-icon speech-bubble-tail css-onkibi"><path d="M17.0121 0.890625L4.74655 12.941C3.2299 14.3967 2.47157 15.1245 2.18744 15.9638C1.93752 16.7021 1.93752 17.4973 2.18744 18.2356C2.47157 19.0749 3.2299 19.8027 4.74655 21.2584L17.0121 33.1759V0.890625Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15 0.0429688L3.6561 11.3869C1.67601 13.367 0.685972 14.357 0.31503 15.4986C-0.01126 16.5029 -0.01126 17.5846 0.31503 18.5888C0.685972 19.7304 1.67601 20.7205 3.6561 22.7006L15 34.0445V31.223L4.74655 21.2582C3.22995 19.8026 2.47156 19.0747 2.18744 18.2354C1.93752 17.4971 1.93752 16.7019 2.18744 15.9636C2.47157 15.1243 3.2299 14.3965 4.74655 12.9408L15 2.86562V0.0429688Z" fill="#1FD043" ></path></svg></div>
            </div>
            <div className=" flex justify-center  items-center gap-6 md:gap-[100px]">
                {
                    welcomeData[welcomeIndex].element.map((item, index)=>{
                        return(
                            <div key={index} className={`   w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-lg  md:rounded-xl flex flex-col gap-2 justify-center items-center font-Nunito text-[20px] md:text-[25px] cursor-pointer transition-all duration-100 ease-in-out translate-y-0 active:shadow-none active:translate-y-[3px] ${selectcardIndex === index ?" bg-background_blue shadow-blue_shadow border-[2px] border-solid border-border_blue text-text_blue" : "bg-white border-[2px] border-solid border-border_grey shadow-grey_shadow " }` } onClick={(e)=>Selectcard(e,index, item.data)} id="card">
                            <div>{item.data}</div>
                            <div className=" font-Nunito text-[16px] font-semibold">{item?.available ? "Coming soon" : null }</div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={` relative top-[100px] left-[100px] md:left-[300px] font-Nunito font-bold text-[18px]  w-[100px]  h-[50px]  md:w-[150px] md:h-[50px] rounded-2xl flex justify-center items-center cursor-pointer transition-all duration-100 ease-in-out translate-y-0 active:shadow-none active:translate-y-[5px] ${ isgreen ?  "bg-button_green shadow-check_next_green text-white" : " bg-check_grey text-check_text_grey border-[1px] border-solid shadow-grey_shadow" }`} onClick={handleclick}>{welcomeIndex>0 ? "Complete" : "Next"}</div>
         </div>
        </div>
    )
}

export default Welcome;

