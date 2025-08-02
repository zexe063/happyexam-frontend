import { createSlice } from "@reduxjs/toolkit";



const auth = createSlice({
    name:"auth",
    initialState:{
        user:{
          id:null,
          Firstname:null,
          Lastname:null,
          email:null,
          class:null,
          language: null,
          find:null,
          time:null,
          ExamKey:0,
          OnStreak:0,
          LongestStreak:0,
          HEP:0,
          
          
    
        }
    },
    reducers:{
      getUser: (state,action)=>{
       state.user = action.payload
      },
      ToggleSetting:(state,action)=>{
        state.user.language = action.payload
         },
         increaseHappyPoints:(state,action)=>{
          
          state.user.HappyPoints +=  action.payload
         }
         
    }
})

export const  { getUser, ToggleSetting, increaseHappyPoints} = auth.actions

export default auth.reducer;