import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/form.css';

function ProfilePage() {
    const navigate = useNavigate();
    const [nickname, setNickname] = useState('');
    const [loginId, setLoginId] = useState('');

    const signOut = () => {
        localStorage.removeItem("token_key");
        navigate("/");
    };

    useEffect(() => {
        axios.get("http://localhost:8080/users/profile", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token_key')}`
            }
        })
        .then(response => {
            console.log(response.data); // 응답 데이터 확인
            setNickname(response.data.nickname);
            setLoginId(response.data.loginId);
        })
        .catch(error => {
            console.log(error);
            if (error.response && error.response.status === 401) {
                navigate("/login");
            }
        });
    }, [navigate]);

    return (
        <div id="form">
            <Link to='/' id="form-go_back">
                <img id="form-go_back-img" src={process.env.PUBLIC_URL + '/go_back.png'} alt="Go Back" />
            </Link>

            <h1 id="form-title">Profile</h1>
            <div id="login-input_box">
                <div className="form-text" required>
                    닉네임: {nickname}
                </div>
                <div className="form-text" required>
                    ID: {loginId}
                </div>
            </div>
            <button id="form-button" type="button" onClick={signOut}>로그아웃</button>
        </div>
    );
}

export default ProfilePage;
