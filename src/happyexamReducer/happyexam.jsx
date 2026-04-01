
import {  createAsyncThunk, createSlice , createAction} from "@reduxjs/toolkit"
import axios from "../config/axiosInstance"
 import { userVerify } from "./auth"





export const getCourse = createAsyncThunk(
  "getCourse",
  async({class_name}, {rejectWithValue})=>{
   try{
     const CourseData = await axios.get(`/course/${class_name}`)
    return CourseData
   }catch(err){
     return  rejectWithValue(err);
   }

  }
)

export const getLevel = createAsyncThunk(
  "getLevel",
  async({class_name,subject_name, chapter_name},{rejectWithValue})=>{

 try{
     const LevelData = await axios.get(`/level/${class_name}/${subject_name}/${chapter_name}`)

     return LevelData;
 }
  catch(err){
    console.log(err)
      return rejectWithValue(err)
  }
  } 
)

export const getQuestion = createAsyncThunk(
  "getQuestion",
  async({class_name,subject_name, chapter_name, level_name}, rejectWithValue)=>{
    
  try{
    const QuestionData = await axios.get(`/question/${class_name}/${subject_name}/${chapter_name}/${level_name}`);
    return QuestionData;
  }
   catch(err){
    return rejectWithValue(err);
   }
  }
)

export const  createReportQuestion =   createAsyncThunk(
  "createReportQuetsion",
  async(ReportValue,{rejectWithValue})=>{
    try{
      const  response = await axios.post("/ReportQuestion",ReportValue);
      return response;
    }
    catch(err){
     return  rejectWithValue(err);
    }
      
    
  }
)
const happyexam = createSlice({
    name:"happyexam",

    initialState:{

    explanation:false,
    Loading:false,
    isUserVerified:false,
    isNetworkError:false,
    isServerError:false,
    ToggleReport : false,
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
          
           ToggleReport:(state,action)=>{
            state.ToggleReport =  action.payload
           },
         
              SubscriptionModeToggle:(state,action)=>{
            state.user.ToggleSubscription = false
         }
        
           
          },

           extraReducers:(builder)=>{
        
              builder.addCase(userVerify.pending,(state,action)=>{
                  state.Loading = true
              })   
               builder.addCase(userVerify.fulfilled, (state,action)=>{
                state.isUserVerified =true
                 state.Loading = false
               })    
                builder.addCase(userVerify.rejected,(state,actin)=>{
                 state.Loading = false
                 state.isUserVerified = false;
                })
   
            builder.addCase(getCourse.pending, (state,action)=>{
              state.Loading = true
              state.isNetworkError = false;
              state.isServerError = false
            })

             builder.addCase(getCourse.fulfilled,(state,action)=>{
              state.course = action.payload?.data?.result || []
              state.Loading = false
              state.isNetworkError= false
               state.isServerError = false
               

             })

              builder.addCase(getCourse.rejected,(state,action)=>{
                state.course = []
                state.Loading = false
                if(action.payload?.status === 0) state.isNetworkError = true
                else state.isServerError =  true;  
                
              })

             
            //  getLevel start here

             builder.addCase(getLevel.pending,(state,action)=>{
                 state.Loading = true
                 state.isNetworkError = false;
                 state.isServerError = false;
              })

             builder.addCase(getLevel.fulfilled,(state,action)=>{
               
              state.level = action.payload?.data?.result || []
              state.Loading = false
              state.isNetworkError = false
              state.isServerError = false;
              
             })
               builder.addCase(getLevel.rejected,(state,action)=>{
                state.level = []
                state.Loading = false;
                if(action.payload?.status === 0) state.isNetworkError = true
                else state.isServerError =  true;  
                
               })
              
              //  quetsion Reducer start

               builder.addCase(getQuestion.pending, (state,action)=>{
                 state.Loading = true;
                 state.isNetworkError = false;
                 state.isServerError = false
                
               })

              builder.addCase(getQuestion.fulfilled,(state,action)=>{
                state.question = action.payload?.data?.result.map((item)=> ({...item , isAttempt:false, optionSelectedIndex:null})) || []
                state.Loading = false
                state.isUserVerified = false;
                state.isNetworkError = false;
                state.isServerError =false;
               
              })
               builder.addCase(getQuestion.rejected, (state,action)=>{
              state.Loading = false;
              state.question =  []
              if(action.payload?.status === 0) state.isNetworkError = true
              else state.isServerError =  true;  
       })

              //  here ReportQuetsion
      
              builder.addCase(createReportQuestion.fulfilled, (state,action)=>{
                state.ToggleReport = false
              
          })

          builder.addCase(createReportQuestion.rejected, (state,action)=>{
            state.ToggleReport = false
             
          })
           

           }

        

  
})

export const {Height,ApiDataReducer,ExplanationOpenOrClose, questionAnalysis,ToggleReport,SubscriptionModeToggle} = happyexam.actions;
export default happyexam.reducer;