import { useDispatch, useSelector} from "react-redux";
import { HEPicon, OngoingStreak, QuestionAttempt } from "../../svgicon/icon";
import { useNavigate } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import {persistor} from "../../main"

function Profile(){
const user = useSelector((state)=>state.auth.user);
const navigate =  useNavigate()


    const Achievement = [
        {name:"HappyExam points", value:user.HEP, icon:HEPicon},
        {name:"Ongoing Streak", value:3, icon:OngoingStreak},
        {name:"Question Attempt", value:"233", icon:QuestionAttempt}
        
    ]
    async function HandleSignout(){
         await persistor.purge();
        window.location.href="/"
    }
  

    
    return(
        <section className=" relative w-full h-[calc(100vh-70px)] flex justify-center items-center overflow-x-hidden overflow-y-hidden mt-5">
       <div className=" w-[412px] md:w-[600px] h-full  flex  items-center flex-col gap-8">

        <div className=" relative w-[90%] h-[200px]  rounded-xl flex justify-center items-center" style={{backgroundColor:`${user.Avatar.bgcolor}`}}>
    <button className="w-[40px] h-[36px] rounded-xl shadow-grey_shadow border-[2px] border-solid border-border_grey bg-white  absolute right-3 top-2 flex justify-center items-center" onClick={()=>navigate("/avatar")}><MdEdit size={21}></MdEdit></button>

            <img src={`../Avatar/${user.Avatar.imageId}`} width={180} height={180}></img>
        </div>
        <div className=" font-Nunito text-base self-start border-b-[2px] border-solid border-border_grey w-[90%] p-2 py-4 ml-4">
            <p className=" font-semibold text-[15px]" >Murari sharma</p>
            <p className="text-[14px]"> Join at- <span> 03 December 2025</span></p>
        </div>

        <div className=" flex font-Nunito text-[22px]  flex-col gap-3 self-start ml-4">
            <p>Achievements</p>

            <div className="flex flex-wrap gap-3">
       {
    Achievement.map((item)=>{
        return(
            <div className=" w-[180px] h-[60px] rounded-xl border-[2px] border-solid border-border_grey flex gap-2 justify-center items-center py-8"  >
              <div>{item.icon}</div>
              <div className=" flex flex-col font-Nunito text-[14px]">
                <p className=" font-semibold">{item.value}</p>
                <p>{item.name}</p>
              </div>
            </div>
        )
    })
       }
            </div>
        </div>

        {/* her some seeting */}

        <div>
        <button className=" w-[300px] h-[48px] bg-background_black rounded-full text-white self-end" onClick={()=>HandleSignout()}>Signout</button>
        </div>
        </div>

        
        </section>
    )
}
export  default Profile;