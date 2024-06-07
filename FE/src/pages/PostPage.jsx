import React from "react";
import '../styles/MainPage.css'
import '../styles/BoardWritePage.css'
import PostWrite from '../component/PostWrite.jsx'
import NavBar from "../component/NavBar.js";

function PostPage() {
    return (
        <main class="post_write_back">
            <NavBar linkName1={"지수"} link1={'/'} />
            <div class="board_write_back">
                <PostWrite />
            </div>
        </main>
    );
}

export default PostPage;