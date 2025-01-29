
import { subjectSectionSVG } from "./SubjectSVG";

function SubjectSection(){
    return(
        <div className="w-full h-[600px] md:h-[600px]  border-t-2  border-solid  border-border-grey  flex flex-col md:flex-row   justify-between items-center">
             <div className=" flex flex-col  relative top-[150px]  md:top-0 md:left-[100px]">
                <div className="  font-Nunito  text-[32px] md:text-[64px] font-semibold flex items-center justify-center ">Boost Your Confidence</div>
                <div className=" font-Nunito text-[15px] w-[60%] relative left-[50px] md:left-0 font-medium flex justify-center items-center">Freedom from pressure , winning in concepts , Explore the Subject and Happy at Exam
                </div>
            </div>
            
            <div className=" w-full flex  justify-center items-center md:justify-end mr-[60px] md:mt-[50px] md:mr-5 ">
                {subjectSectionSVG}
            </div>
        </div>
    )
}

export default SubjectSection;