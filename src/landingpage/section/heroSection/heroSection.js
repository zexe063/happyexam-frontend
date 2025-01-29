import { logoSectionSVG } from "./heroSvg"

function LogoSection(){
    return (
        <div className="w-full h-[600px] md:h-[600px] flex flex-col gap-5 justify-center items-center">
             <div><p className="  w-[250px]  h-[50px] border-[1px] border-solid border-border_grey  rounded-full flex justify-center items-center ">Indroducing happyexam</p></div> 

             <header className=" w-full flex justify-center items-center">
         {logoSectionSVG}
             </header>
            <div className=" w-full h-auto flex justify-center items-center flex-col  gap-5  relative top-[100px] md:top-0">
             <div className=" w-[80%] ml-10 justify-center flex items-center font-Nunito text-[20px]">We Offer 20000+ MCQ question for CBSE , BSEB  and more Boards </div>
             <div className=" w-[250px] h-[60px]  flex justify-center items-center text-white font-semibold sm:text-[15px] md:text-[20px] rounded-full bg-button_green shadow-green_button_shadow">Get Started</div>
            
             </div>
        </div>
    )   
}

export default LogoSection