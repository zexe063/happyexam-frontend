
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
              state.question =  
[ 
    {
      "question_name": {
        "english": "Which device measures electric current?",
        "hindi": "विद्युत धारा को कौन सा उपकरण मापता है?"
      },
      "option": {
        "english": ["Voltmeter", "Ammeter", "Ohmmeter", "Galvanometer"],
        "hindi": ["वोल्टमीटर", "एमीटर", "ओममीटर", "गैल्वेनोमीटर"]
      },
      "answer": 1,
      "image": null,
      "medium": "easy"
    },
  
    {
      "question_name": {
        "english": "What is the relationship between voltage (V), current (I), and resistance (R) according to Ohm's law?",
        "hindi": "ओम के नियम के अनुसार वोल्टेज (V), करंट (I), और प्रतिरोध (R) के बीच क्या संबंध है?"
      },
      "option": {
        "english": ["V = I × R", "V = I ÷ R", "R = V × I", "I = V × R"],
        "hindi": ["V = I × R", "V = I ÷ R", "R = V × I", "I = V × R"]
      },
      "answer": 0,
      "image": null,
      "medium": "easy"
    },
    {
      "question_name": {
        "english": "What is the SI unit of electrical resistance?",
        "hindi": "विद्युत प्रतिरोध की SI इकाई क्या है?"
      },
      "option": {
        "english": ["Volt", "Ampere", "Ohm", "Watt"],
        "hindi": ["वोल्ट", "एम्पीयर", "ओम", "वाट"]
      },
      "answer": 2,
      "image": null,
      "medium": "easy"
    },
    {
      "question_name": {
        "english": "What is the purpose of an electric fuse in a circuit?",
        "hindi": "सर्किट में विद्युत फ्यूज का क्या उद्देश्य है?"
      },
      "option": {
        "english": ["Increase current flow", "Store electricity", "Reduce voltage", "Protect from excess current"],
        "hindi": ["करंट बढ़ाएं", "बिजली स्टोर करें", "वोल्टेज कम करें", "अधिक करंट से बचाएं"]
      },
      "answer": 3,
      "image": null,
      "medium": "easy"
    },
    {
      "question_name": {
        "english": "Which of these affects the resistance of a conductor?",
        "hindi": "चालक के प्रतिरोध को कौन प्रभावित करता है?"
      },
      "option": {
        "english": ["Only length", "All of these", "Only temperature", "Only cross-sectional area"],
        "hindi": ["केवल लंबाई", "ये सभी", "केवल तापमान", "केवल अनुप्रस्थ काट"]
      },
      "answer": 1,
      "image": null,
      "medium": "easy"
    },
    {
      "question_name": {
        "english": "Three 2Ω resistors in parallel: effective resistance?",
        "hindi": "2Ω के तीन प्रतिरोधक समानांतर में: प्रभावी प्रतिरोध?"
      },
      "option": {
        "english": ["6Ω",  "3Ω",  "2/3Ω", "1Ω"],
        "hindi": ["6Ω", "3Ω", "2/3Ω", "1Ω"]
      },
      "answer": 2,
      "image": "https://cdn.jsdelivr.net/gh/happyexam063/happyexam-illustration@master/class10/question/electricity/level-1-question-7.png",
      "medium": "medium"
    },
    {
      "question_name": {
        "english": "Potential difference across 5Ω resistor with 2A current?",
        "hindi": "5Ω प्रतिरोधक में 2A धारा पर विभवांतर?"
      },
      "option": {
        "english": ["10V", "12V", "15V", "7V"],
        "hindi": ["10V", "12V", "15V", "7V"]
      },
      "answer": 0,
      "image": null,
      "medium": "medium"
    },
    {
      "question_name": {
        "english": "Power consumed by a 3A device at 12V?",
        "hindi": "12V पर 3A उपकरण की शक्ति खपत?"
      },
      "option": {
        "english": ["24W", "15W", "48W", "36W"],
        "hindi": ["24W", "15W", "48W", "36W"]
      },
      "answer": 3,
      "image": null,
      "medium": "medium"
    },
    {
      "question_name": {
        "english": "Voltage across each resistor in parallel (6Ω, 36W)?",
        "hindi": "समानांतर में प्रत्येक 6Ω प्रतिरोधक पर वोल्टेज (36W)?"
      },
      "option": {
        "english": ["6V", "18V", "12V",  "24V"],
        "hindi": ["6V", "18V", "12V", "24V"]
      },
      "answer": 1,
      "image": "https://cdn.jsdelivr.net/gh/happyexam063/happyexam-illustration@master/class10/question/electricity/level-1-question-9.png",
      "medium": "hard"
    },
    {
      "question_name": {
        "english": "Total current in parallel circuit (R₁=4Ω, R₂=6Ω, 12V)?",
        "hindi": "समानांतर सर्किट में कुल धारा (R₁=4Ω, R₂=6Ω, 12V)?"
      },
      "option": {
        "english": ["2A", "3A", "5A", "7A"],
        "hindi": ["2A", "3A", "5A", "7A"]
      },
      "answer": 2,
      "image": null,
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