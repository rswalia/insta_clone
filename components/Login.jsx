import React from "react";
import '../styles/login.css'

const Login = () => {
  return (
    <div className="loginContainer">
        <h3>Login</h3>
        <div>
            <input type='email' name='email' placeholder="Enter Email"/>
        </div>
        <div>
            <input type='password' name='password' placeholder="Enter Password"/>
        </div>
        <button>Login</button>
        <button className="link">Sign Up</button>
    </div>
  );
}

export default Login;
