import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore, combineReducers} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import happyexamReducer from "./happyexamReducer/happyexam";
import  authReducer from "./happyexamReducer/auth"
import { Route, RouterProvider,createBrowserRouter, createRoutesFromChildren} from 'react-router-dom';
import {persistStore, persistReducer}  from "redux-persist"
import storage from "redux-persist/lib/storage"
import sessionStorage from 'redux-persist/es/storage/session';
import Welcome from './components/welcome/welcome';
import Dashboard from './components/dashboard/dashboard';
import Subject from './components/dashboard/subject/subject';
import Chapter from './components/dashboard/chapter/chapter';
import Level from './components/dashboard/level/level';
import Question from './components/dashboard/question/question';
import LandingPage from './landingpage/landingpage';
import LevelComplete from './components/LevelComplete/LevelComplete';
import { PersistGate } from 'redux-persist/integration/react';

const router = createBrowserRouter(
   createRoutesFromChildren(
    <>
   <Route path='/' element=<App/>>
  <Route path='/' element=<LandingPage></LandingPage>></Route>
   </Route>
   
   <Route path='/welcome' element=<Welcome />></Route>
   <Route path='/' element=<Dashboard />> 
   <Route path='/:classId' element=<Subject></Subject>></Route>
   <Route path='/:classId/:subjectId' element=<Chapter></Chapter>></Route>
   <Route path='/:classId/:subjectId/:chapterId' element=<Level></Level>></Route>
  
   </Route>

   <Route path='/:classId/:subjectId/:chapterId/:levelId' element=<Question></Question>></Route>
   <Route path='/:classId/:subjectId/:chapterId/:levelId/Completed' element=<LevelComplete></LevelComplete>></Route>
   <Route path='*'></Route> 
   </>
   )
)

const HappyexampersistConfig = {
  key:'root',
  storage:sessionStorage,

}

const authpersistConfig = {
  key:"root",
  storage,
  whitelist:['user']

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


const persistor =  persistStore(store)





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


