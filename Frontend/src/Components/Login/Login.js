import React from 'react'

export default function Login() {
    return (
        <div>
            <h1>Login</h1> <p>Email: <input type="text" /> </p>
            <p>Password: <input type="text" /></p>
            <button id='loginBtn'>Login</button> <br />
            <span>
                <button id='btn1'>Google</button>
                <button id='btn2'>FaceBook</button>
                <button id='btn3'>LinkeDin</button>
            </span>


            <p>Don't have an account? <a href="SignUp.js">SignUp</a></p>

        </div>
    )
}
