import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";

function LeaderBoard(){

  const user = useSelector((state)=>state.auth.user);
  const Loading = useSelector((state)=>state.happyexam.Loading)

return (

    <>
    {
         Loading? <Skeleton width={360} height={400} borderRadius={16}></Skeleton> : 
    <section className=" w-[360px] max-w-[400px]  h-[440px] border-[2px] border-solid border-border_grey flex flex-col justify-center items-center rounded-2xl">
        <div className=" self-start flex gap-4 ml-8">
            <img src="/icons/league.svg" width={60} height={60}/>
            <p className=" font-Nunito flex justify-center items-center flex-col tracking-wide gap-[1px]">

           <span className="text-[12px] font-semibold">BURNING FIRE LEAGUE</span>
           
            <span className=" text-[12px] self-start text-coming_soon">Coming Soon</span>
           </p>

        </div>

        <div className=" mr-5">
           <img src="/icons/leaderboard.svg" width={300} height={300}/>
        </div>

      


<div className=" relative w-[90%] h-[55px]  rounded-2xl  bg-[#f7f7f7] flex items-center justify-between px-6">
        
        <div className=" flex items-center gap-5">
            <img className=" w-[48px] h-[48px] rounded-full inline-block"  src={`/avatar/${user?.avatar?.id}.svg`} style={{backgroundColor:`${user?.avatar?.bgcolor}`}} ></img>
             <p className=" text-[#AfAfaf] font-medium tracking-wide text-[15px] ">{user?.first_name}</p>
        </div>

           
             <p className=" text-gray-400 z-50">{user.HEP}</p>
      </div>
    </section>
}
    </>
)
}

export default LeaderBoard;