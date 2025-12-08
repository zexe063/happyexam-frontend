import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "../config/axiosInstance";




export const userSignup = createAsyncThunk(
  "userSignup",
 async(UsersignupData, {rejectWithValue})=>{
  try{
   const  response = await axios.post("/user/signup", UsersignupData);
   
     return response
  } 
  catch(err){
    return  rejectWithValue(err); 
  }
  
     
 }
)

export const userVerify =  createAsyncThunk(
  "userVerify",
  async(_, {rejectWithValue})=>{
    try{
      const response = await axios.get("/user/verify");
       return response;
    }
    catch(err){
    return  rejectWithValue(err)
    }
  }
)
export const userLogin = createAsyncThunk(
  "userLogin",
 async(UserloginData, {rejectWithValue})=>{

  try{

   const  response = await axios.post("/user/login", UserloginData);
    return response
  }
  catch(err){ 
   return rejectWithValue(err);
  }


 }
)

export const userProgressEvent = createAsyncThunk(
  "userProgressEvent",
  async(userProgressEventData, {rejectWithValue})=>{
  try{
   const  response = await axios.put("/user/progress/event", userProgressEventData);
    return response
  }
  catch(err){
       return rejectWithValue(err);
  }
}
)
export const userProfile =  createAsyncThunk(
  "userProfile",
  async(userProfileData, {rejectWithValue})=>{
    try{
 const response = await axios.put("/user/profile", userProfileData);
return response;
    }
    catch(err){
      return rejectWithValue(err)
    }
   }
  
)

export const userPassword =  createAsyncThunk(
  "userPassword",
  async (userPasswordData, {rejectWithValue})=>{
    try{
     const response =  await axios.put('/user/password', userPasswordData);
     return response;
    }
    catch(err){
    
      return rejectWithValue(err)
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
            state.user  = action.payload.data.result
        })
         builder.addCase(userSignup.rejected, (state,action)=>{
           
           
         })
        
         builder.addCase(userVerify.fulfilled, (state,action)=>{
          state.user = action.payload.data.result;
         })


        builder.addCase(userLogin.fulfilled, (state,action)=>{
           state.user = action.payload.data.result;
           
        })
      

        builder.addCase(userProgressEvent.fulfilled,(state,action)=>{
            Object.assign(state.user, action.payload.data.result);
         
        })

         builder.addCase(userProfile.fulfilled, (state, action)=>{
           Object.assign(state.user, action.payload.data.result);
          
         })
         
          
        
    }
})

export const  {  getUser, ToggleSetting, increaseHEP, UserAvatarSave} = auth.actions

export default auth.reducer;