import React from 'react';
import '../styles/Board.css';
import { Link } from "react-router-dom";

function BoardHeader() {
    return (
        <div class="board_header">
            <div class="board_address">home / 게시판</div>
            <Link to="/index" class="board_new_post_button">글쓰기</Link>
        </div>
    );
}

export default BoardHeader;