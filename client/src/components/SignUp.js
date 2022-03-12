import React, { useEffect, useState } from "react";
import Axios from "axios";



function SignUp() {

    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [emailReg, setEmailReg] = useState(""); 
    const [phoneReg, setPhoneReg] = useState(0) 
  
  
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


    </div>
  )
}

export default SignUp