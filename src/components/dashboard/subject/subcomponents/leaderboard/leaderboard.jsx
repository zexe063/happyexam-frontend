import { useSelector } from "react-redux";
import { LeaderboardIcon, LeagueIcon } from "../../../../../svgicon/icon";




function LeaderBoard(){

    const user = useSelector((state)=>state.auth.user);
   
return (
    <section className=" w-[350px]  h-[440px] border-[2px] border-solid border-border_grey flex flex-col justify-center items-center rounded-2xl">
        <div className=" self-start flex gap-4 ml-8">
            {LeagueIcon}
            <p className=" font-Nunito flex justify-center items-center flex-col tracking-wide gap-[1px]">
           <span className="text-[12px] font-semibold">BURNING FIRE LEAGUE</span> <span className=" text-[12px] self-start text-coming_soon">Coming Soon</span>
           </p>

        </div>

        <div className=" mr-5">
            {LeaderboardIcon}
        </div>

      


<div className=" relative w-[90%] h-[55px]  rounded-2xl  bg-[#f7f7f7] flex items-center justify-between px-6">
        
        <div className=" flex items-center gap-5">
            <img className=" w-[48px] h-[48px] rounded-full inline-block"  src={`../Avatar/${user.Avatar.imageId}`} style={{backgroundColor:`${user.Avatar.bgcolor}`}} ></img>
             <p className=" text-[#AfAfaf] font-medium tracking-wide text-[15px] ">{user.Firstname}</p>
        </div>

           
             <p className=" text-[#AfAfaf] z-50">{user.HEP}</p>
      </div>
    </section>
)
}

export default LeaderBoard;