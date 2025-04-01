import LogoSection from "./section/heroSection/heroSection";
import MidHeroSection from "./section/midHeroSection/midHeroSection";
import SubjectSection from "./section/subjectSection/subjectSection";
import ChapterSection from "./section/chapterSection/chapterSection";
import MotivateSection from "./section/motivateSection/motivatesection";
import PaymentSection from "./section/paymentSection/paymentsection";
import TestimonialsSection from "./section/TestimonialsSection/TestimonialsSection";
import PathSection from "./section/pathSection/pathSection";


function LandingPage(){
    return(
        <div className=" w-full h-full flex flex-col   overflow-hidden">
       <LogoSection></LogoSection>
       <MidHeroSection></MidHeroSection>
       <SubjectSection></SubjectSection>
       <ChapterSection></ChapterSection>
       <MotivateSection></MotivateSection>
       <PaymentSection></PaymentSection>
   
      <PathSection></PathSection>
        </div>
    )
}
export default LandingPage;