import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Namelist from './lists';
import Greeting from './conditional_Rendering';
// import App from './App';
// import Tick from "./Rendering"
// import Welcome from './props';
// import Message from './state';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* <App/>
    <Tick /> */}
    {/* <Message/> */}
    {/* <Welcome/> */}
    {/* <Namelist/> */}
    <Greeting/>
    </div>
   

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

