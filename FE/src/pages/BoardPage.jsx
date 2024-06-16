import React from "react";
import NavBar from "../component/NavBar";
import '../styles/BoardPage.css'
import MainBoard from "../component/board_main";

function BoardPage() {
    return (
        <main>
            <NavBar linkName1={"지수"} link1={'/'} />
            <div id="board">
                <MainBoard />
            </div>
        </main>
    )
}

export default BoardPage;