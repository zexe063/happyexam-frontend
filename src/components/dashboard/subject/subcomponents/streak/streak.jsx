
  import { color } from "motion/react";
import { StreakFire,  StreakCharacter, FaCheck } from "../../../../../svgicon/icon";

function Streak(){

    const   week = [
        { id:1,value:"M", checkIn:true}, 
        { id:2,value:"T", checkIn:true},
        { id:3,value:"W", checkIn:true},
        { id:4,value:"Th", checkIn:false},
        { id:5,value:"F", checkIn:false},
        { id:6,value:"S", checkIn:false},
        { id:7,value:"Su", checkIn:false}
    ]
    return(
      <div className=" relative flex flex-col gap-5  w-[calc(100vw-50px)] h-[180px] md:w-[450px] md:h-[220px] font-Nunito bg-streak_background rounded-xl">

      <div className=" flex justify-between  py-[10px] md:py-5">
        <div className=" relative top-3 left-3">{StreakFire}</div>

    <div className=" flex flex-col justify-center ">
        <h1 className=" text-streak_yellow text-[18px]">Solve 2 quetsion</h1>
        <h1 className="  text-streak_grey text-[12px]">way to go !!</h1>
     </div>

     <div>{StreakCharacter}</div>
      </div>


{/* here week map */}

<div className=" flex justify-around">
    {
     week.map((item, index)=>{
        return (
        <div key={item.id} className=" flex flex-col gap-2  justify-center  items-center">
           <div className={` w-[20px] h-[20px] md:w-[30px]  md:h-[30px] flex  justify-center items-center rounded-full ${item.checkIn ? "bg-check_background_yellow" :"bg-check_background_grey"}`}>
        <FaCheck colorValue={item.checkIn? "#90F339" : "#B59999"}></FaCheck>
           </div>
           <h2 className=" text-[13px] font-semibold text-streak_grey">{item.value}</h2>
        </div>
        )
     })
    }
</div>

       </div>
    )
}

export default Streak;
