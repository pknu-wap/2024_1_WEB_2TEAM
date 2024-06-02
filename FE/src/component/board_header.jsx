import React from 'react';
import '../styles/Board.css';

function BoardHeader() {
    return (
        <div class="board_header">
            <div class="board_address">home / 게시판</div>
            <div class="board_new_post_button">글쓰기</div>
        </div>
    );
}

export default BoardHeader;