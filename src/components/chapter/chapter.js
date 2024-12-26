import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Chapter(){

    const chapter = useSelector((state)=>state.happyexam.chapter);
    const user = useSelector((state)=>state.happyexam.user);
    const navigate =useNavigate()

    function navigateLevel(){
  navigate("/subject/level");

  return;
    }

    return(
        <div className=" relative top-[100px] w-full h-full flex flex-col justify-center items-center gap-16">
            <div className="  flex flex-col font-Nunito  font-semibold">
           <div className=" text-[40px] tracking-wide">Chapter Path</div>
           <div className=" text-text_grey tracking-wide">Happy to Happy Complete Chapter</div>
            </div>

            <div className="  grid gap-10 justify-center items-center  grid-cols-2 md:grid-cols-5">
                {
 chapter?.map((item, index)=>{
    return(
        <div className=" flex  gap-[10px] flex-col justify-center">
            <div className=" font-Nunito text-text_grey ml-1">chap-{index+1}</div>
        <div key={index} className=" select-none flex justify-center  items-center  w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-white border-[2px] border-solid border-border_grey  rounded-xl shadow-grey_shadow active:shadow-none active:translate-y-[5px] transition-all duration-100 ease-in-out cursor-pointer font-Nunito text-[12px] md:text-[15px] " onClick={navigateLevel}> 
    Coming Soon
        </div>

       <div className="  flex justify-center items-center font-Nunito tracking-wide text-[12px] md:text-[15px]  w-[120px]">  {user.language ==="english" ?  item.english : item.hindi}</div>
        </div>
    )
 })
                }
            </div>
        </div>
    )
}

export default Chapter;