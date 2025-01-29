
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { ExplanationOpenOrClose } from "../../../../happyexamReducer/happyexam";
import { compose } from "@reduxjs/toolkit";

function Explanation({data}){

  console.log(data)
  
  const dispatch = useDispatch();

    function handleExplanationClose(){
       dispatch(ExplanationOpenOrClose(false));
    }

    return(

        <div className="fixed w-full h-full inset-0  bg-black bg-opacity-50  flex justify-center items-center z-50 transition-all  duration-100 ease-in-out">

  <div className=" shadow-2xl bg-white w-[90%] md:w-[50%]  h-[60%] rounded-lg font-Nunito overflow-auto">

    <div className=" flex flex-col gap-5 p-5">

        <div className=" flex justify-between">
          <p className=" text-[18px] font-semibold text-text_explanation">Explaination:</p>
          <span className=" cursor-pointer"  onClick={handleExplanationClose}><IoClose  size={25} color="#407719"></IoClose></span>
        </div>

        <div className="  bg-explanation_green border-[3px] border-solid  border-border_explanation_green rounded-lg p-2  text-text_explanation text-[18px] font-medium tracking-wide text-start ">
         {data.explain}
        </div>
       
       <div>
       <p className=" text-[18px] font-semibold text-text_solution">Solution:</p>
       </div>
       <div className=" flex flex-col gap-5">
        {
          data.solution?.map((item)=>{
            return(
              <div className=" flex flex-col gap-1">
                <div className=" text-step_blue">Step {item.step} :-</div>
                <div className=" text-solution_blue flex flex-col  gap-2">
                  <div>{item.value.terms}</div>
                  <div dangerouslySetInnerHTML={{__html :item.value.diagram}}></div>
                  <div>{item.value.calculation}</div>
                </div>
              </div>
            )
          })
        }
       </div>

    </div>

  </div>

</div> // main parent div

    )
}
export default Explanation;