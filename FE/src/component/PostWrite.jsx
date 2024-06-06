import React, { useState } from 'react';
import axios from 'axios';
import { getToken } from "../component/Auth";
import { useNavigate } from "react-router-dom";
import '../styles/Board.css';

function PostWrite() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = getToken();
        if (!token) {
            console.log("No token found, please log in.");
            navigate("/login");
            return;
        }

        try {
            console.log("Token:", token); // 토큰 로그 추가
            const response = await axios.post("http://localhost:8080/boards/write", {
                title,
                content
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            console.log("Post created successfully:", response.data);
            navigate("/board");
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    return (
        <div className="board_write"> 
            <form onSubmit={handleSubmit}>
                <div className="post_write_title">
                    <textarea 
                        placeholder='제목' 
                        className="post_write_title_input" 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required>
                    </textarea>
                    <button type="submit" className="post_write_submit_button">글 쓰기</button> 
                </div>
    
                <div className="post_write_contour"></div>
    
                <div className="post_write_content">
                    <textarea 
                        placeholder='내용을 입력해주세요' 
                        className="post_write_content_input"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required>
                    </textarea> 
                </div>
            </form> 
        </div>
    );
}

export default PostWrite;
