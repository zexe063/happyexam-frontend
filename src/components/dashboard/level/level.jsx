import { useEffect, useRef, useState } from "react";
import { LockIcon, LeftwingIcon, RightwingIcon } from "../../../svgicon/icon"
import ClipLoader from "react-spinners/ClipLoader";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLevel, getQuestion } from "../../../happyexamReducer/happyexam";
import Error from "../../error/error";



function Level() {

    const level = useSelector((state) => state.happyexam.level);
    const Loading = useSelector((state) => state.happyexam.Loading);
    const user = useSelector((state)=>state.auth.user)
    const mounted = useRef(false)
    const location = useLocation()

    const startX = window.innerWidth / 2;
    const startY = 150;
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
                flex items-center justify-center"> <ClipLoader ></ClipLoader></div>): level?.length === 0  ? (<Error></Error>)
                 
                :<div className="   relative top-[100px] flex flex-col justify-center items-center">
                    <div></div>

                    {/* here the level content start */}
                    <div className=" w-full  relative h-auto flex flex-col gap-5 justify-center items-center">

                        {
                            level?.map((item, index) => {

                                return (

                                    <div key={item._id} className=" flex   justify-center  items-center  cursor-pointer select-none " style={{
                                        position: "absolute",
                                        top: `${startY * index}px`,
                                        left: (index + 1) % 2 === 0 ? `${startX + 0}px` : `${startX - 100}px`
                                    }} onClick={() => navigatQuestion(item.level_number)} >

                                        <div>{LeftwingIcon}</div>
                                        <div className={`   w-[80px] h-[80px] rounded-full flex flex-col gap-1 justify-center items-center  bg-level_grey shadow-level_shadow active:shadow-none  active:translate-y-[8px] transition-all duration-100 ease-in-out`} id="level" >
                                            <div>  {LockIcon}</div>
                                            <div className=" font-Nunito text-[10px] text-check_text_grey">Level {item.level_number}</div>
                                        </div>

                                        <div>{RightwingIcon}</div>

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


