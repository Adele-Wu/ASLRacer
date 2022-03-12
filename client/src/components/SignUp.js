import React, { useEffect, useState } from "react";
import Axios from "axios";



function SignUp() {

    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [emailReg, setEmailReg] = useState(""); 
    const [phoneReg, setPhoneReg] = useState(0) 
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const [loginStatus, setLoginStatus] = useState("");
  
    Axios.defaults.withCredentials = true;
  
    const register = () => {
      Axios.post("http://localhost:3001/register", {
        username: usernameReg,
        password: passwordReg,
        email: emailReg, 
        phone: phoneReg
      }).then((response) => {
        console.log(response);
      });
    };
  
    const login = () => {
      Axios.post("http://localhost:3001/login", {
        username: username,
        password: password,
      }).then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(response.data[0].username);
        }
      });
    };
  
    useEffect(() => {
      Axios.get("http://localhost:3001/login").then((response) => {
        if (response.data.loggedIn == true) {
          setLoginStatus(response.data.user[0].username);
        }
      });
    }, []);

  return (
    <div>
        <div className="registration">
        <h1>Registration</h1>
        <label>Username</label>
        <input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        <label>Email</label>
        <input
          type="text"
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
        />
        <label>Phone Number</label>
        <input
          type="text"
          onChange={(e) => {
            setPhoneReg(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <button onClick={register}> Register </button>
      </div>

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

export default SignUp