import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore, combineReducers} from '@reduxjs/toolkit';
import { Provider, useSelector } from 'react-redux';
import happyexamReducer from "./happyexamReducer/happyexam";
import  authReducer from "./happyexamReducer/auth"
import { Route, Router, RouterProvider,createBrowserRouter, createRoutesFromChildren} from 'react-router-dom';
import {persistStore, persistReducer}  from "redux-persist"
import { PersistGate } from 'redux-persist/integration/react';
import storage from "redux-persist/lib/storage"
import sessionStorage from 'redux-persist/es/storage/session';

const Welcome  = lazy(()=>import('./components/welcome/welcome'));
const Dashboard  = lazy(()=>import('./components/dashboard/dashboard'));
const Home = lazy(()=> import('./components/dashboard/home/home'));
const  Chapter = lazy(()=>import('./components/dashboard/chapter/chapter'));
const Level  =  lazy(()=>import('./components/dashboard/level/level'));
const  Question  = lazy(()=>import( './components/question/question'));
const  LandingPage  = lazy(()=>import('./landingpage/landingpage'));
const  LevelComplete = lazy(()=>import('./components/LevelComplete/LevelComplete'));
const  Profile  = lazy(()=>import('./components/profile/profile'));
const Signup = lazy(()=>import('./components/auth/signup/signup'));
const Login =  lazy(()=>import('./components/auth/login/login'));
const Avatar = lazy(()=>import('./components/avatar/avatar'));
const Subscription = (()=>import('./components/subscription/subscription'));



const router = createBrowserRouter(
   createRoutesFromChildren(
    <>
   <Route path='/' element=<App/>>
  <Route path='/' element=<LandingPage></LandingPage>></Route>
   </Route>
   
   <Route  path='/welcome' element=<Welcome />></Route>
   <Route path='/signup' element=<Signup></Signup>></Route>
   <Route path='/login' element=<Login></Login>></Route>
    <Route path='/profile' element=<Profile></Profile>></Route>
   <Route path='/avatar' element=<Avatar />></Route>
   <Route path='/subscription' element=<Subscription/>></Route>
   
   <Route path='/' element=<Dashboard />> 

   <Route path='/home/:class_name' element=<Home />></Route>
    <Route path='/course/:class_name' element=<Chapter /> ></Route>
   <Route path='/course/:class_name/:subject_name/:chapter_name' element=<Level />></Route>
  
   </Route>

   <Route path='/course/:class_name/:subject_name/:chapter_name/:level_name' element=<Question></Question>></Route>
   <Route path='/course/:class_name/:subject_name/:chapter_name/:level_name/Completed' element=<LevelComplete></LevelComplete>></Route>
  
 
    
   <Route path='*'></Route> 
  
   </>
   )
)

const HappyexampersistConfig = {
  key:'happyexam',
  storage:sessionStorage,

}

const authpersistConfig = {
  key:"auth",
  storage,
  whitelist:['user'],

}


const happyexampersistReducer = persistReducer(HappyexampersistConfig, happyexamReducer)
const authpersistReducer = persistReducer(authpersistConfig, authReducer);

const rootReducer= combineReducers({
 happyexam: happyexampersistReducer,
 auth:authpersistReducer
});

const store= configureStore({
  reducer:rootReducer
})


 export const persistor =  persistStore(store)





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router}>
      <App  />
      </RouterProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


