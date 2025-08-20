
 import vector1 from "./public/Vector1.png"
 
/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          level_grey:"#E5E5E5",
          level_text_grey:"#e8e8e8",
          check_grey:"#F1EFEF",
          check_text_grey:"#afafaf",
          progress_grey:"#F7F3F3",
          option_background_grey:"#FEEDED",
          option_text_grey:"#DFBBBB",
          linear_grey:"#FFF0F0",
           border_grey:"#e5e5e5",
           background_grey:"#e8e8e8",
           text_grey:"#E3E3E3",
           chapter_text_grey:'#FCD6D6',
           review_grey:"#F8F4F4",
           review_border:"#EAD9D9",
           path_bg:"#041326",
           donwload_button:"#061527",
           download_border:"#4FB6F6",
           toggle_grey:"#EEEDED",
           toggle_header_grey:"#E6E0E0",
           tick_bg:"#fcf9f9",
           why_grey:"rgba(0, 0, 0, 0.05)",
           course_grey:"#f7f7f7",
        

        
           
           

       
        // green color start
          
          progress_green:"#29cc57",
          button_green:"#29cc57",
          correct_green:"#f6fffb",
         border_green:"hsl(135.9deg 55.08% 60%)",
         text_green:"#58a700",
         option_green:"rgb(165, 237, 110)",
         popup_green:"#d4f5dd",
         explanation_green:"#57E974",
         border_explanation_green:"#1FD043",
         text_explanation:"#407719",
         green_tick_rectangle:"#54CD09",
         hero_green:"#91F8AC",
         hero_green_border:"#08C23A",
         here_green_text:"#0D791F",
         level_completed_green:"10E55A",
         payment : "#05D674",
         tick_bg_green: "#34cd67",
         text_motion_green: '#13a33f',
           box_correct_border:"#009b2b",
           box_correct_background:"#f4fcf7",
           box_coreect_text:"#009b2b",

        //  red color start
         wrong_red:"#fff7f5",
         border_red:"#d32f2f",
         text_red:"#d32f2f",
         popup_red:"#e5e5e5",
         button_red:"#FCD38D",
         chcek_text_red:"#BB7219",
          border_check_red:"#F7A71E",
          red_tick_rectangle:"#F24E23",
          confidence:"#FF4800",
          tick_bg_red:"hsl(0deg 82.22% 60.59%)",
         box_wrong_border:"#e14b4b",
         box_wrong_text:"#e14b4b",
         box_wrong_background:"#fff7f7",

       
          
        
        
        //  blue color start
         background_blue:"#F1FAFF",
         border_blue: "#6875f9",
         text_blue:"#5791CF",
         text_solution:"#0D5484",
         step_blue:"#004FEC",
         solution_blue:"#467FF1",
         toggle_blue:"#325DEF",
         toggle_header_blue:"#7894F2",
         solve:"#041271",
         tick_bg_blue: "hsl(221.21deg 93.19% 65.33%)",
         tick_text_blue:"#294bc6",
          box_blue_text:"#294bc6",
          box_blue_border:"#375ce3",
          start_background:"#456DFF",
          recommended_color:"#033dfc",
          recommended_background:"hsl(226,90%,93.6%)",
          
         
        //  yellow

         button_yellow:"#F4D562",
         border_yellow:"#EBB900",
          streak_background:"#080f28",
         check_background_yellow:"#FEB200",
         check_background_grey:"#8B7575",
         motivated:"#FFC300",
  

        // footer color
         footer:"#F3F4F7",
         footer_text:"#083156",
         
// balck
background_black:"#000c"      

      },

      textColor:{
        Maths:"#7093F1",
        Physics:"#B98B0C",
        Chemistry:"#ACC6F9",
        Biology:"#05CB2C",
        streak_grey:"#B59999",
        streak_yellow:"#F5BF41",
        week_grey:"A79797",
        week_yellow:"FEB200",
      },

      borderColor:{
        Maths_border:"#A4BAF7",
        Physics_border:"#F8DF9B",
        Chemistry_border:"#A4BAF7",
        Biology_border:"#79F48E"
      },

      boxShadow:{
        button_yellow:" 0px 3px 0px #EBB900",
        toggle_blue_shadow:"0px 2px 0px #6B8ESEE",
        toggle_grey_shadow:"0px 4px 0px #DBD3D3",
        setting_shadow:"0 4px 5px rgb(0 0 0 / 0.05), 0 -4px 5px rgb(0 0 0 / 0.05)",
        grey_shadow:"0px 2px 0px #e5e5e5",
        correct_shadow:" 0 4px 0 #15b441",
        wrong_shadow: "0 3px 0 #FEC762",
        blue_shadow:"-1.5px 2px 0px hsl(232, 82%, 49%)",
        level_shadow:"0px 8px 0px #C8D3CC",
        check_next_green:"0px 4px 0px #15b441",
        check_next_red:"0 3px 0 #FCBE4C",
        Maths:"0px 3px 0px #A4BAF7",
        Physics:"0px 3px 0px #F8DF9B",
        Chemistry:"0px 3px 0px #A4BAF7",
        Biology:"0px 3px 0px #79F48E",
        black:"0px 4px 0px #000000",
         
        why:"0 4px 0 0 rgba(0, 0, 0, 0.1)",
         box_blue :"0px 2px 0px #375ce3",
        box_coreect :"0px 2px 0 0 #15b441",
        box_wrong:"0px 2px 0px #e14b4b",
        start : "0px 3px 0px #213C9E"
      
        
      },
  
      fontFamily:{
        // Nunito:["Geist", "sans-serif"],

        JetBarins:["JetBrains Mono", "monospace"],
        // everett: ['TWK Everett', 'sans-serif']

        Nunito:["Work Sans", 'sans-serif'],
        Space_Grotesk:["Space Grotesk", "sans-serif"]
         
      


      },
      
      backgroundImage:{
        "Maths" :  `linear-gradient(to top, rgba(213, 226, 252, 0.7) 0%, white 100%), url("/Vector1.png")`,
        'Physics': 'linear-gradient(to top, rgba(255, 230, 162, 0.7) 0%, white 100%), url("/Vector2.png")',
        "Chemistry" :  'linear-gradient(to top, rgba(213, 226, 252, 0.7) 0%, white 100%), url("/Vector3.png")',
        "Biology" :  'linear-gradient(to top, rgba(167, 255, 171, 0.7) 0%, white 100%), url("/Vector4.png")',
        "clip" : 'url("/clip.png")',
         "header":`linear-gradient(to top, white,transparent), url("/header.svg")`,
         
        "subject_gradeint": "linear-gradient(to top, #FFF7EE, #FFFFFF)",
        "chapter_gradeint": "linear-gradient(to top, #CCDEFF, #FFFFFF)",
        "motivated_gradeint":  "linear-gradient(to top, #FDFECD, #FFFFFF)",
        "payment_gradeint":  "linear-gradient(to top, #B5FCBD, #FFFFFF)",
        "Testimonials" : "url('/Testimonials.png')"
        
      },
     
     
    }

  },
  plugins: [],
}

