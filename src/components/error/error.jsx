




function Error({HandleRetry}){
    
return(
    <div className=" relative  w-full h-[calc(100vh-70px)] flex flex-col items-center justify-center">

           <div className=" flex flex-col gap-4 pb-14">
            <img src="/servererror.svg" width={180} height={150}></img>
            <div className=" font-Nunito text-sm flex flex-col justify-center items-center gap-2">
                <span className=" font-semibold text-[20px]"> Server Error</span>
                <span>server error please try again letter</span>

                </div>
            </div> 
         <button  className="absolute bottom-8 w-[300px] h-[45px] bg-background_black shadow-black rounded-full font-Nunito text-white" onClick={()=>HandleRetry()}>Retry</button>
        </div>
)
}

export default Error;


