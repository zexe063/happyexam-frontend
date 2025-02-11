


import { ServerError } from "./Icon"

function Error(){
return(
    <div className=" relative  w-full h-full  flex flex-col justify-center items-center gap-2 overflow-hidden">
        <div>{ServerError}</div>
        <div className=" flex flex-col gap-2  font-Nunito font-semibold text-[16px]">
            <p>opps ! Our Server Failed!!</p>
            <button className=" border-none bg-button_yellow p-3 rounded-lg  shadow-button_yellow">Go back</button>
        </div>    </div>
)
}

export default Error;
