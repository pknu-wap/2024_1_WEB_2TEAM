import React from "react"
import { Link } from "react-router-dom";
import '../styles/form.css';

function CreateAccountPage() {
    return (
        <form id="form" action="">
            <Link to='/' id="form-go_back">
                <img id="form-go_back-img" src={process.env.PUBLIC_URL + '/go_back.png'} />
            </Link>

            <h1 id="form-title">Create Account</h1>
            <div id="create_account-input_box">
                <input type="text" className="form-input" placeholder="Name" required />
                <input type="text" className="form-input" placeholder="ID" required />
                <input type="password" className="form-input" placeholder="Password" required />
                <input type="password" className="form-input" placeholder="Password Checked" required />
            </div>
            <button id="form-button" type="submit">Create Account</button>

            <Link to='/login' id="form-other_link">로그인</Link>
        </form>
    );
}

export default CreateAccountPage;