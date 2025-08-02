
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useRef, useState} from "react";
import Quest from "./subcomponents/quest/quest";
import Streak from "./subcomponents/streak/streak";

 import { getChapter, getSubject } from "../../../happyexamReducer/happyexam";
 import Error from "../../error/error";
  import {useLocation, useNavigate, useParams} from 'react-router-dom'
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/effect-cards';
  import {Swiper, SwiperSlide} from "swiper/react"
  import {EffectCards, Pagination} from "swiper/modules"
  import LottieLoading from "../../../loading/loading";
import "./subject.css"


function Subject(){
  const user = useSelector((state)=>state.auth.user)
    const subject = useSelector((state)=>state.happyexam.subject);
    const Loading = useSelector((state)=>state.happyexam.Loading)
    
   const navigate = useNavigate();
   const dispatch = useDispatch()
   const location = useLocation()
   const mounted = useRef(false)
   const params = useParams()


 if(!user.id){
  navigate("/")
 }
   
   useEffect(()=>{
    if(!mounted.current && !location?.state?.isClick){
    dispatch(getSubject(params.classId))
    mounted.current = true;
    }
   },[])

    function handleSubject(subjectId){
  dispatch(getChapter({classId:params.classId, subjectId:subjectId}))
 navigate(`/${params.classId}/${subjectId}`, {state:{isClick:true}})
    return;

    }

    
const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize(); // Set initial width on client
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isDesktop = width >= 768;

console.log(isDesktop)



    return(
       <>  
       {
          Loading ? (<div className="w-full 
            h-screen flex items-center justify-center"><LottieLoading></LottieLoading></div>)
        :   
            subject?.length ===0 ? <Error></Error>  

     : <main className=" relative w-full h-[cal(100vh-70px)]  flex flex-col gap-5">
  
    <div className="relative w-[364px] h-[424px] md:w-[600px] md:h-[500px]">

<Swiper
key={isDesktop ? 'desktop' : 'mobile'} 
      modules={isDesktop ? [EffectCards] : [Pagination]}
       effect={isDesktop ? 'cards' : 'slide'}
      spaceBetween={isDesktop ? 0 : 16}
      
       pagination={isDesktop ? false : { 
        clickable: true,
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active'
      }}

       cardsEffect={ isDesktop ? {
        slideShadows: false,
      } : false}
      
    slidesPerView={1}  
     className="w-full h-full flex flex-col gap-5"
   
    >

      {subject?.map((item, index) => {
        return (
          <SwiperSlide key={item._id} className=" !w-[99.6%] h-full rounded-3xl border-[2px] border-solid  border-border_grey box-border bg-white font-Nunito ">
           
           <div className=" h-full w-full flex flex-col justify-center  items-center  gap-10 ">
            <div className="flex flex-col gap-2 justify-center items-center">
            <p className=" inline-block font-semibold  rounded-full px-3 py-1 text-[12px] text-recommended_color bg-recommended_background tracking-wider">RECOMMENDED</p>
            <p className=" font-bold text-[18px]">{user.language === "english" ? item.chapter_name.english : item.chapter_name.hindi}</p>
            </div>

            <div>
              <img src={item.chapter_image} className=" w-[152p] h-[152px] md:w-[182px] md:h-[182px]"></img>
            </div>

            <div className=" w-[80%]">
            <button className=" w-full bg-start_background shadow-start h-[48px] rounded-full text-white font-medium  text-[16px]">Start</button>
            </div>

           </div>
            
          </SwiperSlide>
        );
      })}
    </Swiper>
</div> 
    

</main>

  }  
  </>
       
    )
}
export default Subject;