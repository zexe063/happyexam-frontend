import { createSlice } from "@reduxjs/toolkit";



const auth = createSlice({
    name:"auth",
    initialState:{
        user:{
          id:null,
          Firstname:null,
          Lastname:null,
          email:null,
          class_name:null,
          language: null,
          find:null,
          time:null,
          ExamKey:0,
          OnStreak:0,
          LongestStreak:0,
          HEP:0,
         LevelCompleted:[1,2,3]
          
    
        }
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

         UserLevelCompleted:(state,action)=>{
           
           const  obj = {chapterId:action.payload.chapterId, chapter_name:{...action.payload.chapter_name},levels:[action.payload.levelId]}

          if(state.user.LevelCompleted.length  === 0){ state.user.LevelCompleted.push(obj)}
          
  else{  
   
  state.user.LevelCompleted.some((item)=>item.chapterId === action.payload.chapterId)  ?

   state.user.LevelCompleted.forEach((item)=>  item.chapterId === action.payload.chapterId  ?  item.levels.some((id)=> id  ===  action.payload.levelId) ? null :  item.levels.push(action.payload.levelId ) : null ) :
   
   state.user.LevelCompleted.push(obj)

  }
           
         },

         UserAvatarSave:(state,action)=>{
         state.user.Avatar =  action.payload;
         },

        
         HeartsDecrease :(state,action)=>{
          state.user.Hearts -= 1
         },
         HeartsRefill:(state,action) =>{
            state.user.Hearts = 3
         },
        UnlockPremium:(state,action)=>{
        state.user.isPremium = true
        }
     
         
    }
})

export const  { getUser, ToggleSetting, increaseHEP, UserLevelCompleted, UserAvatarSave, HeartsDecrease, HeartsRefill, UnlockPremium} = auth.actions

export default auth.reducer;