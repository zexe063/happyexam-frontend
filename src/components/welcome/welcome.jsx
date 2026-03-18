import "./welcome.css"
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {DotLottieReact} from "@lottiefiles/dotlottie-react"
import WelcomeProgess from "./welcomeProgress";


 
function Welcome(){

  const welcomeInfo=  [
        {
            ask:"Select you langauge", 
            key:"language",
             element:[
                {data:"english",icon:"icons/english.svg"},
                {data:"hindi",icon:"icons/hindi.svg"}
            ],
            
         optionSelectedIndex:null
        },
        {
            ask:"Select you class", 
             key:"class_name",
             element:[
                {data:"10", icon:"icons/tenth.svg"}
            ],
           optionSelectedIndex:null
        },
        {
            ask:"Where from you hear", 
            key:"heardFrom", 
            element:[
            {data:"Youtube", icon:"icons/youtube.svg"}, 
            {data:"Facebook/Instagram", icon:"icons/instagram.svg"},
            {data:"Google Search" , icon: "icons/google.svg"},
            {data:"Freinds/Family", icon: "icons/family.svg"}

        ],
         optionSelectedIndex:null
        
    },
        {
         ask:"How much time you spent",
         key:"time",
         element:[
            {data:"5 min",  icon: "icons/time.svg" },
            {data:"10 min", icon: "icons/time.svg" },
            {data:"15 min", icon: "icons/time.svg" },
            {data:"10 min", icon: "icons/time.svg" }
         ],
          optionSelectedIndex:null
        }
    ]
 const dispatch = useDispatch()
 const user = useSelector((state)=>state.auth.user);
 const [welcomeData, setWelcomeData] = useState(welcomeInfo)
 const [welcomeIndex, setwelcomeIndex] = useState(0);
 const welcome = welcomeData[welcomeIndex]
 const navigate = useNavigate()
 const [SelectData, setSelectData]= useState({});


 function Selectcard( Selectedindex,value){
setWelcomeData((prev)=> prev.map((item,index)=> welcomeIndex === index ? {...item, optionSelectedIndex: Selectedindex} : item));
setSelectData((prev)=>({...prev, [welcomeData[welcomeIndex].key]:  value}))


 }
 


 

// CHECK NEXT COMPLETE
 function handleContinue(e){
    
      if(welcome.optionSelectedIndex === null) return null;
    if(welcomeData.length-1 === welcomeIndex) {
          navigate("/signup", {state:SelectData})
        return;
    }
setwelcomeIndex((prev)=>prev+1);
 }



 function  handlePrevious(){
   welcomeIndex > 0 && setwelcomeIndex((prev)=> prev-1);
 }



 
 

    return(
        <section className=" relative w-full h-full flex flex-col
         justify-center items-center gap-5">
     
     <WelcomeProgess  currentLength={welcomeIndex+1} totalLength={welcomeData.length} handlePrevious={handlePrevious}></WelcomeProgess>
     <div className="  w-[360px] md:w-[500px] h-full max-w-[800px]  flex flex-col gap-5">
       
            <div className=" w-full h-[60px] flex gap-5 justify-center items-center text-black">
                <span>  
     <DotLottieReact
      src="Logo.lottie"
      loop
      autoplay
        style={{ width: '60px', height: '60px' }}
    />
                </span>
                <span className=" font-Space_Grotesk border-[2px] border-solid border-gray-200 px-4 py-3 rounded-xl font-medium ">{welcomeData[welcomeIndex].ask}</span>
               </div>

            {/* option data */}
            <div className=" w-full flex  flex-col gap-2 justify-center  items-center">
                {
                    welcomeData[welcomeIndex].element?.map((item, index)=>{
                        return(
                            <div key={index} className={` w-full h-16 rounded-xl flex items-center gap-2 font-Nunito cursor-pointer border-solid border-[2px] px-2 font-medium tracking-wide ${welcome.optionSelectedIndex === index ?" bg-blue-50 border-blue-400 text-blue-600" : "bg-white  border-gray-200" }` } onClick={(e)=>Selectcard(index, item.data)} id="card">
                            <span ><img src={item.icon} width={25} height={25} /></span>
                            <p className=" font-Nunito text-sm">{item.data}</p>
                           
                            </div>
                        )
                    })
                }
            </div>

            </div>

{/*  continue system */}
            <div className={` w-[350px]  h-[50px] rounded-full  fixed  bottom-5 font-Nunito font-medium text-[18px]  flex justify-center items-center cursor-pointer ${[0,1,2,3].includes(welcome.optionSelectedIndex) ? "bg-black shadow-btn-black text-white" : "bg-black/5 text-gray-500"} `} onClick={handleContinue}>{welcome.length-1=== welcomeIndex ? "Create Account" : "continue"}</div>
       
        </section>
    )
}

export default Welcome;

