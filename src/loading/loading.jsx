 import Lottie from "lottie-react"
 import loadingJson from "./loading.json"
 

function LottieLoading(){
    return(
<div className="w-full h-screen flex items-center justify-center">
    <Lottie animationData={loadingJson} loop={true}  autoPlay={true} className=" w-[300px] h-[300px]" >   </Lottie>
    </div>
    )
}

export default LottieLoading