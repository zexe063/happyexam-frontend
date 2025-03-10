

import { IoLogoGooglePlaystore } from "react-icons/io5";
import { RiAppleLine } from "react-icons/ri";
function PathSection(){
    return(
        <div className=" w-full h-[600px]  bg-path_bg ">
            

            <div className=" w-full h-full flex flex-col   items-center justify-center gap-[50px]">
                <div className=" flex flex-col justify-center items-center text-white">
                    <p className=" font-Nunito font-semibold text-[48px] md:text-[64px]">Start Your Exam</p>
                    <p className=" font-Nunito font-medium text-[16px]">10000+ student are Happy at Exam</p>
                </div>
                
                <div className=" w-[250px] h-[60px]  flex justify-center items-center text-white font-semibold sm:text-[15px] md:text-[20px] rounded-full bg-button_green shadow-green_button_shadow">Get Started</div>

                <div className=" flex  gap-5">
                  
                    <div className=" w-[180px] md:w-[200px] h-[60px] rounded-xl bg-donwload_button shadow-download_shadow text-white font-Nunito border-[1px] border-solid border-download_border  flex  justify-center items-center gap-5">
                    <IoLogoGooglePlaystore size="20"></IoLogoGooglePlaystore>
                <div> 
                <p>Download</p>
                <p>Cooming Soon</p>
                </div>
                    </div>

                    <div className=" w-[180px] md:w-[200px] h-[60px] rounded-xl bg-donwload_button shadow-download_shadow text-white font-Nunito border-[1px] border-solid border-download_border flex gap-5 justify-center items-center">
                        <RiAppleLine size="20"></RiAppleLine>
                    <div>
                    <p>Download</p>
                    <p>Cooming Soon</p>
                    </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}
export default PathSection;