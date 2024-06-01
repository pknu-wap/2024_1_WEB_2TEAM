import React from 'react';
import '../styles/Post.css'
import { Link } from "react-router-dom";

function Post(props) {
    var number = props.number;
    var title = props.title;
    var username = props.username;
    var commentCnt = props.commentCnt;
    var link = props.link;

    function Click() {
        window.location.href = {link};
    };

    return (
        <tr class="article" onClick={Click}>
            <td class="board_post">{number}</td>
            <td class="board_post">{title}</td>
            <td class="board_post">{username}</td>
            <td class="board_post">{commentCnt}</td>
        </tr>
    );
}

export default Post;