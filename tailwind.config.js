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
           
           

       
        // green color start
          
          progress_green:"#66E742",
          button_green:"#5AD41D",
          correct_green:"#d7ffb8",
         border_green:"rgba(0, 255, 0, 0.8)",
         text_green:"#58a700",
         option_green:"rgb(165, 237, 110)",
         popup_green:"#d7ffb8",

         wrong_red:"#ffdfe0",
         border_red:"#d32f2f",
         text_red:"#d32f2f",
         popup_red:"#FFDFE0",
         button_red:"#AD4848",
        
        
        //  blue color start
         background_blue:"#E0EEFD",
         border_blue:"#B9E1FA",
         text_blue:"#5791CF"


      },

      boxShadow:{
        grey_shadow:"0px 5px 0px #e5e5e5",
        correct_shadow:" 0 3px 0 rgba(0, 255, 0, 0.8)",
        wrong_shadow: "0 3px 0 #d32f2f ",
        blue_shadow:"0 3px 0 #B9E1FA",
        level_shadow:"0px 8px 0px #C8D3CC",
        green_button_shadow:"0px 5px 0px #52C419",
        
      },
  
      fontFamily:{
         Nunito:["Barlow", 'serif']

      }
    }

  },
  plugins: [],
}

