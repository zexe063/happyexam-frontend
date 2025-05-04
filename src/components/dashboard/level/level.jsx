import { useEffect, useRef, useState } from "react";
import { LockIcon, LockIconBlue} from "../../../svgicon/icon"
import LottieLoading from "../../../loading/loading";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLevel, getQuestion } from "../../../happyexamReducer/happyexam";
import Error from "../../error/error";



function Level() {

    console.log(LockIcon)

    const level = useSelector((state) => state.happyexam.level);
    const Loading = useSelector((state) => state.happyexam.Loading);
    const user = useSelector((state)=>state.auth.user)
    const mounted = useRef(false)
    const location = useLocation()

    const startX = window.innerWidth / 2;
    const startY = 130;
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()

    if(!user.id){
        navigate("/")
       }

    useEffect(()=>{
        if(!mounted.current && !location?.state?.isClick){
            dispatch(getLevel(params))
            mounted.current = true;
        }
    },[])


    function navigatQuestion(levelId) {
        dispatch(getQuestion({ classId: params.classId, subjectId: params.subjectId, chapterId: params.chapterId, levelId: levelId }))
        navigate(`/${params.classId}/${params.subjectId}/${params.chapterId}/${levelId}`, {state:{isClick:true}});
        return;
        
    }



    return (

       <>
        {
            Loading ? (<div className=" relative w-full  h-screen
                flex items-center justify-center"><LottieLoading></LottieLoading> </div>)
                :<div className="   relative top-[100px] flex flex-col justify-center items-center">
                    <div></div>

                    {/* here the level content start */}
                    <div className=" w-full  relative h-auto flex flex-col  justify-center items-center">

                        {
                            level?.map((item, index) => {

                                return (

                                    <div key={item._id} className=" flex   justify-center  items-center  cursor-pointer select-none " style={{
                                        position: "absolute",
                                        top: `${startY * index}px`,
                                        left: (index + 1) % 2 === 0 ? `${startX + 0}px` : `${startX - 100}px`
                                    }} onClick={() => navigatQuestion(item.level_number)} >

                                       
                                        <div className=" flex justify-center items-center flex-col">
                                            <div>  { index === 0  ?LockIconBlue(index+1) :  LockIcon( index+1)}</div>
                                            </div>

                                      

                                    </div>
                                )
                            })
                        }

                    </div>
                </div>

        }
  </>
    )
}

export default Level;


