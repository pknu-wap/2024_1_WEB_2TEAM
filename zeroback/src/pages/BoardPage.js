import React from "react";
import NavBar from "../component/NavBar";
import '../styles/BoardPage.css'
import MainBoard from "../component/board_main";
import SubBoard from "../component/board_sub";

function BoardPage() {
    return (
        <main>
            <NavBar linkName1={"INDEX"} linkName2={"LOGIN"} link1={'/index'} link2={'/login'} />
            <body id="board">
                <MainBoard />
                <SubBoard />
            </body>
        </main>
    )
}

export default BoardPage;