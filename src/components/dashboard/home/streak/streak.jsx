

function Streak(){

    const   week = [
        { id:1,value:"M", checkIn:true}, 
        { id:2,value:"T", checkIn:true},
        { id:3,value:"W", checkIn:false},
        { id:4,value:"Th", checkIn:false},
        { id:5,value:"F", checkIn:false},
       
    ]
    return(
 <div className=" w-[100vw] md:w-[350px]  flex justify-around   md:h-fit md:border-[2px] md:border-solid md:border-border_grey md:gap-4 p-3  md:py-5 rounded-xl">
  {
    week.map((item)=>{
    return <div className=" flex  justify-center items-center  flex-col gap-1">
      <div className=" w-[48px] h-[48px] border-[2px] border-solid border-border_grey rounded-full flex justify-center items-center">{item.checkIn ? StreakChecked : StreakUnchecked}</div>
    <p>{item.value}</p>
    
    </div>
    })
  }
 </div>
    )
}

export default Streak;
