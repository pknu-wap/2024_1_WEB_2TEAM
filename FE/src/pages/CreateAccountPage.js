import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { setToken } from "../component/Auth";
import axios from "axios";
import '../styles/form.css';

function CreateAccountPage() {
    const [inputLoginId, setLoginId] = useState("");
    const [inputPassword, setPassword] = useState("");
    const [inputPasswordCheck, setPasswordCheck] = useState("");
    const [inputNickname, setNickname] = useState("");

    function handleLoginId(e) {
        setLoginId(e.target.value);
    };

    function handlePassword(e) {
        setPassword(e.target.value);
    };

    function handlePasswordCheck(e) {
        setPasswordCheck(e.target.value);
    };

    function handleNickname(e) {
        setNickname(e.target.value);
    };

    function onClickCreateAccount() {
        axios
            .post("http://localhost:8080/users/login", {/* 임시 */
                nickname: inputNickname,
                password: inputPassword,
                passwordCheck: inputPasswordCheck,
                loginId: inputLoginId,
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

            <h1 id="form-title">Create Account</h1>
            <div id="create_account-input_box">
                <input
                    type="text"
                    className="form-input"
                    placeholder="Name"
                    value={inputNickname}
                    onChange={handleNickname}
                    required />

                <input
                    type="text"
                    className="form-input"
                    placeholder="ID"
                    value={inputLoginId}
                    onChange={handleLoginId}
                    required />

                <input
                    type="password"
                    className="form-input"
                    placeholder="Password"
                    value={inputPassword}
                    onChange={handlePassword}
                    required />

                <input
                    type="password"
                    className="form-input"
                    placeholder="Password Checked"
                    value={inputPasswordCheck}
                    onChange={handlePasswordCheck}
                    required />
            </div>
            <button id="form-button" type="submit" onSubmit={onClickCreateAccount}>Create Account</button>

            <Link to='/login' id="form-other_link">로그인</Link>
        </form>
    );
}

export default CreateAccountPage;