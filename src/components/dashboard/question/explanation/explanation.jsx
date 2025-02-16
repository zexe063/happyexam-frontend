
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { ExplanationOpenOrClose } from "../../../../happyexamReducer/happyexam";


function Explanation({data}){

  const user = useSelector((state)=>state.auth.user)

  const dispatch = useDispatch();
    function handleExplanationClose(){
       dispatch(ExplanationOpenOrClose(false));
    }

    return(

        <div className="fixed w-full h-full inset-0  bg-black bg-opacity-50  flex justify-center items-center z-50 transition-all  duration-100 ease-in-out">

  <div className=" shadow-2xl bg-white w-[90%] md:w-[50%]  h-[60%] rounded-lg font-Nunito overflow-auto" >

    <div className=" flex flex-col gap-5 p-5">



          
            <div className=" flex justify-between">
            <p className=" text-[18px] font-semibold">{data.explanation ? "Explanation" : "Solution"}</p>
            <span className=" cursor-pointer"  onClick={handleExplanationClose}><IoClose  size={25} color="#407719"></IoClose></span>
          </div>

       {
      data.explanation  ?
        <div className="  p-2  text-[18px] font-medium trackWing-wide text-start ">
           {user.language === 'english' ? data.explanation.english : data.explanation.hindi}
          </div> 
          :  
           <div className=" flex flex-col gap-5">
          {
            data.solution?.map((item)=>{
              return(
                <div className=" flex flex-col gap-1">
                  <div className=" font-semibold">Step {item.step} :-</div>
                  <div className=" font-medium flex flex-col  gap-2">
                    <div>{item.value.terms}</div>
            
                    <div>{item.value.calculation}</div>
                  </div>
                </div>
              )
            })
          }
         </div>

       }
        
       
     

    </div>

  </div>
 
</div> // main parent div

    )
}
export default Explanation;