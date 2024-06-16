import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setToken } from "../component/Auth";
import axios from "axios";
import '../styles/form.css';

function CreateAccountPage() {
    const [inputLoginId, setLoginId] = useState("");
    const [inputPassword, setPassword] = useState("");
    const [inputPasswordCheck, setPasswordCheck] = useState("");
    const [inputNickname, setNickname] = useState("");
    const navigate = useNavigate();

    function handleLoginId(e) {
        setLoginId(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    function handlePasswordCheck(e) {
        setPasswordCheck(e.target.value);
    }

    function handleNickname(e) {
        setNickname(e.target.value);
    }

    function onClickCreateAccount(e) {
        e.preventDefault();
        axios
            .post("http://localhost:8080/users/signup", {
                nickname: inputNickname,
                password: inputPassword,
                passwordCheck: inputPasswordCheck,
                loginId: inputLoginId,
            })
            .then((res) => {
                setToken(res.data.token);
                navigate("/profile");
            })
            .catch((error) => {
                console.log(error, "error");
            });
    }

    return (
        <form id="form" action="">
            <Link to='/' id="form-go_back">
                <img id="form-go_back-img" src={process.env.PUBLIC_URL + '/go_back.png'} alt="Go back" />
            </Link>

            <h1 id="form-title">Create Account</h1>
            <div id="create_account-input_box">
                <input
                    type="text"
                    className="form-input"
                    placeholder="nickname"
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
            <button id="form-button" type="submit" onClick={onClickCreateAccount}>Create Account</button>

            <Link to='/login' id="form-other_link">로그인</Link>
        </form>
    );
}

export default CreateAccountPage;