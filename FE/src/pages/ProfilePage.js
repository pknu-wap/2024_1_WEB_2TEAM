import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/form.css';

function ProfilePage() {

    const navigate = useNavigate();
    const [nickname, setNickname] = useState([]);
    const [id, setId] = useState([]);

    const signOut = () => {
        localStorage.removeItem("token_key");
        navigate("/");
    };

    useEffect(() => {
        axios.get("http://localhost:8080/users/profile")
            .then(response => {
                setNickname(response.nickname);
                setId(response.id)
            });
    }, []);

    return (
        <div id="form">
            <Link to='/' id="form-go_back">
                <img id="form-go_back-img" src={process.env.PUBLIC_URL + '/go_back.png'} />
            </Link>

            <h1 id="form-title">Profile</h1>
            <div id="login-input_box">
                <text className="form-text" required>
                    닉네임: {nickname}
                </text>
                <text className="form-text" required>
                    ID: {id}
                </text>
            </div>
            <button id="form-button" type="submit" onClick={signOut}>로그아웃</button>
        </div>
    );
}

export default ProfilePage;