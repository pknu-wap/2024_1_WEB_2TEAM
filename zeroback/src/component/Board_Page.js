import React from "react";
import NavBar from "./NavBar";
import {Link, Route, Routes} from "react-router-dom"
import './Board_Page.css'

function Board() {
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
            <body id="Board">
                <div id="MainBoard">
                    <ul id="MainBoardMenu">
                        <p><li>제목</li></p>
                        <p><li>글쓴이</li></p>
                        <p><li>작성일</li></p>
                        <p><li>조회</li></p>
                    </ul>
                    <i id="MainBoardLine"></i>
                    <div id="MainBoardPostLines">
                    </div>
                </div>
                <div id="SubBoard">
                    <div id="buttons">
                        <Link to='/post_write'><button id="write">글쓰기</button></Link>
                        <Link to='/'><button id="scrap_post_manage">스크랩 게시글 관리</button></Link>
                        <Link to='/'>
                            <button id="search_button"><img id="search" src={process.env.PUBLIC_URL + '/search.png'}/></button>
                        </Link>
                    </div>
                    <div class="SubBoards">
                        <p>스크랩 글</p>
                        <div class="SubBoardLines">
                        </div>
                    </div>
                    <div class="SubBoards">
                        <p>인기 글</p>
                        <div class="SubBoardLines">
                        </div>
                    </div>
                </div>
            </body>
        </main>
    )
}

export default Board;