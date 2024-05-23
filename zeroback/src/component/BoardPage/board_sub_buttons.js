import React from "react";
import './board_sub_buttons.css'

function SubBoardButtons() {
    return (
        <div id="board-sub-buttons">
            <button id="write-button">글쓰기</button>
            <button id="post-manage-button">스크랩 게시글 관리</button>
            <button id="search-button"><img id="search-button-img" src={process.env.PUBLIC_URL + '/search.png'} /></button>
        </div>
    );
}

export default SubBoardButtons;