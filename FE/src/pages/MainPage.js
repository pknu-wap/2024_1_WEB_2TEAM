import React from "react";
import { Link } from "react-router-dom"
import '../styles/MainPage.css'

function Main() {
    return (
        <div id="main-links">
            <Link to='/index' className="main-link">지수</Link>
            <Link to='/board' className="main-link">게시판</Link>
            <Link to='/login' className="main-link">로그인</Link>
        </div>
    );
}

export default Main;