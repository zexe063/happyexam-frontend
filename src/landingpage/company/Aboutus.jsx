
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

function Aboutus(){
 return (
    <div className=" w-full font-Nunito">
      <div className=" w-full h-[400px] bg-gradient-about-us flex flex-col justify-center items-center gap-5">
         <p className=" text-gray-400 text-LG">OUR MISSION</p>
         <p className=" text-5xl md:text-7xl max-w-[800px] text-center">Student should be Happy at Exam </p>
          <DotLottieReact
          src="Logo.lottie"
          loop
         autoplay
        style={{ width: '60px', height: '60px' }}>

        </DotLottieReact>

      </div>


      {/* HERE THE QUESTION PART */}
      

         <div className=" w-full h-[400px]  flex flex-col justify-center items-center gap-4 ">
         <p className=" text-5xl text-center font-semibold">Empower with  question </p>
         <p className="text-lg max-w-[600px]  px-2  md:px-0] hyphens-auto">We deliver premium-quality MCQs for every single chapter, meticulously crafted to mirror real board exam patterns. Practice with purpose, build unshakeable confidence, and walk into your exam hall knowing you're fully prepared.</p>
         </div>
   


             <div className=" w-full h-[400px]  flex flex-col justify-center items-center gap-4">
         <p className=" text-5xl text-center font-semibold">Your exam, Your  language </p>
         <p className="text-lg max-w-[550px] px-2 md:px-0 hyphens-auto"> Choose between English and Hindi whichever makes you comfortable. We believe language should never be a barrier to your success. Understand concepts clearly, practice confidently, and ace your exams in the language that feels like home.</p>
         </div>

    </div>
 )
}

export default Aboutus