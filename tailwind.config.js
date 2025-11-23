
 import vector1 from "./public/Vector1.png"



module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{

          level_text_grey:"#e8e8e8",
          check_grey:"#F1EFEF",
          progress_grey:"#F7F3F3",
          border_grey:"#e5e5e5",
           toggle_grey:"#EEEDED",
           tick_bg:"#fcf9f9",
           why_grey:"rgba(0, 0, 0, 0.05)",
           course_grey:"#f7f7f7",
        
        // green color start
          
          progress_green:"#29cc57",
          button_green:"#29cc57",
         border_green:"hsl(135.9deg 55.08% 60%)",
         text_green:"#58a700",
         popup_green:"#d4f5dd",

         green_tick_rectangle:"#54CD09",
        
         payment : "#05D674",
         tick_bg_green: "#34cd67",
         text_motion_green: '#13a33f',
          box_correct_border:"#009b2b",
          box_coreect_text:"#009b2b",

  



         border_red:"#d32f2f",
         text_red:"#d32f2f",
         popup_red:"#e5e5e5",
         chcek_text_red:"#BB7219",
          red_tick_rectangle:"#F24E23",
          confidence:"#FF4800",
          tick_bg_red:"hsl(0deg 82.22% 60.59%)",
         box_wrong_border:"#e14b4b",
         box_wrong_text:"#e14b4b",
    

       
          
  
        
         background_blue:"#F1FAFF",
         border_blue: "#6875f9",
         text_blue:"#0414c8",
         tick_bg_blue: "hsl(221.21deg 93.19% 65.33%)",
          box_blue_border:"#375ce3",
          start_background:"#456DFF",
          recommended_color:"#033dfc",
          recommended_background:"hsl(226,90%,93.6%)",
        


         motivated:"#FFC300",
  

         footer:"#F3F4F7",
         footer_text:"#083156",
         
// balck
background_black:"#000c",
// GRADIENT
  premium_button :"#FFC107"
        

      },

      textColor:{
        // Maths:"#7093F1",
        // Physics:"#B98B0C",
        // Chemistry:"#ACC6F9",
        // Biology:"#05CB2C",
        // streak_grey:"#B59999",
        // streak_yellow:"#F5BF41",
        // week_grey:"A79797",
        // week_yellow:"FEB200",
        coming_soon:"#5AA0F1"
      },

      borderColor:{
        // Maths_border:"#A4BAF7",
        // Physics_border:"#F8DF9B",
        // Chemistry_border:"#A4BAF7",
        // Biology_border:"#79F48E"
      },
  
      

      boxShadow:{
        // button_yellow:" 0px 3px 0px #EBB900",
        // toggle_blue_shadow:"0px 2px 0px #6B8ESEE",
        // toggle_grey_shadow:"0px 4px 0px #DBD3D3",
        setting_shadow:"0 4px 5px rgb(0 0 0 / 0.05), 0 -4px 5px rgb(0 0 0 / 0.05)",
        grey_shadow:"0px 2px 0px #e5e5e5",
        'btn-grey-sm': "0px 2px 0px #e5e5e5",
        'btn-grey': "0px 4px 0px #e5e5e5",

        correct_shadow:" 0 4px 0 #15b441",
        // wrong_shadow: "0 3px 0 #FEC762",
        // blue_shadow:"-1.5px 2px 0px hsl(232, 82%, 49%)",
        // level_shadow:"0px 8px 0px #C8D3CC",
        // check_next_green:"0px 4px 0px #15b441",
        // check_next_red:"0 3px 0 #FCBE4C",
        // Maths:"0px 3px 0px #A4BAF7",
        // Physics:"0px 3px 0px #F8DF9B",
        // Chemistry:"0px 3px 0px #A4BAF7",
        // Biology:"0px 3px 0px #79F48E",
        black:"0px 4px 0px #000000",
        'btn-black': "0px 4px 0px #000000",
        
         
        why:"0 4px 0 0 rgba(0, 0, 0, 0.1)",
         box_blue :"0px 2px 0px #375ce3",
        box_coreect :"0px 2px 0 0 #15b441",
        box_wrong:"0px 2px 0px #e14b4b",
        start : "0px 3px 0px #213C9E",

        // GRADIENT
      premium_shadow:"0px 3px 0px #C3950B",
      premiumUnlock_shadow:"0px 3px 0px #E74CFC"
      
    
         
        
      },
  
      fontFamily:{
        
        JetBarins:["JetBrains Mono", "monospace"],
         Nunito:["cofo-brilliant", 'sans-serif'],
        Space_Grotesk:["Space Grotesk", "sans-serif"]

      },
  
      
      backgroundImage:{
       
        "clip" : 'url("/clip.png")',
         "header":`linear-gradient(to top, white,transparent), url("/header.svg")`,
        "subject_gradeint": "linear-gradient(to top, #FFF7EE, #FFFFFF)",
        "chapter_gradeint": "linear-gradient(to top, #CCDEFF, #FFFFFF)",
        "motivated_gradeint":  "linear-gradient(to top, #FDFECD, #FFFFFF)",
        "payment_gradeint":  "linear-gradient(to top, #B5FCBD, #FFFFFF)",
        premium_gradient: 'linear-gradient(135deg,#EEF2FE 14.42%,#F7EBCA 39.35%,#ECE7D8 71.76%,#FBCEE2 94.22%)',
        premiumUnlock_gradient:'linear-gradient(90deg, #ABBDFF 0%, #E350E3 50%, #F7C325 100%)'
        
      },
     
     
    }

  },
  plugins: [],
}

