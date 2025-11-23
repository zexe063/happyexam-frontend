import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../config/axiosInstance";




export const userSignup = createAsyncThunk(
  "userSignup",
 async(UsersignupData, {rejectWithValue})=>{
  try{
   const  data = await axios.post("/user/signup", UsersignupData);
     return data.data;
  } 
  catch(err){
    return rejectWithValue(err.response.data || {err:"Something went wrong"});  
  }
  
     
 }
)
export const userLogin = createAsyncThunk(
  "userLogin",
 async(UserloginData, {rejectWithValue})=>{

  try{

   const  data = await axios.post("/user/login", UserloginData);
    return data.data;
  }
  catch(err){ 
   return rejectWithValue(err?.response?.data);
  }


 }
)

export const userProgressEvent = createAsyncThunk(
  "userProgressEvent",
  async(userProgressEventData, {rejectWithValue})=>{
  try{
   const  {data} = await axios.put("/user/progress/event", userProgressEventData);
    return data.response
  }
  catch(err){
       return rejectWithValue(err.response.data);
  }
}
)




const auth = createSlice({
    name:"auth",
    initialState:{
        user:{}
    },
    reducers:{
      getUser: (state,action)=>{
       state.user = action.payload
      },

      ToggleSetting:(state,action)=>{
        state.user.language = action.payload
         },

         increaseHEP:(state,action)=>{
          state.user.HEP +=  action.payload
         },


         UserAvatarSave:(state,action)=>{
         state.user.avatar =  action.payload;
         }
         
    },

    extraReducers:(builder)=>{

        builder.addCase(userSignup.fulfilled, (state,action)=>{
            state.user  = action.payload;
        })
         builder.addCase(userSignup.rejected, (state,action)=>{
           
           
         })

        
        builder.addCase(userLogin.fulfilled, (state,action)=>{
           state.user = action.payload;
           
        })
         builder.addCase(userLogin.rejected, (state,action)=>{
           
         })

        builder.addCase(userProgressEvent.fulfilled,(state,action)=>{
            Object.assign(state.user, action.payload);
         
        })

         builder.addCase(userProgressEvent.rejected,(state,action)=>{
         })
    }
})

export const  {  getUser, ToggleSetting, increaseHEP, UserAvatarSave} = auth.actions

export default auth.reducer;