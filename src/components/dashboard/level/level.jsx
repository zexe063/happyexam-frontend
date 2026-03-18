import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { persistor } from "@/main";
import LottieLoading from "@/loading/loading";

import { toastError } from "@/config/toast";
import { getLevel, getQuestion } from "@/happyexamReducer/happyexam";
import NetworkError from "../../error/NetworkError";
import ServerError from "../../error/ServerError";



function Level() {

    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const location = useLocation()


    const user = useSelector((state)=>state.auth.user)
    const level = useSelector((state) => state.happyexam.level);
    const Loading = useSelector((state) => state.happyexam.Loading);
    const isNetworkError = useSelector((state)=>state.happyexam.isNetworkError);
    const isServerError = useSelector((state)=>state.happyexam.isServerError);

    const startX = 206
    const startY = 110;
    const chapter = level[0];


    useEffect(()=>{
        if( !location?.state?.isClick){
            dispatch(getLevel(params)).then(async(action)=>{
                if(action.payload.status !==200) {
                    const Logout = await persistor.purge();
                    if(Logout) return window.location.href =  '/'
                }
            })
        }
    },[])


    function navigateQuestion(level_number) {

        dispatch(getQuestion({ class_name: params.class_name, subject_name: params.subject_name, chapter_name: params.chapter_name, level_name: level_number }))
        navigate(`/course/${params.class_name}/${params.subject_name}/${params.chapter_name}/${level_number}`, {state:{isClick:true}});
        return;
        
    }


    function HandleRetry(){
      dispatch(getLevel(params)).then(async(action)=>{
                if(action.payload?.data?.code) {
                    toastError(action.payload?.data.message);
                    setTimeout(async()=>{
                     const Logout = await persistor.purge();
                    if(Logout) return window.location.href =  '/'
                    },1000)
                }
            })
    }


    return (

       <>
        {
            Loading ? 
            (<div className=" relative w-full  h-screenflex items-center justify-center"><LottieLoading></LottieLoading> </div>)
            :
            isNetworkError ? <NetworkError HandleRetry={HandleRetry} /> 
            :
            isServerError ? <ServerError HandleRetry={HandleRetry} /> :

            <div className=" w-full h-[calc(100vh-70px)] flex flex-col md:flex-row  gap-10 py-5">

                <div className="md:flex-1  flex justify-center md:justify-end items-start">

                     <div className="  flex flex-col gap-3 justify-center items-center md:justify-start md:items-start md:border-[2px] md:border-solid md:border-gray-200 px-10 py-8 rounded-xl">
                        <img src={chapter?.chapter_image} width={80} height={80}></img>

                        <p  className=" text-lg font-semibold">{user?.userPreference?.language ==="english" ? chapter?.chapter_name?.english : chapter?.chapter_name?.hindi}</p>

                        <p className=" text-sm text-gray-400 max-w-[300px] text-center md:text-start">{user?.userPreference?.language ==="english" ? chapter?.chapter_title?.english : chapter?.chapter_title?.hindi}</p>

                        <div className=" flex justify-center items-center text-sm gap-2">

                         <div className=" flex gap-2 justify-center items-center"> 
                            <img src="/icons/lessons.svg" width={20} height={20}/>
                            <span>{level?.length} Lessons</span>
                            </div>

                             <div className=" flex gap-2 justify-center items-center"> 
                            <img src="/icons/questions.svg" width={18} height={18}/>
                            <span>{level?.length*10} Question</span>
                            </div>

                             </div>

                              
                     </div>

                </div>

                <div className="md:flex-1  md:overflow-auto">
                     
                    <div className=" relative w-full">
                        {
                    level?.map((item,index)=>{
                    return(
                        
                        <div key={item._id} id="item._id" style={{
                            position:"absolute",
                            top:`${startY*index}px`,
                             left:(index % 4) + 1 === 2 ? `${startX-80}px` :  (index % 4) + 1 === 4 ? `${startX+80}px` :  `${startX+0}px`,
                             transform:"translate(-50%)",
                            cursor:"pointer"

                        }}  onClick={()=>navigateQuestion(item.level_number)}>
                      
                    {
                    item.isCompleted ? 
                      <img src="/icons/levelCompleted.svg" width={96} height={96}></img> : 

                      item.isSolveable   ?   <img src="/icons/levelSolve.svg" width={96} height={96}/>

                      :   <img src="/icons/levelNormal.svg" width={96} height={96}/>
                       }
    
                        </div>
                    )
                    
                    })
                        }

                    </div>


                 </div>
            </div>
                
        }
  </>
    )
}

export default Level;



