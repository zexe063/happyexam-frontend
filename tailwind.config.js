/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
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
        

        
           
           

       
        // green color start
          
          progress_green:"#66E742",
          button_green:"#5AD41D",
          correct_green:"#d7ffb8",
         border_green:"rgba(0, 255, 0, 0.8)",
         text_green:"#58a700",
         option_green:"rgb(165, 237, 110)",
         popup_green:"#d7ffb8",
         explanation_green:"#57E974",
         border_explanation_green:"#1FD043",
         text_explanation:"#407719",

         wrong_red:"#ffdfe0",
         border_red:"#d32f2f",
         text_red:"#d32f2f",
         popup_red:"#FFDFE0",
         button_red:"#AD4848",
        
        
        //  blue color start
         background_blue:"#E0EEFD",
         border_blue:"#B9E1FA",
         text_blue:"#5791CF",
         text_solution:"#0D5484",
         step_blue:"#004FEC",
         solution_blue:"#467FF1"


      },

      boxShadow:{
        grey_shadow:"0px 3px 0px #e5e5e5",
        correct_shadow:" 0 3px 0 rgba(0, 255, 0, 0.8)",
        wrong_shadow: "0 3px 0 #A92E2E",
        blue_shadow:"0 3px 0 #B9E1FA",
        level_shadow:"0px 8px 0px #C8D3CC",
        check_next_green:"0px 3px 0px #52C419",
        check_next_red:"0 3px 0 #A23434"
      
        
      },
  
      fontFamily:{
        //  Nunito:["Barlow", 'serif']
        Nunito:["Mukta", 'serif']

      }
    }

  },
  plugins: [],
}

