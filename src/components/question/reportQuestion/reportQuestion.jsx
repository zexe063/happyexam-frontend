import { useState } from "react"
import { useDispatch } from "react-redux"
import { IoClose } from "react-icons/io5"
import { ToggleReport } from "@/happyexamReducer/happyexam"
import { createReportQuestion } from "@/happyexamReducer/happyexam"
import { toastSucess, toastError } from "@/config/toast"

function ReportQuestion({questionId}){

    const ReportData = [
        {id:1, value:"Duplicate Question"},
        {id:2, value:"Wrong Question"},
        {id:3, value:"Explanation Wrong"},
        {id:4, value:"Explanation Not Clear"},
        {id:5, value:"Option Not Clear"}
        

    ]
    const dispatch = useDispatch()
    const [value,setvalue] = useState([])
    const [isLoading, setIsLoading] = useState(false);

  function Handlevalue(e){
    
setvalue((prev)=>value.includes(e.target.value) ? value.filter((item)=>   item !==e.target.value) : [...prev, e.target.value]);

  }
  
    function createReport(){
          setIsLoading(true)
        const ReportValue = {questionId:questionId, value:value};
        dispatch(createReportQuestion(ReportValue)).then((action)=>{
            setIsLoading(false)
             if(action.payload.status === 200) return toastSucess(action.payload?.data?.message, "top-right");
             else return toastError(action.payload?.data?.message, "top-right")
        })
    
    }
    
    return(
        <div className="fixed w-full h-full bg-black inset-0 bg-opacity-50   z-50 transition-all duration-100 ease-in-out flex justify-center items-center font-Nunito">

          <div className="  bg-white  w-[80%] md:w-[400px]  h-auto px-2 py-4 rounded-lg flex flex-col gap-2 ">

          <span className=" self-end inline-block cursor-pointer" onClick={()=>dispatch(ToggleReport(false))}><IoClose  size={25} ></IoClose></span>

            <div className=" flex  flex-col gap-2 font-Nunito tetx-[15px] font-medium">
            {
                ReportData.map((item)=>{
                    return (

                    <div  key={item.id} className=" flex gap-3  items-center px-2">
                    <input  className=" cursor-pointer" type="checkbox" value={item.value}  onClick={(e)=>{Handlevalue(e)}}></input>
                    <label >{item.value}</label>
                    </div>
                    )
                })
            }
            </div>
            
            <button  disabled={!value?.length || isLoading} className={`${!value?.length? "  bg-black/5 text-gray-400 cursor-not-allowed" : "bg-black shadow-btn-black text-white cursor-pointer" } self-end px-6 py-[8px] mr-4 rounded-full  font-Nunito text-sm flex justify-center items-center`}  onClick={createReport}>
           {
            isLoading ? <div className=" w-5 h-5 rounded-full animate-spin border-[1px] borders-solid border-white border-t-black"></div> : "Report"
           }
            </button>
     
          </div>
        </div>
    )
}

export default ReportQuestion;