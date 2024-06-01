import React from "react";
import NavBar from "../component/NavBar";
import '../styles/BoardPage.css'
import MainBoard from "../component/board_main";
import SubBoard from "../component/board_sub";

function BoardPage() {
    return (
        <main>
            <NavBar linkName1={"지수"} linkName2={"로그인"} link1={'/index'} link2={'/login'} />
            <div id="board">
                <MainBoard />
            </div>
        </main>
    )
}

export default BoardPage;