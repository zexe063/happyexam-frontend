import { useState } from "react"
import { IoClose } from "react-icons/io5"
import { useDispatch } from "react-redux"
import { ToggleReport } from "../../../../happyexamReducer/happyexam"
import { createReportQuestion } from "../../../../happyexamReducer/happyexam"


function ReportQuestion({questionId}){

    const ReportData = [
        {id:1, value:"Duplicate Question"},
        {id:2, value:"Wrong Question"},
        {id:3, value:"Explanation Wrong"},
        {id:4, value:"Explanation Not Clear"},
        {id:5, value:"Option Not Clear"}
        

    ]
    const dispatch = useDispatch()
    const [value,setvalue] = useState()
  


    function CreateReportHandle(e, id){
        setvalue({id:id, questionId:questionId, value:e.target.value})
    }
    return(
        <div className="fixed w-full h-full bg-black inset-0 bg-opacity-50   z-50 transition-all duration-100 ease-in-out flex justify-center items-center">

          <div className="  bg-white  w-[70%] md:w-[400px]  h-auto px-2 py-4 rounded-lg flex flex-col gap-2 ">

          <span className=" self-end inline-block" onClick={()=>dispatch(ToggleReport())}><IoClose  size={25} ></IoClose></span>

            <div className=" flex  flex-col gap-2 font-Nunito tetx-[15px] font-medium">
            {
                ReportData.map((item)=>{
                    return (
                    <div  key={item.id} className=" flex gap-3  items-center px-2">
                    <input type="checkbox" value={item.value} checked={value?.id  ===  item.id ? true : false } onClick={(e)=>CreateReportHandle(e,item.id)}></input>
                    <label >{item.value}</label>
                    </div>
                    )
                })
            }
            </div>
            
            <button className={`${!value ? "bg-check_grey shadow-grey_shadow text-check_text_grey border-border_grey" : " bg-button_green    shadow-check_next_green text-white " } self-end inline-block px-6 py-[8px] mr-4 rounded-full border-[1px] border-solid font-Nunito text-[15px] font-semibold`} onClick={()=>dispatch(createReportQuestion( value))}>Report</button>

          </div>
        </div>
    )
}

export default ReportQuestion;