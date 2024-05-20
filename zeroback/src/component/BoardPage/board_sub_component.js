import React from "react";
import './board_sub_component.css'

function SubBoardComponent(probs) {
    let { name } = probs;

    return (
        <div class="board-sub-component">
            <p>{name}</p>
            <div class="board-sub-lines"></div>
        </div>
    );
}

export default SubBoardComponent;