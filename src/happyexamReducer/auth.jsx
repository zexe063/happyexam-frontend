import { createSlice } from "@reduxjs/toolkit";



const auth = createSlice({
    name:"auth",
    initialState:{
        user:{
          id:null,
          class:null,
          language: null,
          HappyPoints:0
    
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