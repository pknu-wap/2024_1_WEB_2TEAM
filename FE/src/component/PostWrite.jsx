import React from 'react';
import '../styles/Board.css';
import { Link } from "react-router-dom";

function PostWrite() {
    return (
        <div class="board_write"> 
            <form>
                <div class="post_write_title">
                    <textarea placeholder='제목' class="post_write_title_input" required></textarea>
                    <button class="post_write_submit_button">글 쓰기</button> 
                </div>
    
                <div class="post_write_contour"></div>
    
                <div class="post_write_content">
                    <textarea placeholder='내용을 입력해주세요' class="post_write_content_input" required></textarea> 
                </div>
            </form> 
        </div>
    );
}

export default PostWrite;