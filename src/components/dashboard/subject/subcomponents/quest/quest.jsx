
import { yellowLockIcon } from "../../../../../svgicon/icon";

function Quest(){
    return(
    <div className=" relative w-[300px] h-[100px] border-[2px] border-solid border-border_grey rounded-xl flex  items-center  gap-4 cursor-pointer pl-5">

        <div className="">
        {yellowLockIcon}
        </div>
        <div  className=" font-Nunito flex  flex-col gap-1 ">
            <p className=" text-[16px] ">Unlock Your Rank</p>
            <p className=" text-text_grey text-[12px]">0 of 200 HEP</p>
        </div>
    </div>
    )
}

export default Quest;