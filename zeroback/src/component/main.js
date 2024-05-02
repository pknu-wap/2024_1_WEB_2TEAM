import React from "react";
import {Link} from "react-router-dom"
import './main.css'

function Main () {
    return (
        <div className="links">
            <Link to='/index' className="link">지수</Link>
            <Link to='/board' className="link">게시판</Link>
        </div>
    );
}

export default Main;