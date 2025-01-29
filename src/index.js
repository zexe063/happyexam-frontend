import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import happyexamReducer from "./happyexamReducer/happyexam"
import { Route, RouterProvider,Routes,createBrowserRouter, createRoutesFromChildren} from 'react-router-dom';
import Welcome from './components/welcome/welcome';
import Dashboard from './components/dashboard/dashboard';
import Subject from './components/dashboard/subject/subject';
import Chapter from './components/dashboard/chapter/chapter';
import Level from './components/dashboard/level/level';
import Question from './components/dashboard/question/question';
import LandingPage from './landingpage/landingpage';

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
   <Route path=' /a'></Route> 
   </>
   )
)


const store= configureStore(
  {
    reducer:{
      happyexam : happyexamReducer
    }
  }
)

console.log(store.getState())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
      <App  />
      </RouterProvider>
  
    </Provider>
  </React.StrictMode>
);


