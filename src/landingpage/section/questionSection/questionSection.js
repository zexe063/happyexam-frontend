import { QuestionEngSVG, QuestionHinSVG } from "./QuestionSVG"

function QuestionSection(){
    return(
        <div className = " w-full h-[800px] md:h-[800px] flex flex-col border-t-[2px] border-solid border-border_grey gap-[50px]">
           
           <div className=" flex flex-col  relative top-[150px]  md:top-0">
                <div className="  font-Nunito  text-[32px] md:text-[64px] font-semibold flex items-center justify-center ">Blingual Language</div>
                <div className=" font-Nunito text-[15px] w-[60%] md:w-[100%] relative left-[80px] md:left-0 font-medium flex justify-center items-center"> Question are available in Both Hindi as Well as English
                </div>
            </div>
<div className="w-full h-full justify-around items-center flex relative ">
            <div>{QuestionEngSVG}</div>
            <div >{QuestionHinSVG}</div>
            </div>

        </div>
    )
}



export default QuestionSection