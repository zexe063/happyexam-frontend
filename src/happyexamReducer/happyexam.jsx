
import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../config/axiosInstance"
import { data, Navigate } from "react-router-dom"




export const getCourse = createAsyncThunk(
  "getCourse",
  async({class_name}, {rejectWithValue})=>{

     if(!navigator.onLine)  {
        return  rejectWithValue({success:false, message:"Network Error"})
     }
   try{
     const CourseData = await axios.get(`/course/${class_name}`)
    return CourseData.data
   }catch(err){
     return  rejectWithValue(err?.response.data);
   }

  }
)

export const getLevel = createAsyncThunk(
  "getLevel",
  async({class_name,subject_name, chapter_name},{rejectWithValue})=>{

   if(!navigator.onLine)  {
        return  rejectWithValue({success:false, message:"Network Error"})
     }

 try{
     const LevelData = await axios.get(`/level/${class_name}/${subject_name}/${chapter_name}`)
  return LevelData.data;
 }
  catch(err){
      return rejectWithValue(err.response.data)
  }
  } 
)

export const getQuestion = createAsyncThunk(
  "getQuestion",
  async({class_name,subject_name, chapter_name, level_name}, rejectWithValue)=>{
    
      if(!navigator.onLine)  {
        return  rejectWithValue({success:false, message:"Network Error"})
     }
  try{
      const QuestionData = await axios.get(`/question/${class_name}/${subject_name}/${chapter_name}/${level_name}`);
    return QuestionData.data; 
  }
   catch(err){
    return rejectWithValue(err.response.data);
   }
  }
)

