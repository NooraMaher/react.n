import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Login from './com/login';
// import Tag from './com/tag';
import 'bootstrap/dist/css/bootstrap.css'
// import NavBar from './com/tripadvaisor';
import { BrowserRouter } from 'react-router-dom'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
    {/* <NavBar></NavBar> */}
    {/* <App/> */}
    {/* <Login /> */}
    {/* <Tag></Tag> */}
  </React.StrictMode>
);

reportWebVitals();
