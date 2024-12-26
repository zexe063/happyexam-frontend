import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import happyexamReducer from "./happyexamReducer/happyexam"
import { Route, RouterProvider,Routes,createBrowserRouter, createRoutesFromChildren} from 'react-router-dom';
import Welcome from './components/welcome/welcome';
import Subject from './components/subject/subject';
import Dashboard from './components/dashboard/dashboard';
import Chapter from './components/chapter/chapter';
import Question from './components/question/question';
import Level from './components/level/level';


const router = createBrowserRouter(
   createRoutesFromChildren(
    <>
   <Route path='/' element=<App/>></Route>
   <Route path='/welcome' element=<Welcome />></Route>
   <Route path='/subject' element=<Dashboard />> 
   <Route path='/subject' element=<Subject></Subject>></Route>
   <Route path='/subject/chapter' element=<Chapter></Chapter>></Route>
   <Route path='/subject/level' element=<Level></Level>></Route>
   

   </Route>
   <Route path='/question' element=<Question></Question>></Route>
   
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


