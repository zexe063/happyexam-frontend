

import { LevelSectionSVG } from "./LevelSVG";

function LevelSection(){
    return(
        <div className="w-full h-[600px] md:h-[600px]  border-t-2  border-solid  border-border-grey  flex flex-col md:flex-row    justify-between items-center">
            <div className=" flex flex-col  relative top-[150px]  md:top-0 md:left-[100px]">
                <div className="  font-Nunito  text-[32px] md:text-[64px] font-semibold flex items-center justify-center ">Fire At Level</div>
                <div className=" font-Nunito text-[15px] w-[60%] relative left-[100px] md:left-[50px] font-medium flex justify-center items-center"> start to build confidence , win in concepts , select level and fire your Knowledge</div>
            </div>
            <div className=" w-full flex  justify-center items-center md:justify-end mt-[150px] md mr-[60px] md:mt-[50px] md:mr-5 ">
                {LevelSectionSVG}
            </div>
        </div>
     
    )
}

export default LevelSection;