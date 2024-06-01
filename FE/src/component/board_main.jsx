import React from 'react';
import '../styles/board_main.css';
import PostTitle from './PostTitle';
import Post from './Post';

function MainBoard() {
    function loadBoard() {
        const data = getData();
        console.log(data);

        return data.map((entity) => (
            <Post
            number={entity.id}
            title={entity.title} 
            username={entity.userNickname}
            commentCnt={entity.id}
            link="/index" />
        ));
    }

    function getData() {
        return [
            {
                "id": 1,
                "userLoginId": "user1",
                "userNickname": "nickname1",
                "title": "Board Title 1",
                "body": "Content of the board",
                "createdAt": "2023-01-01T10:00:00",
                "lastModitiedAt": "2023-01-02T10:00:00"
            },
            {
                "id": 2,
                "userLoginId": "user2",
                "userNickname": "nickname2",
                "title": "Board Title 2",
                "body": "Content of the board",
                "createdAt": "2023-01-01T10:00:00",
                "lastModitiedAt": "2023-01-02T10:00:00"
            },
            {
                "id": 2,
                "userLoginId": "user2",
                "userNickname": "nickname2",
                "title": "Board Title 2",
                "body": "Content of the board",
                "createdAt": "2023-01-01T10:00:00",
                "lastModitiedAt": "2023-01-02T10:00:00"
            },
            {
                "id": 2,
                "userLoginId": "user2",
                "userNickname": "nickname2",
                "title": "Board Title 2",
                "body": "Content of the board",
                "createdAt": "2023-01-01T10:00:00",
                "lastModitiedAt": "2023-01-02T10:00:00"
            },
            {
                "id": 2,
                "userLoginId": "user2",
                "userNickname": "nickname2",
                "title": "Board Title 2",
                "body": "Content of the board",
                "createdAt": "2023-01-01T10:00:00",
                "lastModitiedAt": "2023-01-02T10:00:00"
            },{
                "id": 2,
                "userLoginId": "user2",
                "userNickname": "nickname2",
                "title": "Board Title 2",
                "body": "Content of the board",
                "createdAt": "2023-01-01T10:00:00",
                "lastModitiedAt": "2023-01-02T10:00:00"
            },
            {
                "id": 2,
                "userLoginId": "user2",
                "userNickname": "nickname2",
                "title": "Board Title 2",
                "body": "Content of the board",
                "createdAt": "2023-01-01T10:00:00",
                "lastModitiedAt": "2023-01-02T10:00:00"
            },
            {
                "id": 2,
                "userLoginId": "user2",
                "userNickname": "nickname2",
                "title": "Board Title 2",
                "body": "Content of the board",
                "createdAt": "2023-01-01T10:00:00",
                "lastModitiedAt": "2023-01-02T10:00:00"
            },
            {
                "id": 2,
                "userLoginId": "user2",
                "userNickname": "nickname2",
                "title": "Board Title 2",
                "body": "Content of the board",
                "createdAt": "2023-01-01T10:00:00",
                "lastModitiedAt": "2023-01-02T10:00:00"
            }
        ];
    }

    return (
        <table border="0" cellSpacing="0">
            <thead>
                <PostTitle></PostTitle>
            </thead>
            <tbody>
                {loadBoard()}
            </tbody>
        </table>
    );
}

export default MainBoard;