import { FaInstagram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { TiHeart } from "react-icons/ti";


function Footer(){
    return(
        <footer className="   w-full bg-footer m-auto h-[600px] text-footer_text overflow-hidden">
        

                <div className=" w-full h-full flex flex-col   justify-around  ml-5">
                <div className="font-Nunito font-semibold text-[20px]">
                HappyExam
            </div>

            <div className="  flex  flex-col md:flex-row   md:justify-end   md:mr-[300px] gap-[60px] font-Nunito ">
                <div >
                    <div className=" text-[18px]  font-semibold font-Nunito leading-tight ">Product</div>
                <ul className="flex gap-[3px] flex-col">
                    <li>Subject</li>
                    <li>Chapter</li>
                    <li>Level</li>
                    <li>Question</li>
                    <li>Help</li>
                </ul>
                </div>

                <div>
                   <div className=" text-[18px] font-semibold font-Nunito  leading-tight">Company</div>
                   <ul className=" flex flex-col gap-[3px]">
                    <li>About us</li>
                    <li>Terms and conditions</li>
                    <li>Privacy and Policy</li>

                   </ul>
                </div>

                <div>
                    <ul className="flex gap-5 text-[20px] md:text-[40px]">
                       
                        <li><FaInstagram color="black" ></FaInstagram></li>
                        <li><FaXTwitter color="black" ></FaXTwitter></li>
                        <li><FiYoutube color="black" ></FiYoutube></li>
                    </ul>
                </div>


            </div>

<div className=" flex gap-2">  Made with <span className=" flex justify-center items-center"><TiHeart color="red"></TiHeart> </span>in  India</div>
           
</div>
        </footer>
    )
}

export default Footer;