import { useSelector } from "react-redux"



function Progress({currentLength, totalLength}){


 
   
    const width =  currentLength*100 / totalLength;
    return(
        <div className={` sticky top-0 w-full h-[60px]  border flex justify-center  items-center gap-5`}>
        
        
        <div className="   relative w-[calc(100%-30%)]  md:w-[calc(100%-40%)] rounded-full h-[12px] bg-progress_grey flex gap-2 justify-center items-center">
            <div className={`  absolute top-0 left-0 bg-progress_green  h-full rounded-full transition-all  duration-[0.4s] ease-in-out flex justify-center items-center ]`} style={{ width:`${width}%`}}></div>
             </div>
        
            </div>
       
    )
}

export default Progress