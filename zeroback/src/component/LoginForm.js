import React from "react";
import {Routes, Route, Link} from "react-router-dom";

function LoginForm() {
    const showLoginForm = () => {
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('registration-form').style.display = 'none';
    };

    return (
        <div>
            <button onClick={showLoginForm}>Show Login Form</button>
            <button onClick={<Link to='/sign_up'/>}>Show Registration Form</button>

            <form id="login-form" style={{ display: 'none' }}>
                {/* 로그인 폼 요소들 */}
            </form>

            <form id="registration-form" style={{ display: 'none' }}>
                {/* 등록 폼 요소들 */}
            </form>

            <Routes>
                <Route path="sign_in" element={<LoginForm/>}/>
            </Routes>
        </div>
    );
}

export default LoginForm;