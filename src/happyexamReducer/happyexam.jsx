
import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../config/axiosInstance"

export const getRecommendedChapter = createAsyncThunk(
  "getRecommendedChapter",
  async(class_name)=>{
const HometData =  await axios.get(`/home/${class_name}`)
return HometData.data
  } 
)


export const getCourse = createAsyncThunk(
  "getCourse",
  async({class_name})=>{
    const CourseData = await axios.get(`/course/${class_name}`)
    return CourseData.data
  }
)

export const getLevel = createAsyncThunk(
  "getLevel",
  async({class_name,subject_name, chapter_name}, thunkAPI)=>{
    const LevelData = await axios.get(`/level/${class_name}/${subject_name}/${chapter_name}`, {withCredentials:true})

  return LevelData.data;
  } 
)

export const getQuestion = createAsyncThunk(
  "getQuestion",
  async({class_name,subject_name, chapter_name, level_name})=>{
    
    const QuestionData = await axios.get(`/question/${class_name}/${subject_name}/${chapter_name}/${level_name}`);
    return QuestionData.data;
  }
)

export const  createReportQuestion =   createAsyncThunk(
  "createReportQuetsion",
  async(ReportValue)=>{
    const  data = await axios.post("/ReportQuestion",{questionId:ReportValue.questionId, value:ReportValue.value});
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
                console.log(action.payload.length)
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

export const {Height,ApiDataReducer,ExplanationOpenOrClose, questionAnalysis,ToggleReport,SubscriptionModeToggle} = happyexam.actions;
export default happyexam.reducer;