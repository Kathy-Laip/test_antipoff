import React, {useState}  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route, Router, Link} from 'react-router-dom';
import { SignUp } from './pages/SignUp';
import { About } from './pages/About';
import { PersonalPage } from './pages/PersonalPage';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store/store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route index element={<SignUp/>} path='/'/>
          <Route index element={<About/>} path='/about'/>
          <Route index element={<PersonalPage/>} path='/personalPage'/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
