import { reviewdata } from "./data";


import { FaRegUserCircle } from "react-icons/fa";
function TestimonialsSection(){

    return(
        <div className = " w-full h-auto white border-[5px] border-solid border-border_grey  p-5 ">
        <div className=" relative w-full h-full flex flex-col md:flex-row gap-5 justify-center items-center" >
            {
               reviewdata.map((item,index)=>{
              
               
                return (
                  
                   <main   key={item.id} className=" w-[350px] h-[450px] border-[1px] border-[#e5e5e5] flex flex-col rounded-xl font-Nunito text-[16px] p-2">
                      <div className=" w-full h-[80vh] flex items-center justify-center font-semibold "><span className="">{item.review}</span></div>

                      <div className=" w-full h-[30vh]  border-t-[1px] border-solid border-border_grey  flex gap-2 p-5 ">
                        <span><img src={item.profile} width={50} height={50} className=" rounded-full"></img></span>
                        <span className=" flex justify-start items-start">{item?.name}</span>
                     </div>
                   </main>
                )
            })
            
            }
            {

            }
        </div>   
        

        </div>
    )
}

export default TestimonialsSection;