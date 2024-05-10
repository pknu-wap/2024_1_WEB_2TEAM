import React from "react"
import './Login_Page.css';

const Login_Page = () => {
    return (
        <div className='wrapper'>
            <form action="">
                
                <h1>Log In</h1>
                <div className="input-box">
                    <input type="text" placeholder="ID" required />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                </div>

                <button type="submit">Log In</button>

                <div className="register-link">
                    <p>계정이 없으신가요? <a href="#">회원가입</a></p>
                </div>
            </form>
        </div>
    )
}