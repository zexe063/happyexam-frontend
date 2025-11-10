
import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit"
 import axios from "axios"
import {useSelector} from 'react-redux'

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
  async({class_name,subject_name, chapter_name}, thunkAPI)=>{
    const state  = thunkAPI.getState();
    const LevelCompleted = state.auth.user.LevelCompleted;
    const LevelData = await axios.get(`https://happyexambackend2-0.vercel.app/level/${class_name}/${subject_name}/${chapter_name}`)
  
   const chapter =  LevelCompleted.find((item)=> item.chapterId === LevelData.data[0].chapterId)?.levels || []
   const NewLevel = LevelData.data.map((level)=>{
  return {...level, isCompleted: chapter.includes(level._id )}
   })

   for(let i=0; i<NewLevel.length;i++){
     if(!NewLevel[i]?.isCompleted) {
         NewLevel[i] = {...NewLevel[i], isSolveable:true}
         break;
     }
   }

   console.log(NewLevel)

   
    
 
    
     return NewLevel
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