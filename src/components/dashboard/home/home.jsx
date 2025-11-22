import "./home.css"
import 'react-loading-skeleton/dist/skeleton.css'

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState} from "react";
import {useLocation, useNavigate, useParams} from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import {Swiper, SwiperSlide} from "swiper/react"
import {EffectCards, Pagination} from "swiper/modules"

import {getCourse} from "../../../happyexamReducer/happyexam";
import LeaderBoard from './leaderboard/leaderboard';
import Premium from "./Premium/premium";


function Home(){
  const user = useSelector((state)=>state.auth.user)
  const  recommendedChapter = useSelector((state)=>state.auth.user.recommendedChapter);
  const Loading = useSelector((state)=>state.happyexam.Loading)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const location = useLocation()
  const mounted = useRef(false)
  const params = useParams()
  
  if(!user?._id){
  navigate("/")
 }
   
   useEffect(()=>{
    if(!mounted.current && !location?.state?.isClick){
    mounted.current = true;
    }
   },[user, navigate])

    function NavigateChapter(){
  dispatch(getCourse({classId:params.classId}))
 navigate(`/course/${params.class_name}`, {state:{isClick:true}})
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





    return(
       <>  
    
    
   <section className=" relative w-full h-[cal(100vh-70px)]  items-center flex flex-col justify-center md:flex-row gap-5 md:gap-10 mt-5 overflow-auto">
   

   { isDesktop &&  <div className=" flex flex-col justify-center items-center gap-4">
{!user.isPremium &&<Premium></Premium>}
<LeaderBoard></LeaderBoard>
   </div>
}

{ Loading ?  <Skeleton width={isDesktop ? 487 :  359} height={  isDesktop ?497 :420} borderRadius={20}></Skeleton>
 :
  <div className="relative w-[380px] h-[424px] md:w-[500px] md:h-[500px]  self-start pl-4">
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

      { recommendedChapter?.map((item, index) => {
        return (
          <SwiperSlide key={item._id} className=" !w-[99.6%] h-full rounded-3xl border-[2px] border-solid  border-border_grey box-border bg-white font-Nunito ">
           
           <div className=" h-full w-full flex flex-col justify-center  items-center  gap-10 ">
            <div className="flex flex-col gap-2 justify-center items-center">
            <p className=" inline-block font-semibold  rounded-full px-3 py-1 text-[12px] text-recommended_color bg-recommended_background tracking-wider">RECOMMENDED</p>
            <p className=" font-bold text-[18px]">{user?.userPreference?.language === "english" ? item?.chapter_name?.english : item?.chapter_name?.hindi}</p>
            </div>

            <div>
              <img src={item.chapter_image} className=" w-[152px] h-[152px] md:w-[182px] md:h-[182px] object-contain"></img>
            </div>

            <div className=" w-[90%]">
            <button className=" w-full bg-start_background shadow-start h-[48px] rounded-full text-white font-medium  text-[16px]" onClick={NavigateChapter}>Start</button>
            </div>

           </div>
            
          </SwiperSlide>
        );
      })}
    </Swiper>
</div> 

}
{!user.isPremium && !isDesktop && <Premium></Premium>}
 {!isDesktop && <LeaderBoard></LeaderBoard>}    

</section>


  
  </>
       
    )
}
export default Home;