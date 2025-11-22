
import { useSelector } from "react-redux"
import { Heart,UnlimitedHeart} from "../../../svgicon/icon";

function Progress({currentLength, totalLength, correctRow}){

const user = useSelector((state)=>state.auth.user);
const width =  currentLength*100 / totalLength;

    return(
        <div className={` sticky top-0 w-full h-[60px]  border flex justify-center  items-center gap-5`}>
        
        
        <div className="   relative w-[calc(100%-30%)]  md:w-[calc(100%-40%)] rounded-full h-[8px] bg-progress_grey flex gap-2 justify-center items-center">

            <div className={`  absolute top-0 left-0 bg-progress_green  h-full rounded-full transition-all  duration-[0.4s] ease-in-out flex justify-center items-center ]`} style={{ width:`${width}%`}}>

             {
             correctRow > 1 && 
             <div className=" absolute right-0 w-[64px] h-[20px] bg-green-600 rounded-full flex justify-center items-center font-Space_Grotesk font-medium text-white text-[12px]">{correctRow} in row</div>
             }
            </div>
             </div>


             {/* HERE THE HEART SYSTEM  */}

             <p className=" flex justify-center items-center gap-1">
                 {  user.isPremium ? 
                   <span>{UnlimitedHeart}</span> 
                   : 
                    <>
                  <span>{user.hearts}</span>
                  <span>{Heart}</span>  
                  </> 

                   }
             </p>
        
            </div>
       
    )
}

export default Progress