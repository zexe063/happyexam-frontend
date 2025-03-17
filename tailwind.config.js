
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
           border_grey:"#e8e8e8",
           background_grey:"#e5e5e5",
           text_grey:"#E3E3E3",
           chapter_text_grey:'#FCD6D6',
           review_grey:"#F8F4F4",
           review_border:"#EAD9D9",
           path_bg:"#041326",
           donwload_button:"#061527",
           download_border:"#4FB6F6",
           toggle_grey:"#EEEDED",
           toggle_header_grey:"#E6E0E0",
        

        
           
           

       
        // green color start
          
          progress_green:"#66E742",
          button_green:"#5AD41D",
          correct_green:"#EBFFDB",
         border_green:"#04F204",
         text_green:"#58a700",
         option_green:"rgb(165, 237, 110)",
         popup_green:"#F2FEE8",
         explanation_green:"#57E974",
         border_explanation_green:"#1FD043",
         text_explanation:"#407719",
         green_tick_rectangle:"#54CD09",
         hero_green:"#91F8AC",
         hero_green_border:"#08C23A",
         here_green_text:"#0D791F",
         level_completed_green:"10E55A",

         wrong_red:"#FEEBE6",
         border_red:"#d32f2f",
         text_red:"#d32f2f",
         popup_red:"#FFF5D3",
         button_red:"#FCD38D",
         chcek_text_red:"#BB7219",
          border_check_red:"#F7A71E",
          red_tick_rectangle:"#F24E23",
          
        
        
        //  blue color start
         background_blue:"#EEF3FF",
         border_blue: "#b9e1fa",
         text_blue:"#5791CF",
         text_solution:"#0D5484",
         step_blue:"#004FEC",
         solution_blue:"#467FF1",
         toggle_blue:"#325DEF",
         toggle_header_blue:"#7894F2",
         
        //  yellow

         button_yellow:"#F4D562",
         border_yellow:"#EBB900",
          streak_background:"#080f28",
         check_background_yellow:"#FEB200",
         check_background_grey:"#8B7575",
  
         

      

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
        toggle_grey_shadow:"0px 2px 0px #DBD3D3",
        setting_shadow:"0 4px 5px rgb(0 0 0 / 0.05), 0 -4px 5px rgb(0 0 0 / 0.05)",
        grey_shadow:"0px 3px 0px #e5e5e5",
        correct_shadow:" 0 4px 0 rgba(0, 255, 0, 0.8)",
        wrong_shadow: "0 3px 0 #FEC762",
        blue_shadow:"0 3px 0 #B9E1FA",
        level_shadow:"0px 8px 0px #C8D3CC",
        check_next_green:"0px 3px 0px #52C419",
        check_next_red:"0 3px 0 #FCBE4C",
        Maths:"0px 3px 0px #A4BAF7",
        Physics:"0px 3px 0px #F8DF9B",
        Chemistry:"0px 3px 0px #A4BAF7",
        Biology:"0px 3px 0px #79F48E"
      
        
      },
  
      fontFamily:{
        Nunito:["Geist", "sans-serif"],
        everett: ['TWK Everett', 'sans-serif']

      },
      backgroundImage:{
        "Maths" :  `linear-gradient(to top, rgba(213, 226, 252, 0.7) 0%, white 100%), url("/Vector1.png")`,
        'Physics': 'linear-gradient(to top, rgba(255, 230, 162, 0.7) 0%, white 100%), url("/Vector2.png")',
        "Chemistry" :  'linear-gradient(to top, rgba(213, 226, 252, 0.7) 0%, white 100%), url("/Vector3.png")',
        "Biology" :  'linear-gradient(to top, rgba(167, 255, 171, 0.7) 0%, white 100%), url("/Vector4.png")',
        "clip" : 'url("/clip.png")',
        
      },
     
     
    }

  },
  plugins: [],
}

