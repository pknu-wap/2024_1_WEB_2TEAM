import React from 'react';
import '../styles/Board.css';
import { Link } from "react-router-dom";

function BoardHeader() {
    return (
        <div class="board_header">
            <div className='header_path'>
                <Link to='/' className="topbar-path-link">
                    <img id="topbar-homeimg" src={process.env.PUBLIC_URL + '/home.png'} alt="home" />
                </Link>
                <text className="topbar-path-txt">&nbsp;&nbsp;/&nbsp;&nbsp;</text>
                <div className="topbar-path-link">게시판</div>
            </div>
            <Link to="/post" class="board_new_post_button">글쓰기</Link>
        </div>
    );
}

export default BoardHeader;