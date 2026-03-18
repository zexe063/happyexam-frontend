import "./home.css"
import 'react-loading-skeleton/dist/skeleton.css'

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState} from "react";
import {useLocation, useNavigate, useParams} from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import {persistor} from "@/main"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import {Swiper, SwiperSlide} from "swiper/react"
import {EffectCards, Pagination} from "swiper/modules"
import { userVerify } from "@/happyexamReducer/auth";
import {getCourse} from "@/happyexamReducer/happyexam";
import LeaderBoard from './leaderboard/leaderboard';
import Premium from "./premium/premium";



function Home(){

  const Loading = useSelector((state)=>state.happyexam.Loading)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const location = useLocation()
  const params = useParams()
  const user = useSelector((state)=>state.auth.user)
  const isUserVerified = useSelector((state)=>state.happyexam.isUserVerified);
  const recommendedChapter = useSelector((state)=>state.auth.user.recommendedChapter);

   
   useEffect(()=>{
      if(isUserVerified) return;
     dispatch(userVerify()).then(async(action)=>{

      if(action.payload.status !== 200)  {
        const Logout   = await persistor.purge();
        if(Logout)  return window.location.href= "/"
      }
     })
  
   },[])

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
    
    
   <section className=" relative w-full min-h-[calc(100vh-70px)] pb-2  md:pb-0 items-center flex flex-col justify-center md:flex-row gap-5 md:gap-16 mt-5 overflow-auto">
   

   { isDesktop &&  <div className="relaive flex flex-col gap-4 md:self-start md:mt-6">
{!user.isPremium &&<Premium></Premium>}
<LeaderBoard></LeaderBoard>
   </div>
}

{ Loading ?  <Skeleton width={isDesktop ? 487 :  359} height={  isDesktop ?497 :420} borderRadius={20}></Skeleton>
 :
  <div className="relative w-full h-[424px] md:w-[480px] md:h-[500px] px-6 md:px-0 md:self-start md:mt-6">
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
     className="w-full h-full"
   
    >

      { recommendedChapter?.map((item, index) => {
        
        return (
          <SwiperSlide key={item._id} className=" h-full rounded-3xl border-[2px] border-solid  border-gray-200 box-border bg-white font-Nunito ">
           
           <div className=" h-full w-full flex flex-col justify-center  items-center  gap-10 ">
            <div className="flex flex-col gap-2 justify-center items-center">
            <p className=" inline-block font-semibold  rounded-full px-3 py-1 text-[12px] text-blue-A500 bg-blue-100 tracking-wider">RECOMMENDED</p>
            <p className=" font-bold text-[18px]">{user?.userPreference?.language === "english" ? item?.chapter_name?.english : item?.chapter_name?.hindi}</p>
            </div>

            <div>
              <img src={item.chapter_image} className=" w-[152px] h-[152px] md:w-[182px] md:h-[182px] object-contain"></img>
            </div>

            <div className=" w-[90%]">
            <button className=" w-full bg-blue-B400 shadow-btn-start h-[48px] rounded-full text-white font-medium  text-[16px]" onClick={NavigateChapter}>Start</button>
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





