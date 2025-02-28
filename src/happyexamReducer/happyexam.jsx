
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
     chapter:[],
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
                 state.level = []
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
                 state.question = []
              
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