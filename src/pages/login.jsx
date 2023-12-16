import React from "react";
import { Link } from "react-router-dom";
import '../styles/login.css'



function Login (){
    return (
        <div className="login">
            <div className="login-cont">
                <h1>WELCOME TO JOIN US</h1>
                <h1>sign up</h1>
                <div className="login-field">
                    <input type="text" placeholder="name" />
                    <input type="text" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <input type="password" placeholder="confirme password" />
                </div>
                <button> login </button>
                <p className="login-login">already have an account?: <Link id="ll" to='/Sunacchii-react/sign-in'>login here</Link></p>
            </div>
            
            
        </div>
    )
}

export default Login;