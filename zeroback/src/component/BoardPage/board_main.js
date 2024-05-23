import React from 'react';
import './board_main.css';

function MainBoard() {
    return (
        <div id="board-main-box">
            <ul id="board-main-menu">
                <p><li>제목</li></p>
                <p><li>글쓴이</li></p>
                <p><li>작성일</li></p>
                <p><li>조회</li></p>
            </ul>
            <i id="board-main-line"></i>
        </div>
    );
}

export default MainBoard;