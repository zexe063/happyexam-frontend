
import { subjectSectionSVG } from "./SubjectSVG";

function SubjectSection(){
    return(
        <div className="w-full h-[800px]   border-solid  border-red-100 font-Nunito flex justify-center items-center flex-col  gap-[50px] bg-subject_gradeint md:flex-row ">

             <div className="flex gap-5 flex-col mt-10 translate-x-[-10px] translate-y-5 md:translate-y-[-20px]   md:mt-0 md:justify-center md:items-center md:w-[50%]">
                <h1 className=" text-[40px] md:text-[72px] leading-[110%] font-semibold text-left">Boost your,<br/><span className=" text-confidence">confidence</span></h1>
               <p className=" w-[80vw] md:w-[25vw] md:text-[20px] text-[18px] leading-6 md:leading-7  tracking-wide md:tracking-wider">Freedom from pressure,winning in concepts,Explore the Subject and Happy at Exam</p>
             </div>

             <div className=" md:w-[50%] translate-x-[50px] md:translate-x-0 md:translate-y-8">{subjectSectionSVG}</div>


        </div>
    )
}

export default SubjectSection;