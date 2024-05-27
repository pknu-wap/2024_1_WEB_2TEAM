import React from "react"
import { Link } from "react-router-dom";
import './LoginPage.css';

function loginPage() {
    return (
        <form id="login-form" action="">
            <Link to='/' id="login-go_back">
                <img id="login-go_back-img" src={process.env.PUBLIC_URL + '/go_back.png'} />
            </Link>

            <h1 id="login-title">Login</h1>
            <div id="login-input_box">
                <input type="text" className="login-input" placeholder="ID" required />
                <input type="password" className="login-input" placeholder="Password" required />
            </div>
            <button id="login-button" type="submit">Login</button>

            <Link to='/' id="login-create_account_link">회원가입</Link>
        </form>
    );
}

export default loginPage;