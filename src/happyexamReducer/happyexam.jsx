
import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit"
 import axios from "axios"



export const getRecommendedChapter = createAsyncThunk(
  "getRecommendedChapter",
  async(class_name)=>{
const HometData =  await axios.get(`https://happyexambackend2-0.vercel.app/home/${class_name}`)
return HometData.data
  } 
)


export const getCourse = createAsyncThunk(
  "getCourse",
  async({class_name})=>{
    const CourseData = await axios.get(`https://happyexambackend2-0.vercel.app/course/${class_name}`)
    return CourseData.data
  }
)

export const getLevel = createAsyncThunk(
  "getLevel",
  async({class_name,subject_name, chapter_name})=>{
    const LevelData = await axios.get(`https://happyexambackend2-0.vercel.app/level/${class_name}/${subject_name}/${chapter_name}`)
    return LevelData.data;
  }
)

export const getQuestion = createAsyncThunk(
  "getQuestion",
  async({class_name,subject_name, chapter_name, level_name})=>{
    
    const QuestionData = await axios.get(`https://happyexambackend2-0.vercel.app/question/${class_name}/${subject_name}/${chapter_name}/${level_name}`);
    return QuestionData.data;
  }
)

export const  createReportQuestion =   createAsyncThunk(
  "createReportQuetsion",
  async(ReportValue)=>{
    const  data = await axios.post("https://happyexambackend2-0.vercel.app/ReportQuestion",{questionId:ReportValue.questionId, value:ReportValue.value});
   console.log(data)
      if(data.status === 200){
        // toast.success("Report Sucessful")
        alert("Report Success")
        
      }
      else{
        alert("something went wrong try again")
      }
    
  }
)
const happyexam = createSlice({
    name:"happyexam",

    initialState:{

     
    explanation:false,
    Loading:false,
    ReportLoading:false,
    ToggleReport : false,
    ToggleSetting:false,
 questionAnalysis:{
    correct:0,
    wrong:0
  },
     RecommendedChapter :[],
     course:[],
     level:[],

  question:[]



    },
    
            

           reducers:{
            Height:(state,action)=>{
              state.height =  action.payload;
            },

            ApiDataReducer:(state,action)=>{
              state.ApiData = {...state.ApiData, ...action.payload}
            },
          ExplanationOpenOrClose : (state,action)=>{
              state.explanation = !state.explanation;
          },
          ToggleSetting:(state,action)=>{
            state.user.language = action.payload
             },
          
           ToggleReport:(state,action)=>{
            state.ToggleReport = !state.ToggleReport
           },
          questionAnalysis:(state,action)=>{
        state.questionAnalysis = action.payload
          }   
           
          },

           extraReducers:(builder)=>{
          // start subject here

            builder.addCase(getRecommendedChapter.pending, (state,action)=>{
              state.Loading = true
            })

            builder.addCase(getRecommendedChapter.fulfilled,(state,action)=>{
                state.RecommendedChapter = action.payload;
                state.Loading = false
            })
             builder.addCase(getRecommendedChapter.rejected, (state,action)=>{
              state.Loading = false;
              state.RecommendedChapter = []
             })

            //  here chapter Start

            builder.addCase(getCourse.pending, (state,action)=>{
              state.Loading = true
            })

             builder.addCase(getCourse.fulfilled,(state,action)=>{
              state.course = action.payload;
              state.Loading = false
             })

              builder.addCase(getCourse.rejected,(state,action)=>{
                
                state.Loading = false
                state.course = [];
              })

             
            //  getLevel start here

             builder.addCase(getLevel.pending,(state,action)=>{
                 state.Loading = true
              })

             builder.addCase(getLevel.fulfilled,(state,action)=>{
             
              state.level = action.payload
              state.Loading = false
              
             })
               builder.addCase(getLevel.rejected,(state,action)=>{
                 state.Loading = false;
                 state.level = [];
               })
              
              //  quetsion Reducer start

               builder.addCase(getQuestion.pending, (state,action)=>{
                 state.Loading = true;
               })

              builder.addCase(getQuestion.fulfilled,(state,action)=>{
                state.question = action.payload;
                state.Loading = false
              })
               builder.addCase(getQuestion.rejected, (state,action)=>{
                 state.Loading = false;
              state.question =  [
    {
      "question_name": {
        "english": "What is the commercial unit of electrical energy?",
        "hindi": "विद्युत ऊर्जा की व्यावसायिक इकाई क्या है?"
      },
      "option": {
        "english": ["Watt", "Joule", "Kilowatt-hour", "Volt-ampere"],
        "hindi": ["वाट", "जूल", "किलोवाट-घंटा", "वोल्ट-एम्पीयर"]
      },
      "answer": 2, 
      "image": null,
      "medium": "easy"
    },
   {
      "question_name": {
        "english": "Identify the circuit connection type:",
        "hindi": "सर्किट कनेक्शन का प्रकार पहचानें:"
      },
      "option": {
        "english": ["Series", "Parallel", "Mixed", "None"],
        "hindi": ["श्रेणी", "समानांतर", "मिश्रित", "कोई नहीं"]
      },
      "answer": 1, 
      "image": "https://cdn.jsdelivr.net/gh/happyexam063/happyexam-illustration@master/class10/question/electricity/level-2-question-2.png",
      "medium": "medium"
    },
    {
      "question_name": {
        "english": "Resistance of a conductor increases with:",
        "hindi": "चालक का प्रतिरोध बढ़ता है जब:"
      },
      "option": {
        "english": ["Decrease in temperature", "Increase in temperature", "No change", "Depends on material"],
        "hindi": ["तापमान घटने पर", "तापमान बढ़ने पर", "कोई बदलाव नहीं", "पदार्थ पर निर्भर"]
      },
      "answer": 1,
      "image": null,
      "medium": "easy"
    },
    {
      "question_name": {
        "english": "Energy consumed by a 1000W heater in 2 hours:",
        "hindi": "1000W हीटर द्वारा 2 घंटे में खपत ऊर्जा:"
      },
      "option": {
        "english": ["1 kWh", "2 kWh", "3 kWh", "4 kWh"],
        "hindi": ["1 kWh", "2 kWh", "3 kWh", "4 kWh"]
      },
      "answer": 1, 
      "image": null,
      "medium": "easy"
    },
    {
      "question_name": {
        "english": "Power rating of a 220V iron drawing 2A current:",
        "hindi": "220V इस्तरी जो 2A धारा लेती है, की शक्ति:"
      },
      "option": {
        "english": ["110W", "220W", "440W", "880W"],
        "hindi": ["110W", "220W", "440W", "880W"]
      },
      "answer": 2, 
      "image": null,
      "medium": "easy"
    },
   {
      "question_name": {
        "english": "Which safety device is based on the heating effect of current?",
        "hindi": "विद्युत धारा के तापीय प्रभाव पर कौन सा सुरक्षा उपकरण आधारित है?"
      },
      "option": {
        "english": ["Switch", "Electric fuse", "Voltmeter", "Socket"],
        "hindi": ["स्विच", "विद्युत फ्यूज", "वोल्टमीटर", "सॉकेट"]
      },
      "answer": 1, 
      "image": null,
      "medium": "easy"
    },
  {
  "question_name": {
    "english": "Which meter is connected in series, as shown in the diagram?",
    "hindi": "चित्र में दिखाए अनुसार कौन सा मीटर श्रेणी में जुड़ा होता है?"
  },
  "option": {
    "english": ["Ammeter", "Voltmeter", "Ohmmeter", "Wattmeter"],
    "hindi": ["एमीटर", "वोल्टमीटर", "ओममीटर", "वॉटमीटर"]
  },
  "answer": 0,
  "image": "<svg width='350' height='200' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif'><defs><marker id='arrow' viewBox='0 0 10 10' refX='5' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 0 L 10 5 L 0 10 z' fill='#333' /></marker></defs><path d='M 50 100 V 50 H 120 M 180 50 H 250 V 100 H 50' stroke='black' stroke-width='2' fill='none'/><line x1='50' y1='100' x2='50' y2='120' stroke='black' stroke-width='2'/><line x1='50' y1='130' x2='50' y2='150' stroke='black' stroke-width='2'/><line x1='40' y1='120' x2='60' y2='120' stroke='black' stroke-width='2'/><line x1='45' y1='130' x2='55' y2='130' stroke='black' stroke-width='2'/><text x='10' y='128' font-size='12px'>Battery</text><circle cx='150' cy='50' r='20' fill='white' stroke='black' stroke-width='2'/><text x='145' y='55' font-weight='bold'>A</text><text x='120' y='30' font-size='12px' fill='blue'>Ammeter (in Series)</text><circle cx='250' cy='100' r='15' fill='none' stroke='black' stroke-width='2'/><line x1='242' y1='92' x2='258' y2='108' stroke='black' stroke-width='2'/><line x1='242' y1='108' x2='258' y2='92' stroke='black' stroke-width='2'/><text x='235' y='135' font-size='12px'>Bulb (Load)</text><path d='M 230 100 V 150 H 270 V 100' stroke='black' stroke-width='2' fill='none' stroke-dasharray='4 2'/><circle cx='250' cy='150' r='20' fill='white' stroke='black' stroke-width='2'/><text x='245' y='155' font-weight='bold'>V</text><text x='215' y='180' font-size='12px' fill='green'>Voltmeter (in Parallel)</text><path d='M 190 50 H 220' stroke='#333' stroke-width='1.5' fill='none' marker-end='url(#arrow)'/><text x='195' y='70' font-size='14px' font-style='italic'>I</text></svg>",
  "medium": "medium"
},
    {
  "question_name": {
    "english": "as shown in diagram what is the current?",
    "hindi": "दिखाए गए समानांतर सर्किट में, यदि R₁ = R₂ है, तो प्रतिरोधक R₂ से धारा (I₂) का मान क्या है?"
  },
  "option": {
    "english": ["1.5A", "2.5A", "3.5A", "5A"],
    "hindi": ["1.5A", "2.5A", "3.5A", "5A"]
  },
  "answer": 1,
  "image": "https://cdn.jsdelivr.net/gh/happyexam063/happyexam-illustration@master/class10/question/electricity/level-2-question-8.png",
  "medium": "medium"
},
    {
      "question_name": {
        "english": "A heating element draws 5A at 220V. New power at 110V?",
        "hindi": "220V पर 5A धारा खींचने वाले हीटर का 110V पर नई शक्ति:"
      },
      "option": {
        "english": ["1100W", "550W", "275W", "2200W"],
        "hindi": ["1100W", "550W", "275W", "2200W"]
      },
      "answer": 1, 
      "image": null,
      "medium": "hard"
    },
  
    {
  "question_name": {
    "english": "Calculate the equivalent resistance between points A and B for the circuit shown.",
    "hindi": "दिखाए गए सर्किट के लिए A और B बिंदुओं के बीच तुल्य प्रतिरोध की गणना करें।"
  },
  "option": {
    "english": ["2Ω", "4Ω", "9Ω", "11Ω"],
    "hindi": ["2Ω", "4Ω", "9Ω", "11Ω"]
  },
  "answer": 1,
  "image": "https://cdn.jsdelivr.net/gh/happyexam063/happyexam-illustration@master/class10/question/electricity/level-2-question-10.png",
  "medium": "hard"
}
  ]




              
                           })

              //  here ReportQuetsion
              builder.addCase(createReportQuestion.pending, (state, action)=>{
              state.ReportLoading = true
              })

              builder.addCase(createReportQuestion.fulfilled, (state,action)=>{
                state.ReportLoading =  false
                state.ToggleReport = false
              
          })

          builder.addCase(createReportQuestion.rejected, (state,action)=>{
            state.ReportLoading =  false
            state.ToggleReport = false
             
          })
           

           }

        

  
})

export const {Height,ApiDataReducer,ExplanationOpenOrClose, questionAnalysis,ToggleReport} = happyexam.actions;
export default happyexam.reducer;