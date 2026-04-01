import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { IoClose } from "react-icons/io5"
import { ToggleReport } from "@/happyexamReducer/happyexam"
import { createReportQuestion } from "@/happyexamReducer/happyexam"
import { toastSucess, toastError } from "@/config/toast"
import { motion } from "motion/react"
import { TiTick } from "react-icons/ti";

function ReportQuestion({questionId}){
  const user = useSelector((state)=>state.auth.user);

    const ReportData = [
        {id:1, value:"Duplicate question"},
        {id:2, value:"Wrong question"},
        {id:3, value:"Explanation wrong"},
        {id:4, value:"Explanation not clear"},
        {id:5, value:"Option not clear"}
        

    ]
    const dispatch = useDispatch()
    const [value,setvalue] = useState([])
    const [description, setDescription] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const isMobile = window.innerWidth  <= 768
    
  function Handlevalue(e){
setvalue((prev)=>value.includes(e.target.value) ? value.filter((item)=>   item !==e.target.value) : [...prev, e.target.value]);

  }

  function handleDescription(e){
 setDescription((prev)=> ({[e.target.title]: e.target.value}))
  }
  
    function createReport(){
          setIsLoading(true)
        const ReportValue = {userId:user._id, questionId:questionId, value:value, ...description};
       
        dispatch(createReportQuestion(ReportValue)).then((action)=>{
            setIsLoading(false)
             if(action.payload.status === 200) return toastSucess(action.payload?.data?.message, "top-right");
             else return toastError(action.payload?.data?.message, "top-right")
        })
    
    }
    
    return(
        <div className="fixed w-full h-full  bg-black/50 inset-0 bg-opacity-50  z-50  flex justify-center  items-end md:items-center font-Nunito">

          <motion.div
            initial={isMobile?{y:"100%"}: {opacity:0}}
           animate={isMobile?{y:0} : {opacity:1}}
           exit={isMobile?{y:"100%"}:{opacity:0}} 
            transition={{ type: "spring", damping: 30, stiffness: 280 }}
          className=" fixed  bg-white  w-full md:w-[400px]  h-auto px-2 gap-5 py-5 rounded-2xl flex flex-col ">

         <div className=" relative flex justify-center">
            <span className="  font-medium text-md">New ticket</span>
           <span className=" absolute right-2 inline-block cursor-pointer" onClick={()=>dispatch(ToggleReport(false))}><IoClose  size={25}  color="#e5e5e5"></IoClose></span>
         </div>

          <div  className=" flex flex-col gap-5">
            <div className=" flex  flex-col gap-2 font-Nunito tetx-[15px] font-medium">
            {
                ReportData.map((item)=>{
                    return (

                    <div  key={item.id} className=" flex gap-3  items-center px-2">
                    <input  className={` appearance-none cursor-pointer w-5 h-5 rounded-md border-[2px] border-solid border-gray-200 checked:border-blue-B500 flex justify-center items-center checked:after:content-['✓']  checked:after:text-sm  checked:after:text-blue-B500`} type="checkbox" value={item.value}  onClick={(e)=>{Handlevalue(e)}}></input>
                    <span className=" font-medium text-[15px]" >{item.value}</span>
                    </div>
                    )
                })
            }
            </div>

              <textarea  title="description"  placeholder="Describe your problem" spellCheck="false"  className=" text-medium text-sm px-3 py-2 w-[95%] h-[120px] border-[2px] border-solid border-gray-200 rounded-xl flex self-center focus:outline-none focus:border-2 focus:border-blue-B500  focus:transition-all focus:duration-0 focus:ease-in-out" onChange={handleDescription} ></textarea>
            
            </div>

            <button  disabled={!value?.length || isLoading} className={`${!value?.length? "  bg-black/5 text-gray-400 cursor-not-allowed" : "bg-blue-B500 shadow-btn-blue text-white cursor-pointer" } self-end px-5 py-[10px] rounded-xl  font-Nunito text-sm flex justify-center items-center`}  onClick={createReport}>
           {
            isLoading ? <div className=" w-5 h-5 rounded-full animate-spin border-[1px] borders-solid border-white border-t-black"></div> : "Report"
           }
            </button>
     
   
          </motion.div>
        </div>
    )
}

export default ReportQuestion;