import { HEPicon } from "../../../../svgicon/icon";


function Streak(){

    const   week = ["Mon","Tue","Wed", "Thu", "Fri","Sat","Sun"]
    return(
       <div className=" w-[350px] h-[150px] md:w-[450px] md:h-[250px]  border-[1px] border-solid border-border_grey rounded-xl ">
        <div className=" font-Nunito absolute md:mt-5 md:ml-5 md:text-[20px]   ml-5 mt-2">
            Solve <span className=" font-semibold  ">2 Levels</span> to  start streak
        </div>

        <div className=" w-full h-full flex  justify-around items-center">
            {
                week.map((item, index)=>{
                    return(
                        <div  key={index} className=" flex flex-col gap-2 justify-center items-center">
                      <div className=" w-[40px] h-[40px]   border-[1px] border-solid border-border_grey rounded-full flex justify-center items-center" > {HEPicon} </div>
                      <div className=" font-Nunito font-semibold"> {item} </div>
                        </div>
                    )
                })
            }
        </div>
       </div>
    )
}

export default Streak;
