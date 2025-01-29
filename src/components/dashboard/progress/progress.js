import { useSelector } from "react-redux"



function Progress({currentLength, totalLength}){


    const height = useSelector((state)=>state.happyexam.height);
    console.log(height)
    const width =  currentLength*100 / totalLength;
    return(
        <div className={` w-full h-[${height}]  mt-10 flex justify-center gap-5`}>
        
        
        <div className=" relative w-[calc(100%-30%)]  md:w-[calc(100%-40%)] rounded-full h-[20px] bg-progress_grey">
            <div className={`  absolute top-0 left-0 bg-progress_green  h-full rounded-full transition-all duration-100  ease-in-out`} style={{ width:`${width}%`}}></div>
        </div>
        <span className=" font-Nunito">{currentLength} / {totalLength}</span>
        </div>
       
    )
}

export default Progress