import React from "react"
import { Link } from "react-router-dom";
import InputBox from "./login_input";
import './LoginPage.css';

function loginPage() {
    return (
        <div className="wrapper">
            <form id="login-form" action="">
                <h1 id="login-title">Log In</h1>
                <InputBox />
                <button className="login-button" type="submit">Log In</button>

                <div className="register-link" id="register-link">
                    <p>계정이 없으신가요? <Link to='/' id="register-link-anchor">회원가입</Link></p>
                </div>
            </form>
        </div>
    )
}

export default loginPage;