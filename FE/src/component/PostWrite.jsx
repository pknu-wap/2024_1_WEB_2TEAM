import React from 'react';
import '../styles/Board.css';
import { useState } from 'react';
import axios from 'axios';
import { setToken } from './Auth';
import { useNavigate } from 'react-router-dom';

function PostWrite() {
    const [inputTitle, setInputTitle] = useState("");
    const [inputBody, setInputBody] = useState("");
    const navigate = useNavigate();

    function handleInputTitle(e) {
        setInputTitle(e.target.value);
    };

    function handleInputBody(e) {
        setInputBody(e.target.value);
    };

    function onClickWrite(e) {
        e.preventDefault();
        axios
            .post("http://localhost:8080/boards/write", {
                title: inputTitle,
                body: inputBody
            })
            .then((res) => {
                setToken(res.data.token);
                navigate("/board");
            })
            .catch((error) => {
                console.log(error, "error");
            });
    }

    return (
        <div class="board_write">
            <form>
                <div class="post_write_title">
                    <textarea
                        placeholder='제목'
                        class="post_write_title_input"
                        value={inputTitle}
                        onChange={handleInputTitle}
                        required></textarea>
                    <button class="post_write_submit_button" onClick={onClickWrite}>글 쓰기</button>
                </div>

                <div class="post_write_contour"></div>

                <div class="post_write_content">
                    <textarea
                        placeholder='내용을 입력해주세요'
                        class="post_write_content_input"
                        value={inputBody}
                        onChange={handleInputBody}
                        required></textarea>
                </div>
            </form>
        </div>
    );
}

export default PostWrite;