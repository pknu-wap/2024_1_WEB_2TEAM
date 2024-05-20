import React from "react";
import NavBar from "../PublicComponent/NavBar";
import './BoardPage.css'

function BoardPage() {
    return (
        <main>
            <NavBar />
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
                        <button id="write">글쓰기</button>
                        <button id="scrap_post_manage">스크랩 게시글 관리</button>
                        <button id="search_button"><img id="search" src={process.env.PUBLIC_URL + '/search.png'} /></button>
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

export default BoardPage;