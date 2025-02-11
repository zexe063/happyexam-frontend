import { useSelector } from "react-redux"



function Progress({currentLength, totalLength}){


 
   
    const width =  currentLength*100 / totalLength;
    return(
        <div className={` w-full   mt-10 flex justify-center gap-5`}>
        
        
        <div className=" outline outline-border_grey outline-2 outline-offset-2 relative w-[calc(100%-30%)]  md:w-[calc(100%-40%)] rounded-full h-[10px] bg-progress_grey flex gap-2 justify-center items-center">
            <div className={`  absolute top-0 left-0 bg-progress_green  h-full rounded-full transition-all duration-100  ease-in-out`} style={{ width:`${width}%`}}></div>
        </div>
        <span className=" font-Nunito font-medium flex justify-center items-center relative bottom-2">{currentLength} / {totalLength}</span>
        </div>
       
    )
}

export default Progress