import React from 'react';
import '../styles/BoardTable.css'

function Post(props) {
    var number = props.number;
    var title = props.title;
    var username = props.username;
    var commentCnt = props.commentCnt;
    var link = props.link;
    var day = props.day;

    function Click() {
        console.log(link);
        window.location.href = link;
    };

    return (
        <tr class="article" onClick={Click}>
            <td class="board_post">{number}</td>
            <td class="board_post">{title}</td>
            <td class="board_post">{username}</td>
            <td class="board_post">{commentCnt}</td>
            <td class="board_post">{day}</td>
        </tr>
    );
}

export default Post;