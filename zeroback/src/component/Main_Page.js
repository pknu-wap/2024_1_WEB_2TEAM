import React from "react";
import {Link} from "react-router-dom"
import './Main_Page.css'

function Main () {
    return (
        <div id="main_links">
            <Link to='/index' className="main_link">지수</Link>
            <Link to='/board' className="main_link">게시판</Link>
            <Link to='/login' className="main_link">로그인</Link>
        </div>
    );
}

export default Main;