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
        history.push("/")
      }
    });
  };


  return (
    <div>
        <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={login}> Login </button>
      </div>
      <h1>{loginStatus}</h1>
    </div>
  )
}

export default SignIn