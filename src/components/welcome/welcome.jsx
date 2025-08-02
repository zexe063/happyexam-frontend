import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./welcome.css"
import {  data, useNavigate } from "react-router-dom";
import { getUser } from "../../happyexamReducer/auth";
import { getSubject } from "../../happyexamReducer/happyexam";
import { IconBase } from "react-icons/lib";
import { interpolate } from "motion/react";
 import {English, Hindi, Tenth, ITTJEE, Youtube, Instagram, Google, Family, Time} from "../../svgicon/icon";


 
function Welcome(){

  const welcomeData= [
        {ask:"Select you langauge...", key:"language", element:[{data:"English",icon:English},{data:"हिंदी",icon:Hindi}]},
        {ask:"Select you class...",  key:"class", element:[{data:"10", icon:Tenth}]},
        {ask:"Where from you hear...", key:"find", element:[
            {data:"Youtube", icon:Youtube}, 
            {data:"Facebook/Instagram", icon:Instagram},
            {data:"Google Search" , icon:Google},
            {data:"Freinds/Family", icon:Family}

        ]},
        {
         ask:"How much time you spent...",
         key:"time",
         element:[
            {data:"5 min", icon:Time},
            {data:"10 min", icon:Time},
            {data:"15 min", icon:Time},
            {data:"10 min", icon:Time}
         ]
        }
    ]
 const [welcomeIndex, setwelcomeIndex] = useState(0);
 const user = useSelector((state)=>state.auth.user);
 const navigate = useNavigate()
 const [isSelected, setisSelected] = useState(false)
const [selectcardIndex, setSelectcardIndex] = useState(null);
const [SelectData, setSelectData]= useState({});
const dispatch = useDispatch()






useEffect(() => {

    if(user.id) {
      navigate(`/${user.class}`);
    }
  }, [user, navigate]);

// HERE CHECK IS OPTION SLEECTED OR NOT
 function Selectcard(e, index,value){
  setisSelected(true)
setSelectData((prev)=>({...prev, [welcomeData[welcomeIndex].key]:  value}))
 setSelectcardIndex(index);


 }


 

// CHECK NEXT COMPLETE
 function handleclick(e){
   
    
    if(welcomeData.length-1 === welcomeIndex) {
          navigate("/signup", {state:SelectData})
        return;
    }
setwelcomeIndex((prev)=>prev+1);
setisSelected(false);
setSelectcardIndex(null);

  
 }



 
 

    return(
        <section className=" relative w-full h-full flex flex-col gap-[50px]  items-center py-10 overflow-hidden">

       
            <div className=" w-[280px] h-[60px] flex justify-center items-center  font-Nunito  text-[18px] text-black font-medium">
                {welcomeData[welcomeIndex].ask}
               </div>

            {/* option data */}
            <div className=" flex  flex-col gap-2 justify-center  items-center">
                {
                    welcomeData[welcomeIndex].element?.map((item, index)=>{
                        return(
                            <div key={index} className={`   w-[330px] h-[66px] md:w-[600px] md:h-[66px] rounded-xl flex items-center gap-2 font-Nunito cursor-pointer border-solid border-[2px] px-2 font-medium tracking-wide ${selectcardIndex === index ?" bg-background_blue border-border_blue text-text_blue" : "bg-white  border-border_grey" }` } onClick={(e)=>Selectcard(e,index, item.data)} id="card">
                            <span >{item.icon}</span>
                            <p>{item.data}</p>
                           
                            </div>
                        )
                    })
                }
            </div>

{/*  continue system */}
            <div className={` w-[300px] h-[50px] rounded-full  fixed  bottom-5 font-Nunito font-medium text-[18px]  flex justify-center items-center cursor-pointer ${isSelected ? "bg-background_black shadow-black text-white" : "bg-why_grey"} `} onClick={handleclick}>{welcomeData.length-1=== welcomeIndex ? "Create Account" : "continue"}</div>
       
        </section>
    )
}

export default Welcome;

