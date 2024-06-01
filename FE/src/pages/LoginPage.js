import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import '../styles/form.css';
import { setToken } from "../component/Auth";
import axios from "axios";

function LoginPage() {
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");

    function handleInputId(e) {
        setInputId(e.target.value);
    };

    function handleInputPw(e) {
        setInputPw(e.target.value);
    };

    function onClickLogin() {
        axios
            .post("http://localhost:8080/users/login", {/* 임시 */
                loginId: inputId,
                loginPw: inputPw,
            })
            .then((res) => {
                setToken(res.data.token);
                Navigate("/profile");
            })
            .catch((error) => {
                console.log(error, "error");
            });
    };

    return (
        <form id="form" action="">
            <Link to='/' id="form-go_back">
                <img id="form-go_back-img" src={process.env.PUBLIC_URL + '/go_back.png'} />
            </Link>

            <h1 id="form-title">Login</h1>
            <div id="login-input_box">
                <input
                    type="text"
                    className="form-input"
                    placeholder="ID"
                    value={inputId}
                    onChange={handleInputId}
                    required />
                <input
                    type="password"
                    className="form-input"
                    placeholder="Password"
                    value={inputPw}
                    onChange={handleInputPw}
                    required />
            </div>
            <button id="form-button" type="submit" onSubmit={onClickLogin}>Login</button>

            <Link to='/create_account' id="form-other_link">회원가입</Link>
        </form>
    );
}

export default LoginPage;