export const  createReportQuestion =   createAsyncThunk(
  "createReportQuetsion",
  async(ReportValue,{rejectWithValue})=>{
    try{
      const  data = await axios.post("/ReportQuestion",{questionId:ReportValue.questionId, value:ReportValue.value});
    }
    catch(err){
     return  rejectWithValue(err.response.data)
    }
      
    
  }
)
const happyexam = createSlice({
    name:"happyexam",

    initialState:{

     
    explanation:false,
    Loading:false,
     isServerError:false,
    ReportLoading:false,
    ToggleReport : false,
    ToggleSetting:false,
    ToggleSubscription: false,
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
         
              SubscriptionModeToggle:(state,action)=>{
            state.user.ToggleSubscription = false
         }
           
          },

           extraReducers:(builder)=>{
          

            //  here chapter Start

            builder.addCase(getCourse.pending, (state,action)=>{
              state.Loading = true
            })

             builder.addCase(getCourse.fulfilled,(state,action)=>{
              state.course = action.payload;
              state.Loading = false
               state.isServerError = false
             })

              builder.addCase(getCourse.rejected,(state,action)=>{
                state.course = []
                state.Loading = false
                 state.isServerError = true
                
              })

             
            //  getLevel start here

             builder.addCase(getLevel.pending,(state,action)=>{
                 state.Loading = true
              })

             builder.addCase(getLevel.fulfilled,(state,action)=>{
               
              state.level = action.payload
               state.Loading = false
              state.isServerError = false;
              
             })
               builder.addCase(getLevel.rejected,(state,action)=>{
                state.level = []
                 state.Loading = false;
                 state.isServerError = true
                
               })
              
              //  quetsion Reducer start

               builder.addCase(getQuestion.pending, (state,action)=>{
                 state.Loading = true;
               })

              builder.addCase(getQuestion.fulfilled,(state,action)=>{
                state.question = action.payload;
                state.Loading = false
                 state.isServerError =false
               
              })
               builder.addCase(getQuestion.rejected, (state,action)=>{
                 state.Loading = false;
              state.question = [
  {
    "question_name": {
      "english": "Express $180$ as a product of its prime factors.",
      "hindi": "$180$ को इसके अभाज्य गुणनखंडों के गुणनफल के रूप में व्यक्त कीजिए।"
    },
    "option": {
      "english": [
        "$2 \\times 3^{3} \\times 5$",
        "$675$",
        "$333$",
        "$2^{2} \\times 3^{2} \\times 5$"
      ],
      "hindi": [
        "$2 \\times 3^{3} \\times 5$",
        "$675$",
        "$333$",
        "$2^{2} \\times 3^{2} \\times 5$"
      ]
    },
    "answer": 3,
    "solution": [
      {
        "step": 1,
        "terms": {
          "english": "Perform prime factorization of $180$.",
          "hindi": "$180$ का अभाज्य गुणनखंडन करें।"
        },
        "value": null
      },
      {
        "step": 2,
        "terms": {
          "english": "$180 = 2^{2} \\times 3^{2} \\times 5$",
          "hindi": "$180 = 2^{2} \\times 3^{2} \\times 5$"
        },
        "value": null
      }
    ],
    "explanation": null,
    "medium": "Bilingual",
    "image": null,
    "question_type": "MCQ",
    "level_number": 1,
    "levelId": "2571e53a48f74aea0205c7d9"
  },
  {
    "question_name": {
      "english": "Find the LCM of $17$ and $20$.",
      "hindi": "$17$ और $20$ का लघुत्तम समापवर्त्य (LCM) ज्ञात कीजिए।"
    },
    "option": {
      "english": [
        "$340$",
        "$296$",
        "$109$",
        "$174$"
      ],
      "hindi": [
        "$340$",
        "$296$",
        "$109$",
        "$174$"
      ]
    },
    "answer": 0,
    "solution": [
      {
        "step": 1,
        "terms": {
          "english": "Prime factorization of $17$: $17$",
          "hindi": "$17$ का अभाज्य गुणनखंड: $17$"
        },
        "value": null
      },
      {
        "step": 2,
        "terms": {
          "english": "Prime factorization of $20$: $2^{2} \\times 5$",
          "hindi": "$20$ का अभाज्य गुणनखंड: $2^{2} \\times 5$"
        },
        "value": null
      },
      {
        "step": 3,
        "terms": {
          "english": "LCM is the product of the greatest power of each prime factor: $340$",
          "hindi": "LCM प्रत्येक अभाज्य गुणनखंड की सबसे बड़ी घात का गुणनफल है: $340$"
        },
        "value": null
      }
    ],
    "explanation": null,
    "medium": "Bilingual",
    "image": null,
    "question_type": "MCQ",
    "level_number": 1,
    "levelId": "2571e53a48f74aea0205c7d9"
  },
  {
    "question_name": {
      "english": "The decimal expansion of the rational number $\\frac{7}{25}$ will be:",
      "hindi": "परिमेय संख्या $\\frac{7}{25}$ का दशमलव प्रसार होगा:"
    },
    "option": {
      "english": [
        "Terminating",
        "Non-terminating repeating",
        "Non-terminating non-repeating",
        "None of these"
      ],
      "hindi": [
        "सांत",
        "असांत आवर्ती",
        "असांत अनावर्ती",
        "इनमें से कोई नहीं"
      ]
    },
    "answer": 0,
    "explanation": {
      "english": "The denominator is of the form $2^n 5^m$, so it is terminating.",
      "hindi": "हर $2^n 5^m$ के रूप का है, इसलिए यह सांत है।"
    },
    "solution": null,
    "medium": "Bilingual",
    "image": null,
    "question_type": "MCQ",
    "level_number": 1,
    "levelId": "2571e53a48f74aea0205c7d9"
  },
  {
    "question_name": {
      "english": "Find the LCM of $27$ and $13$.",
      "hindi": "$27$ और $13$ का लघुत्तम समापवर्त्य (LCM) ज्ञात कीजिए।"
    },
    "option": {
      "english": [
        "$351$",
        "$270$",
        "$137$",
        "$263$"
      ],
      "hindi": [
        "$351$",
        "$270$",
        "$137$",
        "$263$"
      ]
    },
    "answer": 0,
    "solution": [
      {
        "step": 1,
        "terms": {
          "english": "Prime factorization of $27$: $3^{3}$",
          "hindi": "$27$ का अभाज्य गुणनखंड: $3^{3}$"
        },
        "value": null
      },
      {
        "step": 2,
        "terms": {
          "english": "Prime factorization of $13$: $13$",
          "hindi": "$13$ का अभाज्य गुणनखंड: $13$"
        },
        "value": null
      },
      {
        "step": 3,
        "terms": {
          "english": "LCM is the product of the greatest power of each prime factor: $351$",
          "hindi": "LCM प्रत्येक अभाज्य गुणनखंड की सबसे बड़ी घात का गुणनफल है: $351$"
        },
        "value": null
      }
    ],
    "explanation": null,
    "medium": "Bilingual",
    "image": null,
    "question_type": "MCQ",
    "level_number": 1,
    "levelId": "2571e53a48f74aea0205c7d9"
  },
  {
    "question_name": {
      "english": "Find the LCM of $9$ and $12$.",
      "hindi": "$9$ और $12$ का लघुत्तम समापवर्त्य (LCM) ज्ञात कीजिए।"
    },
    "option": {
      "english": [
        "$64$",
        "$14$",
        "$65$",
        "$36$"
      ],
      "hindi": [
        "$64$",
        "$14$",
        "$65$",
        "$36$"
      ]
    },
    "answer": 3,
    "solution": [
      {
        "step": 1,
        "terms": {
          "english": "Prime factorization of $9$: $3^{2}$",
          "hindi": "$9$ का अभाज्य गुणनखंड: $3^{2}$"
        },
        "value": null
      },
      {
        "step": 2,
        "terms": {
          "english": "Prime factorization of $12$: $2^{2} \\times 3$",
          "hindi": "$12$ का अभाज्य गुणनखंड: $2^{2} \\times 3$"
        },
        "value": null
      },
      {
        "step": 3,
        "terms": {
          "english": "LCM is the product of the greatest power of each prime factor: $36$",
          "hindi": "LCM प्रत्येक अभाज्य गुणनखंड की सबसे बड़ी घात का गुणनफल है: $36$"
        },
        "value": null
      }
    ],
    "explanation": null,
    "medium": "Bilingual",
    "image": null,
    "question_type": "MCQ",
    "level_number": 1,
    "levelId": "2571e53a48f74aea0205c7d9"
  },
  {
    "question_name": {
      "english": "Find the LCM of $20$ and $30$.",
      "hindi": "$20$ और $30$ का लघुत्तम समापवर्त्य (LCM) ज्ञात कीजिए।"
    },
    "option": {
      "english": [
        "$107$",
        "$60$",
        "$596$",
        "$336$"
      ],
      "hindi": [
        "$107$",
        "$60$",
        "$596$",
        "$336$"
      ]
    },
    "answer": 1,
    "solution": [
      {
        "step": 1,
        "terms": {
          "english": "Prime factorization of $20$: $2^{2} \\times 5$",
          "hindi": "$20$ का अभाज्य गुणनखंड: $2^{2} \\times 5$"
        },
        "value": null
      },
      {
        "step": 2,
        "terms": {
          "english": "Prime factorization of $30$: $2 \\times 3 \\times 5$",
          "hindi": "$30$ का अभाज्य गुणनखंड: $2 \\times 3 \\times 5$"
        },
        "value": null
      },
      {
        "step": 3,
        "terms": {
          "english": "LCM is the product of the greatest power of each prime factor: $60$",
          "hindi": "LCM प्रत्येक अभाज्य गुणनखंड की सबसे बड़ी घात का गुणनफल है: $60$"
        },
        "value": null
      }
    ],
    "explanation": null,
    "medium": "Bilingual",
    "image": null,
    "question_type": "MCQ",
    "level_number": 1,
    "levelId": "2571e53a48f74aea0205c7d9"
  },
  {
    "question_name": {
      "english": "The number $7 \\times 11 \\times 13 + 13$ is:",
      "hindi": "संख्या $7 \\times 11 \\times 13 + 13$ है:"
    },
    "option": {
      "english": [
        "Prime number",
        "Composite number",
        "Irrational number",
        "None of these"
      ],
      "hindi": [
        "अभाज्य संख्या",
        "भाज्य संख्या",
        "अपरिमेय संख्या",
        "इनमें से कोई नहीं"
      ]
    },
    "answer": 1,
    "explanation": {
      "english": "The expression can be written as $13(7 \\times 11 + 1)$, which means it has factors other than 1 and itself. So it is composite.",
      "hindi": "व्यंजक को $13(7 \\times 11 + 1)$ के रूप में लिखा जा सकता है, जिसका अर्थ है कि इसके 1 और स्वयं के अलावा अन्य गुणनखंड हैं। अतः यह भाज्य है।"
    },
    "solution": null,
    "medium": "Bilingual",
    "image": null,
    "question_type": "MCQ",
    "level_number": 1,
    "levelId": "2571e53a48f74aea0205c7d9"
  },
  {
    "question_name": {
      "english": "The number $7 \\times 11 \\times 13 + 13$ is:",
      "hindi": "संख्या $7 \\times 11 \\times 13 + 13$ है:"
    },
    "option": {
      "english": [
        "Prime number",
        "Composite number",
        "Irrational number",
        "None of these"
      ],
      "hindi": [
        "अभाज्य संख्या",
        "भाज्य संख्या",
        "अपरिमेय संख्या",
        "इनमें से कोई नहीं"
      ]
    },
    "answer": 1,
    "explanation": {
      "english": "The expression can be written as $13(7 \\times 11 + 1)$, which means it has factors other than 1 and itself. So it is composite.",
      "hindi": "व्यंजक को $13(7 \\times 11 + 1)$ के रूप में लिखा जा सकता है, जिसका अर्थ है कि इसके 1 और स्वयं के अलावा अन्य गुणनखंड हैं। अतः यह भाज्य है।"
    },
    "solution": null,
    "medium": "Bilingual",
    "image": null,
    "question_type": "MCQ",
    "level_number": 1,
    "levelId": "2571e53a48f74aea0205c7d9"
  },
  {
    "question_name": {
      "english": "Express $114$ as a product of its prime factors.",
      "hindi": "$114$ को इसके अभाज्य गुणनखंडों के गुणनफल के रूप में व्यक्त कीजिए।"
    },
    "option": {
      "english": [
        "$3^{2} \\times 19$",
        "$2 \\times 3 \\times 19$",
        "$669$",
        "$915$"
      ],
      "hindi": [
        "$3^{2} \\times 19$",
        "$2 \\times 3 \\times 19$",
        "$669$",
        "$915$"
      ]
    },
    "answer": 1,
    "solution": [
      {
        "step": 1,
        "terms": {
          "english": "Perform prime factorization of $114$.",
          "hindi": "$114$ का अभाज्य गुणनखंडन करें।"
        },
        "value": null
      },
      {
        "step": 2,
        "terms": {
          "english": "$114 = 2 \\times 3 \\times 19$",
          "hindi": "$114 = 2 \\times 3 \\times 19$"
        },
        "value": null
      }
    ],
    "explanation": null,
    "medium": "Bilingual",
    "image": null,
    "question_type": "MCQ",
    "level_number": 1,
    "levelId": "2571e53a48f74aea0205c7d9"
  },
  {
    "question_name": {
      "english": "Find the HCF of $71$ and $45$.",
      "hindi": "$71$ और $45$ का महत्तम समापवर्तक (HCF) ज्ञात कीजिए।"
    },
    "option": {
      "english": [
        "$11$",
        "$14$",
        "$8$",
        "$1$"
      ],
      "hindi": [
        "$11$",
        "$14$",
        "$8$",
        "$1$"
      ]
    },
    "answer": 3,
    "solution": [
      {
        "step": 1,
        "terms": {
          "english": "Prime factorization of $71$: $71$",
          "hindi": "$71$ का अभाज्य गुणनखंड: $71$"
        },
        "value": null
      },
      {
        "step": 2,
        "terms": {
          "english": "Prime factorization of $45$: $3^{2} \\times 5$",
          "hindi": "$45$ का अभाज्य गुणनखंड: $3^{2} \\times 5$"
        },
        "value": null
      },
      {
        "step": 3,
        "terms": {
          "english": "HCF is the product of the smallest power of each common prime factor: $1$",
          "hindi": "HCF प्रत्येक उभयनिष्ठ अभाज्य गुणनखंड की सबसे छोटी घात का गुणनफल है: $1$"
        },
        "value": null
      }
    ],
    "explanation": null,
    "medium": "Bilingual",
    "image": null,
    "question_type": "MCQ",
    "level_number": 1,
    "levelId": "2571e53a48f74aea0205c7d9"
  }
        ]
          state.isServerError = true
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

export const {Height,ApiDataReducer,ExplanationOpenOrClose, questionAnalysis,ToggleReport,SubscriptionModeToggle} = happyexam.actions;
export default happyexam.reducer;