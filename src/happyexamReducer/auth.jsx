import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../config/axiosInstance";




export const userSignup = createAsyncThunk(
  "userSignup",
 async(UsersignupData)=>{
   const  data = await axios.post("/user/signup", UsersignupData);
    if(data.status === 200) return data.data;
     else{
  alert("something went wrong.please try again later?")
 }
 }
)
export const userLogin = createAsyncThunk(
  "userLogin",
 async(UserloginData)=>{
   const  data = await axios.post("/user/login", UserloginData, {withCredentials:true});
    if(data.status === 200) return data.data;
    else alert("something went wrong.please try again later?")
 
 }
)

export const userProgressEvent = createAsyncThunk(
  "userProgressEvent",
  async(userProgressEventData)=>{
    const data = await axios.put("/user/progress/event", userProgressEventData);
    
   if(data.status === 200) return data.data.response;
    else alert("something went wrong.please try again later?")
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
       builder.addCase(userSignup.pending, (state,action)=>{
        
       })

        builder.addCase(userSignup.fulfilled, (state,action)=>{
            state.user  = action.payload;
        })
         builder.addCase(userSignup.rejected, (state,action, err)=>{
           console.log(err)
           
         })

           builder.addCase(userLogin.pending, (state,action)=>{
        
       })

        builder.addCase(userLogin.fulfilled, (state,action)=>{
           state.user = action.payload;
           
        })
         builder.addCase(userLogin.rejected, (state,action, err)=>{
           console.log(err)
           
         })

        builder.addCase(userProgressEvent.fulfilled,(state,action)=>{
          state.user = action.payload || state.user;
         

        })

         builder.addCase(userProgressEvent.rejected,(state,action,err)=>{
          console.log(err)
         })
    }
})

export const  {  getUser, ToggleSetting, increaseHEP, UserAvatarSave} = auth.actions

export default auth.reducer;