
import {MotivateSectionSVG} from "./motivateSVG"

function MotivateSection(){
    return (
<div className="w-full h-[800px] z-10 border-solid  border-red-100 font-Nunito flex justify-center items-center flex-col  gap-[50px] bg-motivated_gradeint md:flex-row ">


         <div className="flex gap-5 flex-col mt-10 translate-x-[-10px] translate-y-5 md:translate-y-[-20px]  md:mt-0 md:justify-center md:items-center md:w-[50%]">
            <h1 className=" md:mr-2 text-[40px] md:w-[25vw] md:text-[72px] leading-[110%] font-semibold flex
              gap-2">Stay<span>motivated</span></h1>
               <p className=" w-[80vw] md:w-[25vw] md:text-[20px] text-[18px] leading-6 md:leading-7  tracking-wide md:tracking-wider">Finish every day smarter with engaging lessons, competitive features, and daily encouragement.</p>
             </div>

             <div className=" md:w-[50%] md:translate-x-0 md:tranlate-y-8">{MotivateSectionSVG}</div>


        </div>
    )
}

export default MotivateSection