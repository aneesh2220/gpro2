import React from "react";
import "./login.css";
import { useLocation } from "react-router-dom";
import { sites } from "./data";



function Login() {

// Location ko bulaya
let location = useLocation();
// console.log(location)

// Location(object) mai se pathname ki value nikali..... fir tod di into list
let splitD= location.pathname.split('/')
// console.log(splitD)

// List mai se patterns notice karke aur indexing use karke apne matlb ki cheez(id) nikali
let id = splitD[2]
// console.log(id)

// Jo cheez(id) nikali, usko sites ki list mai se filter kiya.
let currentData= sites.filter((val) => val.name == id)[0];
console.log(currentData)




  return (
    <div class="login_page">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>
        {" "}
        Username:
        <input type="text" name="Username" />
      </p>

      <p>
        {" "}
        Password:
        <input type="password" name="Password" />
      </p>
      <br></br>
      <br></br>
      <br></br>

      <button class="button">
        <p> Enter</p>
      </button>
    </div>
  );
}

export default Login;
