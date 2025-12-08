import { FaInstagram, FaTwitter, FaXTwitter, FaYoutube} from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { TiHeart } from "react-icons/ti";


function Footer(){
    return(
        <footer className="   w-full bg-blue-A50 m-auto h-[600px] text-blue-900 overflow-hidden">
        

                <div className=" w-full h-full flex flex-col   justify-around  ml-5 px-2">
                <div className="font-Nunito font-semibold">
                HappyExam
            </div>

            <div className="  flex  flex-col md:flex-row   md:justify-center  md:items-center  gap-[60px] font-Nunito ">
                 <div className=" flex flex-col gap-4">
                   <p className=" text-lg font-semibold font-Nunito  leading-tight">Follow</p>
                   <ul className=" flex flex-col gap-[3px] cursor-pointer">
                    <li ><a className=" flex  items-center gap-2"><FaInstagram size={20} />Instagram</a></li>
                    <li><a className="flex  items-center gap-2"> <FaTwitter  size={20} />twitter</a></li>
                     <li><a className="flex  items-center gap-2"> <FaYoutube  size={20} />Youtube</a></li>

                   </ul>
                </div>

                <div className=" flex flex-col gap-4">
                   <p className=" text-lg font-semibold font-Nunito  leading-tight">Company</p>
                   <ul className=" flex flex-col gap-[3px] cursor-pointer">
                    <li><a href="/about-us">About us</a></li>
                    <li><a href="/terms-and-conditions">Terms and conditions</a></li>
                    <li><a href="/privacy">Privacy and Policy</a></li>

                   </ul>
                </div>
                <div><p>Contact us: <a href="mailto:support@happyexam.in" className=" font-semibold cursor-pointer">support@happyexam.in</a></p></div>

          
            


            </div>

<div className=" flex gap-2">  Made with <span className=" flex justify-center items-center"><TiHeart color="red"></TiHeart> </span>in  India</div>
           
</div>
        </footer>
    )
}

export default Footer;