import React from "react";
import '../styles/board_sub.css';
import SubBoardButtons from "./board_sub_buttons";
import SubBoardComponent from "./board_sub_component";

function SubBoard() {
    return (
        <div id="board-sub-box">
            <SubBoardButtons />
            <SubBoardComponent name={"스크랩 글"} />
            <SubBoardComponent name={"인기 글"} />
        </div>
    );
}

export default SubBoard;