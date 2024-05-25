import React from "react";
import NavBar from "../PublicComponent/NavBar";
import './BoardPage.css'
import MainBoard from "./board_main";
import SubBoard from "./board_sub";

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