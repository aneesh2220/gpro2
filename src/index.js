import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Login from './login.js';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { sites } from "./data";






const root = ReactDOM.createRoot(document.getElementById('root'));

let route = createBrowserRouter([

{
path: "/",
element : <App/>
},

{
path : "/login/:login_page",
element : <Login/>


}

]
)


root.render(
  <React.StrictMode>
  <RouterProvider router={route}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
