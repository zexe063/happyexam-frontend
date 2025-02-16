import LogoSection from "./section/heroSection/heroSection";
import SubjectSection from "./section/subjectSection/subjectSection";
import ChapterSection from "./section/chapterSection/chapterSection";
import LevelSection from "./section/levelSection/levelsection";
import QuestionSection from "./section/questionSection/questionSection";
import ReviewSection from "./section/reviewSection/reviewSection";
import PathSection from "./section/pathSection/pathSection";

function LandingPage(){
    return(
        <div className=" w-full h-full flex flex-col gap-[100px] relative top-[100px] overflow-hidden">
       <LogoSection></LogoSection>
       <SubjectSection></SubjectSection>
       <ChapterSection></ChapterSection>
       <LevelSection></LevelSection>
       <QuestionSection></QuestionSection>
       
      <ReviewSection></ReviewSection>
      <PathSection></PathSection>
        </div>
    )
}
export default LandingPage;