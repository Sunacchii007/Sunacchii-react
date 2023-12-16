import React from 'react';
import '../styles/signin.css';

const signin = () => {
  return (
    <div>
        <div className="sign">
            <div className="sign-cont">
                <h1>WELCOME BACK</h1>
                <h1>sign in</h1>
                <div className="sign-field">
                    <input type="text" placeholder="email" />
                    <input type="password" placeholder="password" />
                </div>
                <button> sign in </button>
            </div>
        </div>
    </div>
  )
}

export default signin;