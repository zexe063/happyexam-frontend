import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore, combineReducers} from '@reduxjs/toolkit';
import { Provider, useSelector } from 'react-redux';
import happyexamReducer from "./happyexamReducer/happyexam";
import  authReducer from "./happyexamReducer/auth"
import { Route, Router, RouterProvider,createBrowserRouter, createRoutesFromChildren} from 'react-router-dom';
import {persistStore, persistReducer, FLUSH, REHYDRATE, PERSIST, PURGE, REGISTER}  from "redux-persist"
import { PersistGate } from 'redux-persist/integration/react';
import storage from "redux-persist/lib/storage"
import sessionStorage from 'redux-persist/es/storage/session';
import { Toaster } from 'react-hot-toast';

const Welcome  = lazy(()=>import('./components/welcome/welcome'));
const Dashboard  = lazy(()=>import('./components/dashboard/dashboard'));
const Home = lazy(()=> import('./components/dashboard/home/home'));
const Course = lazy(()=>import('./components/dashboard/course/course'));
const Level  =  lazy(()=>import('./components/dashboard/level/level'));
const Question  = lazy(()=>import( './components/question/question'));
const LandingPage  = lazy(()=>import('./landingpage/landingpage'));
const Aboutus = lazy(()=>import('./landingpage/company/Aboutus'))
const PrivacyPolicy =  lazy(()=>import('./landingpage/company/Privacypolicy'));
const TermsAndConditions = lazy(()=>import('./landingpage/company/TermsandCondition'));
const LevelComplete = lazy(()=>import('./components/LevelComplete/LevelComplete'));
const Profile  = lazy(()=>import('./components/profile/profile'));
const Signup = lazy(()=>import('./auth/signup/signup'));
const Login =  lazy(()=>import('./auth/login/login'));
const Avatar = lazy(()=>import('./components/avatar/avatar'));
const Subscription = lazy(()=>import('./components/subscription/subscription'));
const Setting  = lazy(()=>import('./components/dashboard/setting/setting'));
import ProtectedRoute from './auth/ProtectedRouted';
import PublicRoute from './auth/PublicRouter';


const production = false



const router = createBrowserRouter(
   createRoutesFromChildren(
    <>
   <Route path='/' element=<PublicRoute> <App/> </PublicRoute>>
  <Route path='/' element=<LandingPage />></Route>
  <Route path='/privacy'  element=<PrivacyPolicy />></Route>
  <Route path='/terms-and-conditions'  element=<TermsAndConditions />></Route>
  <Route path='/about-us'  element=<Aboutus />></Route>

   </Route>
   
   <Route  path='/welcome' element=<PublicRoute><Welcome /></PublicRoute>></Route>
   <Route path='/signup' element=  <PublicRoute> <Signup /> </PublicRoute>></Route>
   <Route path='/login' element=<PublicRoute> <Login/> </PublicRoute>></Route>
   
   <Route path='/' element=<ProtectedRoute> <Dashboard /> </ProtectedRoute>> 
    <Route path='/profile' element=<Profile></Profile>></Route>
    <Route path='/subscription' element=<Subscription/>></Route>
   <Route path='/avatar' element=<Avatar />></Route>
   <Route  path='/setting/account' element=<ProtectedRoute><Setting /></ProtectedRoute>></Route>
   <Route path='/home/:class_name' element=<Home />></Route>
    <Route path='/course/:class_name' element=<Course /> ></Route>
   <Route path='/course/:class_name/:subject_name/:chapter_name' element=<Level />></Route>
  
   </Route>

   <Route path='/course/:class_name/:subject_name/:chapter_name/:level_name' element=<Question />></Route>
   <Route path='/course/:class_name/:subject_name/:chapter_name/:level_name/Completed' element= <ProtectedRoute> <LevelComplete / ></ProtectedRoute>></Route>
  
 
    
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
  reducer:rootReducer,
 middleware:(getDefaultMiddleware)=>
   getDefaultMiddleware({
    serializableCheck:{
      ignoreActions:[FLUSH, REHYDRATE, PERSIST, REGISTER, PURGE, REGISTER]
    }
  })


})


 export const persistor =  persistStore(store)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router}>
      <App  />
      </RouterProvider>
       <Toaster></Toaster>
      </PersistGate>
    </Provider>

);


