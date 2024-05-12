import React from "react";
import {Link} from "react-router-dom";
import './Post_Write_Page.css';

function PostWrite() {
    return (
        <main>
            <div id="NavBar">
                <div id="NavTexts">
                    <Link to='/' className="link">
                        <h1 id="Logo">WealthWise</h1>
                    </Link>
                    <div id="links">
                        <Link to='/index' className="link">지수</Link>
                        <Link to='/' className="link">뉴스</Link>
                        <Link to='/board' className="link">게시판</Link>
                        <Link to='/' className="link">마이페이지</Link>
                    </div>
                </div>
                <i id="NavLine"></i>
            </div>
        </main>
    );
}

export default PostWrite;