
import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit"
 import axios from "axios"


export const getSubject = createAsyncThunk(
  "getSubject",
  async(classId)=>{
const SubjectData =  await axios.get(`https://happyexambackend2-0.vercel.app/subject/${classId}`)
return SubjectData.data
  } 
)


export const getChapter = createAsyncThunk(
  "getChapter",
  async({classId,subjectId})=>{
    const ChapterData = await axios.get(`https://happyexambackend2-0.vercel.app/chapter/${classId}/${subjectId}`)
    return ChapterData.data
  }
)

export const getLevel = createAsyncThunk(
  "getLevel",
  async({classId,subjectId, chapterId})=>{
    const LevelData = await axios.get(`https://happyexambackend2-0.vercel.app/level/${classId}/${subjectId}/${chapterId}`)
    return LevelData.data;
  }
)

export const getQuestion = createAsyncThunk(
  "getQuestion",
  async({classId,subjectId, chapterId, levelId})=>{
    const QuestionData = await axios.get(`https://happyexambackend2-0.vercel.app/question/${classId}/${subjectId}/${chapterId}/${levelId}`);
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

      welcomeData: [
        {ask:"select you langauge", key:"language", element:[{data:"english"},{data:"हिंदी"}]},
        {ask:"select you class",  key:"class", element:[{data:"10", available:false},{data:"12", available:true}]}
    ],
    explanation:false,
    Loading:false,
    ReportLoading:false,
    ToggleReport : false,
    ToggleSetting:false,
 questionAnalysis:{
    correct:0,
    wrong:0
  },
     subject :[],
     chapter:[{
      "question_name": {
        "english": "Voltage across each resistor in parallel (6Ω, 36W)?",
        "hindi": "समानांतर में प्रत्येक 6Ω प्रतिरोधक पर वोल्टेज (36W)?"
      },
      "option": {
        "english": ["6V", "18V", "12V",  "24V"],
        "hindi": ["6V", "18V", "12V", "24V"]
      },
      "answer": 1,
      "image": "<svg width='300' height='150' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='30' x2='250' y2='30' stroke='black'/><rect x='100' y='40' width='40' height='20' fill='none' stroke='black'/><rect x='100' y='80' width='40' height='20' fill='none' stroke='black'/><rect x='100' y='120' width='40' height='20' fill='none' stroke='black'/><line x1='50' y1='30' x2='50' y2='140' stroke='black'/><line x1='140' y1='50' x2='250' y2='50' stroke='black'/><line x1='140' y1='90' x2='250' y2='90' stroke='black'/><line x1='140' y1='130' x2='250' y2='130' stroke='black'/><text x='110' y='55'>6Ω</text><text x='110' y='95'>6Ω</text><text x='110' y='135'>6Ω</text></svg>",
      "medium": "hard"
    }],
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

            builder.addCase(getSubject.pending, (state,action)=>{
              state.Loading = true
            })

            builder.addCase(getSubject.fulfilled,(state,action)=>{
                state.subject = action.payload;
                state.Loading = false
            })
             builder.addCase(getSubject.rejected, (state,action)=>{
              state.Loading = false;
              state.subject = []
             })

            //  here chapter Start

            builder.addCase(getChapter.pending, (state,action)=>{
              state.Loading = true
            })

             builder.addCase(getChapter.fulfilled,(state,action)=>{
              state.chapter = action.payload
              state.Loading = false
             })

              builder.addCase(getChapter.rejected,(state,action)=>{
                
                state.Loading = false
                state.chapter = [];
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
                 state.question = [{
                  "question_name": {
                    "english": "Voltage across each resistor in parallel (6Ω, 36W)?",
                    "hindi": "समानांतर में प्रत्येक 6Ω प्रतिरोधक पर वोल्टेज (36W)?"
                  },
                  "option": {
                    "english": ["6V", "18V", "12V",  "24V"],
                    "hindi": ["6V", "18V", "12V", "24V"]
                  },
                  "answer": 1,
                  "image":  <svg width="300" height="200" viewBox="0 0 131 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 3H1V6H30V3Z" fill="#28B6F4"/>
                  <path d="M1 6V3C10.6 6.6 24.3333 4.5 30 3V6H1Z" fill="#095DA4"/>
                  <path d="M85 3H51V6H85V3Z" fill="#28B6F4"/>
                  <path d="M51 6V3C62.2552 6.6 78.3563 4.5 85 3V6H51Z" fill="#095DA4"/>
                  <path d="M130 4H105V7H130V4Z" fill="#28B6F4"/>
                  <path d="M105 7V4C113.276 7.6 125.115 5.5 130 4V7H105Z" fill="#095DA4"/>
                  <path d="M99.15 10C98.9492 9.99994 98.7543 9.92531 98.5961 9.78798C98.4379 9.65064 98.3256 9.4585 98.277 9.24209L97.1772 4.35865L95.4924 9.35207C95.4239 9.55045 95.3003 9.71947 95.1397 9.83473C94.979 9.94998 94.7895 10.0055 94.5985 9.99326C94.4076 9.98102 94.2251 9.90165 94.0774 9.76662C93.9298 9.63159 93.8245 9.4479 93.777 9.24209L92.49 3.52575L91.3632 5.53052C91.1985 5.82249 90.9105 6.00046 90.6 6.00046H87.9C87.6613 6.00046 87.4324 5.89512 87.2636 5.70761C87.0948 5.52009 87 5.26577 87 5.00058C87 4.73539 87.0948 4.48107 87.2636 4.29356C87.4324 4.10604 87.6613 4.0007 87.9 4.0007H90.1014L92.0868 0.471106C92.1805 0.304769 92.3161 0.172717 92.4768 0.0913988C92.6375 0.0100808 92.8162 -0.0169099 92.9906 0.0137882C93.1651 0.0444864 93.3275 0.131517 93.4577 0.26404C93.588 0.396562 93.6802 0.568721 93.723 0.759073L94.8228 5.64251L96.5076 0.649085C96.575 0.449222 96.6982 0.278564 96.8592 0.162072C97.0201 0.0455806 97.2104 -0.0106308 97.4022 0.00165987C97.594 0.0139505 97.7772 0.0940982 97.9251 0.23038C98.0729 0.366661 98.1776 0.551926 98.2239 0.759073L99.51 6.47541L100.637 4.47064C100.802 4.17868 101.089 4.0007 101.4 4.0007H104.1C104.218 4.0007 104.335 4.02656 104.444 4.07681C104.554 4.12706 104.653 4.20071 104.736 4.29356C104.82 4.3864 104.886 4.49663 104.931 4.61794C104.977 4.73925 105 4.86927 105 5.00058C105 5.13189 104.977 5.26191 104.931 5.38322C104.886 5.50453 104.82 5.61476 104.736 5.70761C104.653 5.80045 104.554 5.8741 104.444 5.92435C104.335 5.9746 104.218 6.00046 104.1 6.00046H101.899L99.9132 9.53006C99.8323 9.67386 99.7198 9.79245 99.5863 9.87466C99.4528 9.95687 99.3026 10 99.15 10Z" fill="#28B6F4"/>
                  <path d="M90.1765 6L92.2942 0.5H93.353L94.4049 8.9447L94.4118 9L97.5883 1L99.7059 8H98.6471L97.5883 4H96.5295L95.4706 9H94.4118L94.4049 8.9447L93.353 7V0.5L92.2942 3L91.2353 5L90.1765 6Z" fill="#095DA4"/>
                  <path d="M101.824 6V4L103.941 6H101.824Z" fill="#095DA4"/>
                  <path d="M90.1765 6V4L88.0588 6H90.1765Z" fill="#095DA4"/>
                  <path d="M85 8C83.346 8 82 6.654 82 5C82 3.346 83.346 2 85 2C86.654 2 88 3.346 88 5C88 6.654 86.654 8 85 8ZM85 4C84.7348 4 84.4804 4.10536 84.2929 4.29289C84.1054 4.48043 84 4.73478 84 5C84 5.26522 84.1054 5.51957 84.2929 5.70711C84.4804 5.89464 84.7348 6 85 6C85.2652 6 85.5196 5.89464 85.7071 5.70711C85.8946 5.51957 86 5.26522 86 5C86 4.73478 85.8946 4.48043 85.7071 4.29289C85.5196 4.10536 85.2652 4 85 4ZM107 8C105.346 8 104 6.654 104 5C104 3.346 105.346 2 107 2C108.654 2 110 3.346 110 5C110 6.654 108.654 8 107 8ZM107 4C106.735 4 106.48 4.10536 106.293 4.29289C106.105 4.48043 106 4.73478 106 5C106 5.26522 106.105 5.51957 106.293 5.70711C106.48 5.89464 106.735 6 107 6C107.265 6 107.52 5.89464 107.707 5.70711C107.895 5.51957 108 5.26522 108 5C108 4.73478 107.895 4.48043 107.707 4.29289C107.52 4.10536 107.265 4 107 4Z" fill="#28B6F4"/>
                  <circle cx="85" cy="5" r="1" fill="#095DA4"/>
                  <circle cx="107" cy="5" r="1" fill="#095DA4"/>
                  <path d="M44.15 10C43.9492 9.99994 43.7543 9.92531 43.5961 9.78798C43.4379 9.65064 43.3256 9.4585 43.277 9.24209L42.1772 4.35865L40.4924 9.35207C40.4239 9.55045 40.3003 9.71947 40.1397 9.83473C39.979 9.94998 39.7895 10.0055 39.5985 9.99326C39.4076 9.98102 39.2251 9.90165 39.0774 9.76662C38.9298 9.63159 38.8245 9.4479 38.777 9.24209L37.49 3.52575L36.3632 5.53052C36.1985 5.82249 35.9105 6.00046 35.6 6.00046H32.9C32.6613 6.00046 32.4324 5.89512 32.2636 5.70761C32.0948 5.52009 32 5.26577 32 5.00058C32 4.73539 32.0948 4.48107 32.2636 4.29356C32.4324 4.10604 32.6613 4.0007 32.9 4.0007H35.1014L37.0868 0.471106C37.1805 0.304769 37.3161 0.172717 37.4768 0.0913988C37.6375 0.0100808 37.8162 -0.0169099 37.9906 0.0137882C38.1651 0.0444864 38.3275 0.131517 38.4577 0.26404C38.588 0.396562 38.6802 0.568721 38.723 0.759073L39.8228 5.64251L41.5076 0.649085C41.575 0.449222 41.6982 0.278564 41.8592 0.162072C42.0201 0.0455806 42.2104 -0.0106308 42.4022 0.00165987C42.594 0.0139505 42.7772 0.0940982 42.9251 0.23038C43.0729 0.366661 43.1776 0.551926 43.2239 0.759073L44.51 6.47541L45.6368 4.47064C45.8015 4.17868 46.0895 4.0007 46.4 4.0007H49.1C49.2182 4.0007 49.3352 4.02656 49.4444 4.07681C49.5536 4.12706 49.6528 4.20071 49.7364 4.29356C49.82 4.3864 49.8863 4.49663 49.9315 4.61794C49.9767 4.73925 50 4.86927 50 5.00058C50 5.13189 49.9767 5.26191 49.9315 5.38322C49.8863 5.50453 49.82 5.61476 49.7364 5.70761C49.6528 5.80045 49.5536 5.8741 49.4444 5.92435C49.3352 5.9746 49.2182 6.00046 49.1 6.00046H46.8986L44.9132 9.53006C44.8323 9.67386 44.7198 9.79245 44.5863 9.87466C44.4528 9.95687 44.3026 10 44.15 10Z" fill="#28B6F4"/>
                  <path d="M35.1765 6L37.2942 0.5H38.353L39.4049 8.9447L39.4118 9L42.5883 1L44.7059 8H43.6471L42.5883 4H41.5295L40.4706 9H39.4118L39.4049 8.9447L38.353 7V0.5L37.2942 3L36.2353 5L35.1765 6Z" fill="#095DA4"/>
                  <path d="M46.8235 6V4L48.9412 6H46.8235Z" fill="#095DA4"/>
                  <path d="M35.1765 6V4L33.0588 6H35.1765Z" fill="#095DA4"/>
                  <path d="M30 8C28.346 8 27 6.654 27 5C27 3.346 28.346 2 30 2C31.654 2 33 3.346 33 5C33 6.654 31.654 8 30 8ZM30 4C29.7348 4 29.4804 4.10536 29.2929 4.29289C29.1054 4.48043 29 4.73478 29 5C29 5.26522 29.1054 5.51957 29.2929 5.70711C29.4804 5.89464 29.7348 6 30 6C30.2652 6 30.5196 5.89464 30.7071 5.70711C30.8946 5.51957 31 5.26522 31 5C31 4.73478 30.8946 4.48043 30.7071 4.29289C30.5196 4.10536 30.2652 4 30 4ZM52 8C50.346 8 49 6.654 49 5C49 3.346 50.346 2 52 2C53.654 2 55 3.346 55 5C55 6.654 53.654 8 52 8ZM52 4C51.7348 4 51.4804 4.10536 51.2929 4.29289C51.1054 4.48043 51 4.73478 51 5C51 5.26522 51.1054 5.51957 51.2929 5.70711C51.4804 5.89464 51.7348 6 52 6C52.2652 6 52.5196 5.89464 52.7071 5.70711C52.8946 5.51957 53 5.26522 53 5C53 4.73478 52.8946 4.48043 52.7071 4.29289C52.5196 4.10536 52.2652 4 52 4Z" fill="#28B6F4"/>
                  <circle cx="30" cy="5" r="1" fill="#095DA4"/>
                  <circle cx="52" cy="5" r="1" fill="#095DA4"/>
                  <path d="M29.4496 33H0V36H29.4496V33Z" fill="#28B6F4"/>
                  <path d="M0 36V33C9.74884 36.6 23.6951 34.5 29.4496 33V36H0Z" fill="#095DA4"/>
                  <path d="M85.3024 33H50.7753V36H85.3024V33Z" fill="#28B6F4"/>
                  <path d="M50.7753 36V33C62.2049 36.6 78.5557 34.5 85.3024 33V36H50.7753Z" fill="#095DA4"/>
                  <path d="M131 34H105.612V37H131V34Z" fill="#28B6F4"/>
                  <path d="M105.612 37V34C114.017 37.6 126.039 35.5 131 34V37H105.612Z" fill="#095DA4"/>
                  <path d="M99.6717 40C99.4679 39.9999 99.2699 39.9253 99.1092 39.788C98.9486 39.6506 98.8345 39.4585 98.7852 39.2421L97.6684 34.3587L95.9574 39.3521C95.8878 39.5504 95.7624 39.7195 95.5992 39.8347C95.4361 39.95 95.2436 40.0055 95.0497 39.9933C94.8558 39.981 94.6705 39.9016 94.5205 39.7666C94.3706 39.6316 94.2637 39.4479 94.2154 39.2421L92.9085 33.5258L91.7642 35.5305C91.597 35.8225 91.3045 36.0005 90.9892 36.0005H88.2473C88.0049 36.0005 87.7725 35.8951 87.6011 35.7076C87.4297 35.5201 87.3334 35.2658 87.3334 35.0006C87.3334 34.7354 87.4297 34.4811 87.6011 34.2936C87.7725 34.106 88.0049 34.0007 88.2473 34.0007H90.4829L92.499 30.4711C92.5941 30.3048 92.7319 30.1727 92.8951 30.0914C93.0583 30.0101 93.2398 29.9831 93.4169 30.0138C93.594 30.0445 93.759 30.1315 93.8912 30.264C94.0235 30.3966 94.1172 30.5687 94.1606 30.7591L95.2775 35.6425L96.9884 30.6491C97.0568 30.4492 97.1819 30.2786 97.3454 30.1621C97.5089 30.0456 97.7021 29.9894 97.8969 30.0017C98.0916 30.014 98.2777 30.0941 98.4278 30.2304C98.578 30.3667 98.6843 30.5519 98.7313 30.7591L100.037 36.4754L101.182 34.4706C101.349 34.1787 101.641 34.0007 101.957 34.0007H104.698C104.819 34.0007 104.937 34.0266 105.048 34.0768C105.159 34.1271 105.26 34.2007 105.345 34.2936C105.43 34.3864 105.497 34.4966 105.543 34.6179C105.589 34.7393 105.612 34.8693 105.612 35.0006C105.612 35.1319 105.589 35.2619 105.543 35.3832C105.497 35.5045 105.43 35.6148 105.345 35.7076C105.26 35.8005 105.159 35.8741 105.048 35.9244C104.937 35.9746 104.819 36.0005 104.698 36.0005H102.463L100.447 39.5301C100.365 39.6739 100.25 39.7924 100.115 39.8747C99.9792 39.9569 99.8268 40 99.6717 40Z" fill="#28B6F4"/>
                  <path d="M90.5591 36L92.7096 30.5H93.7848L94.853 38.9447L94.86 39L98.0858 31L100.236 38H99.161L98.0858 34H97.0105L95.9353 39H94.86L94.853 38.9447L93.7848 37V30.5L92.7096 33L91.6343 35L90.5591 36Z" fill="#095DA4"/>
                  <path d="M102.387 36V34L104.537 36H102.387Z" fill="#095DA4"/>
                  <path d="M90.559 36V34L88.4086 36H90.559Z" fill="#095DA4"/>
                  <path d="M85.3022 38C83.6226 38 82.2557 36.654 82.2557 35C82.2557 33.346 83.6226 32 85.3022 32C86.9819 32 88.3488 33.346 88.3488 35C88.3488 36.654 86.9819 38 85.3022 38ZM85.3022 34C85.0329 34 84.7746 34.1054 84.5842 34.2929C84.3937 34.4804 84.2867 34.7348 84.2867 35C84.2867 35.2652 84.3937 35.5196 84.5842 35.7071C84.7746 35.8946 85.0329 36 85.3022 36C85.5716 36 85.8299 35.8946 86.0203 35.7071C86.2108 35.5196 86.3178 35.2652 86.3178 35C86.3178 34.7348 86.2108 34.4804 86.0203 34.2929C85.8299 34.1054 85.5716 34 85.3022 34ZM107.643 38C105.964 38 104.597 36.654 104.597 35C104.597 33.346 105.964 32 107.643 32C109.323 32 110.69 33.346 110.69 35C110.69 36.654 109.323 38 107.643 38ZM107.643 34C107.374 34 107.116 34.1054 106.925 34.2929C106.735 34.4804 106.628 34.7348 106.628 35C106.628 35.2652 106.735 35.5196 106.925 35.7071C107.116 35.8946 107.374 36 107.643 36C107.913 36 108.171 35.8946 108.361 35.7071C108.552 35.5196 108.659 35.2652 108.659 35C108.659 34.7348 108.552 34.4804 108.361 34.2929C108.171 34.1054 107.913 34 107.643 34Z" fill="#28B6F4"/>
                  <ellipse cx="85.3022" cy="35" rx="1.0155" ry="1" fill="#095DA4"/>
                  <ellipse cx="107.643" cy="35" rx="1.0155" ry="1" fill="#095DA4"/>
                  <path d="M43.819 40C43.6151 39.9999 43.4171 39.9253 43.2565 39.788C43.0958 39.6506 42.9818 39.4585 42.9324 39.2421L41.8156 34.3587L40.1047 39.3521C40.0351 39.5504 39.9096 39.7195 39.7464 39.8347C39.5833 39.95 39.3908 40.0055 39.1969 39.9933C39.003 39.981 38.8177 39.9016 38.6677 39.7666C38.5178 39.6316 38.4109 39.4479 38.3627 39.2421L37.0557 33.5258L35.9114 35.5305C35.7442 35.8225 35.4517 36.0005 35.1364 36.0005H32.3945C32.1521 36.0005 31.9197 35.8951 31.7483 35.7076C31.5769 35.5201 31.4806 35.2658 31.4806 35.0006C31.4806 34.7354 31.5769 34.4811 31.7483 34.2936C31.9197 34.106 32.1521 34.0007 32.3945 34.0007H34.6301L36.6463 30.4711C36.7414 30.3048 36.8791 30.1727 37.0423 30.0914C37.2055 30.0101 37.387 29.9831 37.5641 30.0138C37.7412 30.0445 37.9062 30.1315 38.0384 30.264C38.1707 30.3966 38.2644 30.5687 38.3078 30.7591L39.4247 35.6425L41.1356 30.6491C41.204 30.4492 41.3291 30.2786 41.4926 30.1621C41.6561 30.0456 41.8493 29.9894 42.0441 30.0017C42.2388 30.014 42.4249 30.0941 42.575 30.2304C42.7252 30.3667 42.8315 30.5519 42.8785 30.7591L44.1845 36.4754L45.3288 34.4706C45.4961 34.1787 45.7885 34.0007 46.1038 34.0007H48.8457C48.9657 34.0007 49.0846 34.0266 49.1955 34.0768C49.3063 34.1271 49.4071 34.2007 49.492 34.2936C49.5768 34.3864 49.6442 34.4966 49.6901 34.6179C49.736 34.7393 49.7597 34.8693 49.7597 35.0006C49.7597 35.1319 49.736 35.2619 49.6901 35.3832C49.6442 35.5045 49.5768 35.6148 49.492 35.7076C49.4071 35.8005 49.3063 35.8741 49.1955 35.9244C49.0846 35.9746 48.9657 36.0005 48.8457 36.0005H46.6102L44.594 39.5301C44.5118 39.6739 44.3976 39.7924 44.262 39.8747C44.1264 39.9569 43.974 40 43.819 40Z" fill="#28B6F4"/>
                  <path d="M34.7064 36L36.8569 30.5H37.9321L39.0004 38.9447L39.0074 39L42.2331 31L44.3836 38H43.3083L42.2331 34H41.1579L40.0826 39H39.0074L39.0004 38.9447L37.9321 37V30.5L36.8569 33L35.7817 35L34.7064 36Z" fill="#095DA4"/>
                  <path d="M46.534 36V34L48.6844 36H46.534Z" fill="#095DA4"/>
                  <path d="M34.7064 36V34L32.5559 36H34.7064Z" fill="#095DA4"/>
                  <path d="M29.4496 38C27.7699 38 26.4031 36.654 26.4031 35C26.4031 33.346 27.7699 32 29.4496 32C31.1292 32 32.4961 33.346 32.4961 35C32.4961 36.654 31.1292 38 29.4496 38ZM29.4496 34C29.1803 34 28.922 34.1054 28.7315 34.2929C28.5411 34.4804 28.4341 34.7348 28.4341 35C28.4341 35.2652 28.5411 35.5196 28.7315 35.7071C28.922 35.8946 29.1803 36 29.4496 36C29.7189 36 29.9772 35.8946 30.1677 35.7071C30.3581 35.5196 30.4651 35.2652 30.4651 35C30.4651 34.7348 30.3581 34.4804 30.1677 34.2929C29.9772 34.1054 29.7189 34 29.4496 34ZM51.7907 38C50.111 38 48.7442 36.654 48.7442 35C48.7442 33.346 50.111 32 51.7907 32C53.4703 32 54.8372 33.346 54.8372 35C54.8372 36.654 53.4703 38 51.7907 38ZM51.7907 34C51.5213 34 51.263 34.1054 51.0726 34.2929C50.8822 34.4804 50.7752 34.7348 50.7752 35C50.7752 35.2652 50.8822 35.5196 51.0726 35.7071C51.263 35.8946 51.5213 36 51.7907 36C52.06 36 52.3183 35.8946 52.5087 35.7071C52.6992 35.5196 52.8062 35.2652 52.8062 35C52.8062 34.7348 52.6992 34.4804 52.5087 34.2929C52.3183 34.1054 52.06 34 51.7907 34Z" fill="#28B6F4"/>
                  <ellipse cx="29.4496" cy="35" rx="1.0155" ry="1" fill="#095DA4"/>
                  <ellipse cx="51.7908" cy="35" rx="1.0155" ry="1" fill="#095DA4"/>
                  <path d="M128 4V37H131V4H128Z" fill="#28B6F4"/>
                  <path d="M131 37H128C131.6 26.0759 129.5 10.4483 128 4H131V37Z" fill="#095DA4"/>
                  <path d="M0 3L0 36H3L3 3H0Z" fill="#28B6F4"/>
                  <path d="M3 36H0C3.6 25.0759 1.5 9.44828 0 3H3L3 36Z" fill="#095DA4"/>
                  </svg>
                  ,
                  

                  "medium": "hard"
                }]
                
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