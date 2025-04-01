
 import { PaymentSectionSVG } from "./paymentSVG"
function PaymentSection(){
    return(
 <div className="w-full h-[800px] z-10  border-solid  border-red-100 font-Nunito flex justify-center items-center flex-col  gap-[50px] bg-payment_gradeint md:flex-row-reverse ">
    
           <div className="flex gap-5 flex-col mt-10 translate-x-[-10px] translate-y-5 md:translate-y-[-20px]  md:mt-0 md:justify-center md:items-center md:w-[50%]">
                <h1 className=" text-[40px] md:w-[30vw] md:text-[72px] leading-[110%] font-semibold ">no premium<br/><span className=" text-payment">no payment</span></h1>
               <p className=" w-[80vw] md:w-[30vw] md:text-[20px] text-[18px] leading-6 md:leading-7  tracking-wide md:tracking-wider">This app is totaly free,nothing premium nothing payment just select class and language and reach to your destinatio</p>
             </div>
      
      
         <div className=" md:w-[50%]  md:translate-y-8">{PaymentSectionSVG}</div>
      
      
              </div>
    )
}
export default PaymentSection