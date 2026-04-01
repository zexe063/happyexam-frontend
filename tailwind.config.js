
 import vector1 from "./public/Vector1.png"



module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
gray: {
  50: "#fbf5f5", 
  A50: "#f7f3f3", 
  100:"#f2f2f2",
  A100: "#f1efef",  
  B200: "#eeeded",    
  200 : "#e5e5e5",   
  300:  "#f7f7f7"
},


green: {
  200: "#d4f5dd",              
  400: "#61d17f",             
  500: "#34cd67",             
  600: "#29cc57",
  B600: "#05d674",
  C600: "#54cd09",            
  700: "#13a33f",              
  A700: "#58a700",             
  B700: "#009b2b",            
},

 red: {
  400: "#ed4848",             
  500: "#e14b4b",            
  A500: "#f24e23",              
  B500: "#d32f2f",        
  600: "#BB7219",     
},



         blue: {
  50: "#f1faff",          
  A50: "#f3f4f7",              
  100: "#e0e7fd",             
  400: "#6875f9",              
  A400: "#5488f9",             
  B400: "#456dff",             
  500: "#375ce3",              
  A500: "#033dfc",    
  B500:"#1cb0f6",       
  600: "#0414c8",              
  900: "#083156",              
  950: "#041326"

     },

        
 yellow:{
  500: "#ffc107"
 },
 black:"#000c"



 },


 boxShadow:{

        'btn-grey': "0px 2px 0px #e5e5e5",
        'btn-grey-lg': "0px 4px 0px #e5e5e5",
        'btn-correct': "0px 4px 0px #15b441",
        'btn-green':"0px 4px 0px #1f9941",
        'btn-black': "0px 4px 0px #000000",
        'btn-blue':"0px 3px 0px #1899d6",
        'btn-why':"0 4px 0 0 #0000001a",
        'btn-box-blue':"0px 2px 0px #375ce3",
        'btn-box-correct':"0px 2px 0px #15b441",
        'btn-box-wrong':"0px 2px 0px #e14b4b",
        'btn-start':"0px 3px 0px #213C9E",
        'btn-yellow':"0px 4px 0px #C3950B",
        'btn-premium-unlock':"0px 3px 0px #E74CFC"


      },
  
      fontFamily:{
        
        JetBarins:["JetBrains Mono", "monospace"],
         Nunito:["cofo-brilliant", 'sans-serif'],
        Space_Grotesk:["Space Grotesk", "sans-serif"]

      },
  
      
      backgroundImage:{
      
         "header":`linear-gradient(to top, white,transparent), url("/header.svg")`,
        'gradient-subject': "linear-gradient(to top, #FFF7EE, #FFFFFF)",
        'gradient-chapter': "linear-gradient(to top, #CCDEFF, #FFFFFF)",
        'gradient-motivated':  "linear-gradient(to top, #FDFECD, #FFFFFF)",
        'gradient-payment':  "linear-gradient(to top, #B5FCBD, #FFFFFF)",
        'gradient-premium' : 'linear-gradient(135deg,#EEF2FE 14.42%,#F7EBCA 39.35%,#ECE7D8 71.76%,#FBCEE2 94.22%)',
        'gradient-premium-unlock':'linear-gradient(90deg, #ABBDFF 0%, #E350E3 50%, #F7C325 100%)',
        "gradient-about-us":"linear-gradient(93deg, #FAEAAE 5%, #B5DDF8, 63% , #FDCCEA 95%)"
        
      },
     
     
    }

  },
  plugins: [],
}

