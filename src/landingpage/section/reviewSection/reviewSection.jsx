
import { reviewdata } from "./data";
import { FaRegUserCircle } from "react-icons/fa";
function ReviewSection(){

    return(
        <div className = " w-full h-[1200px] border-t-[2px] border-solid border-border_grey flex flex-col  items-center gap-5 ">
            <div className="flex flex-col justify-center items-center font-Nunito mt-5">
                <p className=" font-semibold text-[32px]">Join happyExam</p>
                <p className ="font-medium text-[16px]">Know What Our Student  get Experience in Exam</p>
            </div>
             <div className=" grid grid-cols-2 md:grid-cols-3 gap-5 ">
                {
                    reviewdata?.map((item)=>{
                        return(
                           
                            <div key={item.id} className=" w-[150px]  md:w-[250px]   p-4 bg-review_grey border-[2px] border-solid border-review_border rounded-xl flex flex-col items-center ">
                             <div className=" flex items-center gap-2 ">
                                <FaRegUserCircle></FaRegUserCircle>
                                <div className=" text-[10px] md:text-[15px] font-medium ">{item.name}</div>
                             </div>
                             <div className=" font-Nunito  text-[10px] md:text-[16px]">{item.review}</div>
                            </div>
                            
                        )
                    })
                }
            </div>  






        </div>
    )
}

export default ReviewSection;