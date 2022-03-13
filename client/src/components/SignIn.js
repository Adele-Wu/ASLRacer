import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'
import Axios from "axios";

function SignIn() {

  let history = useHistory() 

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const [loginStatus, setLoginStatus] = useState("");


  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      //checking
      console.log("From the login page: ", response.data) 
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].username);
      }
    });
  }, []);



  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        console.log("User is logged in")
        setLoginStatus(response.data[0].username);
        Axios.defaults.withCredentials = true;
        history.push("/")
      }
    });
  };


  return (
    <div className="section2">
      <div className="empty1"></div>
        <div className="login center">
        <h1 className="textCenter">Login</h1>
        <label>Username:</label>
        <input
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        
        <div className="center">
          <button className="logInButton" onClick={login}> Login </button>
        </div>
      </div>
      <h1>{loginStatus}</h1>
    </div>
  )
}

export default SignIn