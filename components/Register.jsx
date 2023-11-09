import React from "react";
import '../styles/register.css'

const Register = () => {
  return (
    <div className="registerContainer">
        <h3>Register</h3>
        <div>
            <input type='email' name='email' placeholder="Enter Email"/>
        </div>
        <div>
            <input type='password' name='password' placeholder="Enter Password"/>
        </div>
        <button>Registeration</button>
    </div>
  );
}

export default Register;
