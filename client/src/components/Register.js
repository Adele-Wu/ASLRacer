import React, { useEffect, useState } from "react";
import Login from '../components/Login'
import Axios from 'axios'

function Register() {
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const [loginStatus, setLoginStatus] = useState("");

    Axios.defaults.withCredentials = true;



    const register = () => {
        Axios.post("http://localhost:3001/register", {
          username: usernameReg,
          password: passwordReg,
        }).then((response) => {
          console.log(response);
        });
    };



  return (
    <div>
        <div className="registration">
            <h1>Registration</h1>
            <label>Username</label>
            <input type="text" onChange={(e) => { setUsernameReg(e.target.value) }} />
            <label>Password</label>
            <input type="text" onChange={(e) => { setPasswordReg(e.target.value) }} />
            <button onClick={register}> Register </button>
        </div>
    </div>
  )
}

export default Register