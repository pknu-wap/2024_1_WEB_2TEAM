import React from "react"
import { Link } from "react-router-dom";
import '../styles/form.css';

function loginPage() {
    return (
        <form id="form" action="">
            <Link to='/' id="form-go_back">
                <img id="form-go_back-img" src={process.env.PUBLIC_URL + '/go_back.png'} />
            </Link>

            <h1 id="form-title">Login</h1>
            <div id="login-input_box">
                <input type="text" className="form-input" placeholder="ID" required />
                <input type="password" className="form-input" placeholder="Password" required />
            </div>
            <button id="form-button" type="submit">Login</button>

            <Link to='/create_account' id="form-other_link">회원가입</Link>
        </form>
    );
}

export default loginPage;