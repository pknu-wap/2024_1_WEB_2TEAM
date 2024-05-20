import React from "react";
import NavBar from "../PublicComponent/NavBar";
import './BoardPage.css'
import MainBoard from "./board_main";
import SubBoard from "./board_sub";

function BoardPage() {
    return (
        <main>
            <NavBar />
            <body id="Board">
                <MainBoard />
                <SubBoard />
            </body>
        </main>
    )
}

export default BoardPage;