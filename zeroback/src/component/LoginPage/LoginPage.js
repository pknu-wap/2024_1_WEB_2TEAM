import React from "react"
import InfoInputBox from "./infoInputBox";
import './LoginPage.css';

function loginPage() {
    return (
        <div className="wrapper">
            <form id="login-form" action="">
                <h1 id="login-title">Log In</h1>

                <InfoInputBox />
                
                <button className="login-button" type="submit">Log In</button>

                <div className="register-link" id="register-link">
                    <p>계정이 없으신가요? <a href="#" id="register-link-anchor">회원가입</a></p>
                </div>
            </form>
        </div>
    )
}

export default loginPage;