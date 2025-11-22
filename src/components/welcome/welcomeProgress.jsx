import { GrFormPrevious } from "react-icons/gr";

function WelcomeProgess({currentLength, totalLength, correctRow}){

    const width =  currentLength*100 / totalLength;
    
    return(
           <div className={` sticky top-0 w-full h-[50px]   flex justify-center  items-center gap-2`}>
              
                
                <div className="   relative w-[80%]  md:w-[calc(100%-40%)] rounded-full h-[8px] bg-progress_grey flex gap-2 justify-center items-center">
                    <div className={`  absolute top-0 left-0 bg-progress_green  h-full rounded-full transition-all  duration-[0.4s] ease-in-out flex justify-center items-center ]`} style={{ width:`${width}%`}}>
                        {correctRow > 1 &&  <div className=" absolute right-0 w-[64px] h-[20px] bg-green-600 rounded-full flex justify-center items-center font-Space_Grotesk font-medium text-white text-[12px]">{correctRow} in row</div>}
                    </div>
                     </div>
        
        
                    
                
                    </div>
    )
}

export default WelcomeProgess