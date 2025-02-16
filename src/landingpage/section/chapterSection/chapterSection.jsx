import { ChapterSectionSvg } from "./ChapterSVG";

function ChapterSection(){
    return(
        <div className="w-full h-[600px] md:h-[600px]  border-t-2  border-solid  border-border-grey  flex flex-col md:flex-row-reverse   justify-between items-center">


            <div className=" flex flex-col  relative top-[150px] ">
                <div className="  font-Nunito  text-[32px] md:text-[64px] font-semibold flex items-center justify-center ">Graph Your Chapter</div>
                <div className=" font-Nunito text-[15px] w-[60%] relative left-[80px] md:left-0 font-medium flex justify-center items-center">Freedom from pressure , winning in concepts , Explore the Subject and Happy at Exam
                </div>
            </div>

            <div className=" w-full flex  justify-center items-center md:justify-end relative  md:top-[100px] md:right-[350px]">
                {ChapterSectionSvg}
            </div>
            
        </div>
    )
}

export default ChapterSection;