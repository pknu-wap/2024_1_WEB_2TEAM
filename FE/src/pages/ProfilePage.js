import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/form.css';
import { getToken, removeToken } from "../component/Auth"; // token_key를 가져오는 함수를 불러옵니다.

function ProfilePage() {
    const navigate = useNavigate();
    const [nickname, setNickname] = useState('');
    const [loginId, setLoginId] = useState('');

    const signOut = () => {
        removeToken();
        const token = getToken();
        if (!token) {
            console.log("No token found, redirecting to home.");
            navigate("/");
            return;
        }

        axios.get("http://localhost:8080/users/logout", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(() => {
            console.log("Logout successful, removing token and redirecting to home.");
            localStorage.removeItem("token_key");
            navigate("/");
        })
        .catch(error => {
            console.log("Logout error:", error);
            localStorage.removeItem("token_key");
            navigate("/");
        });
    };

    useEffect(() => {
        const token = getToken(); // token_key를 가져오는 함수를 호출합니다.
        if (!token) {
            console.log("No token found, redirecting to login.");
            navigate("/login");
            return;
        }

        axios.get("http://localhost:8080/users/profile", {
            headers: {
                Authorization: `Bearer ${token}` // 인증 헤더에 토큰을 포함합니다.
            }
        })
        .then(response => {
            console.log("Profile data fetched:", response.data);
            setNickname(response.data.nickname);
            setLoginId(response.data.loginId);
        })
        .catch(error => {
            console.log("Profile fetch error:", error);
            if (error.response && error.response.status === 403) {
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
                <p className="form-text">
                    닉네임: {nickname}
                </p>
                <p className="form-text">
                    ID: {loginId}
                </p>
            </div>
            <button id="form-button" type="button" onClick={signOut}>로그아웃</button>
        </div>
    );
}

export default ProfilePage;
