import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";



function Premium(){

    const navigate = useNavigate()
    const Loading = useSelector((state)=>state.happyexam.Loading)
    
    return(
        <>
      {Loading ? <Skeleton  width={350} height={150} borderRadius={16}></Skeleton> 

       :
       <section className=" w-[350px]  h-[150px]  bg-premium_gradient border-[2px] border-solid border-gray-200 flex flex-col justify-around items-center rounded-2xl">


<div className=" flex justify-center items-center gap-2 ml-3">
    
<img src="/icons/premiumHeart.svg" width={60} height={60}/>

 <p className=" font-NSupercharge your learning with Premiumunito text-[16px] font-medium">Supercharge your learning with Premium</p>

</div>

<button className=" w-[90%] h-[45px] bg-yellow-500 shadow-btn-yellow text-white font-semibold rounded-full text-[14px]" onClick={()=>navigate("/subscription")}>Unlock Premium</button>
 </section>
}
 </>

    
    )
}

export default Premium;
