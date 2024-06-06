import React from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/form.css';

function ProfilePage() {

    const navigate = useNavigate();

    const signOut = () => {
        localStorage.removeItem("token_key");
        navigate("/");
    };

    return (
        <div id="form">
            <Link to='/' id="form-go_back">
                <img id="form-go_back-img" src={process.env.PUBLIC_URL + '/go_back.png'} />
            </Link>

            <h1 id="form-title">Profile</h1>
            <div id="login-input_box">
                <text className="form-text" required>
                    닉네임:
                </text>
                <text className="form-text" required>
                    ID:
                </text>
            </div>
            <button id="form-button" type="submit" onClick={signOut}>로그아웃</button>
        </div>
    );
}

export default ProfilePage;