import React from 'react';
import PostTitle from './PostTitle';
import Post from './Post';
import BoardHeader from './board_header';
import BoardPage from './board_page';
import '../styles/Board.css'

function MainBoard() {
    let data;

    function getMD(day) {
        return day.substr(5, 2) + "/" + day.substr(8, 2);
    }

    function loadBoard() {
        const urlParams =new URL(window.location.href).searchParams;

        console.log("currentPage", urlParams.get('page'));
        /* 임시 데이터 호출 함수 */
        
        data = getData(urlParams.get('page'));
        console.log("Get Board Data : ", data);

        /* 기존 데이터 호출 함수 */
        // const tdata = axios.get("/Board", {
        //     params: {
        //         page: 1
        //     }
        // });

        return data.boards.map((entity) => (
            <Post
            key={entity.id}
            number={entity.id}
            title={entity.title} 
            username={entity.userNickname}
            commentCnt={entity.commentCnt}
            link={`/post?id=${entity.id}`} 
            day={getMD(entity.createdAt)}/>
        ));
    }

    function getData(page) {
        return {
            "totalPages": 8,
            "totalElements": 118,
            "currentPage": page ? page : 1,
            "pageSize": 15,
            "boards": [
                {
                    "id": 1,
                    "userLoginId": "user1",
                    "userNickname": "nickname1",
                    "title": "Board Title 1",
                    "body": "Content of the board",
                    "createdAt": "2023-01-01T10:00:00",
                    "lastModitiedAt": "2023-01-02T10:00:00",
                    "commentCnt": 5
                },
                {
                    "id": 2,
                    "userLoginId": "user2",
                    "userNickname": "nickname2",
                    "title": "Board Title 2",
                    "body": "Content of the board",
                    "createdAt": "2023-01-01T10:00:00",
                    "lastModitiedAt": "2023-01-02T10:00:00",
                    "commentCnt": 5
                },
                {
                    "id": 3,
                    "userLoginId": "user2",
                    "userNickname": "nickname2",
                    "title": "Board Title 2",
                    "body": "Content of the board",
                    "createdAt": "2023-01-01T10:00:00",
                    "lastModitiedAt": "2023-01-02T10:00:00",
                    "commentCnt": 5
                },
                {
                    "id": 4,
                    "userLoginId": "user2",
                    "userNickname": "nickname2",
                    "title": "Board Title 2",
                    "body": "Content of the board",
                    "createdAt": "2023-01-01T10:00:00",
                    "lastModitiedAt": "2023-01-02T10:00:00",
                    "commentCnt": 5
                },
                {
                    "id": 5,
                    "userLoginId": "user2",
                    "userNickname": "nickname2",
                    "title": "Board Title 2",
                    "body": "Content of the board",
                    "createdAt": "2023-01-01T10:00:00",
                    "lastModitiedAt": "2023-01-02T10:00:00",
                    "commentCnt": 5
                },{
                    "id": 6,
                    "userLoginId": "user2",
                    "userNickname": "nickname2",
                    "title": "Board Title 2",
                    "body": "Content of the board",
                    "createdAt": "2023-01-01T10:00:00",
                    "lastModitiedAt": "2023-01-02T10:00:00",
                    "commentCnt": 5
                },
                {
                    "id": 7,
                    "userLoginId": "user2",
                    "userNickname": "nickname2",
                    "title": "Board Title 2",
                    "body": "Content of the board",
                    "createdAt": "2023-01-01T10:00:00",
                    "lastModitiedAt": "2023-01-02T10:00:00",
                    "commentCnt": 5
                },
                {
                    "id": 8,
                    "userLoginId": "user2",
                    "userNickname": "nickname2",
                    "title": "Board Title 2",
                    "body": "Content of the board",
                    "createdAt": "2023-01-01T10:00:00",
                    "lastModitiedAt": "2023-01-02T10:00:00",
                    "commentCnt": 5
                },
                {
                    "id": 9,
                    "userLoginId": "user2",
                    "userNickname": "nickname2",
                    "title": "Board Title 2",
                    "body": "Content of the board",
                    "createdAt": "2023-01-01T10:00:00",
                    "lastModitiedAt": "2023-01-02T10:00:00",
                    "commentCnt": 5
                },
                {
                    "id": 10,
                    "userLoginId": "user2",
                    "userNickname": "nickname2",
                    "title": "Board Title 2",
                    "body": "Content of the board",
                    "createdAt": "2023-01-01T10:00:00",
                    "lastModitiedAt": "2023-01-02T10:00:00",
                    "commentCnt": 5
                },
                {
                    "id": 11,
                    "userLoginId": "user2",
                    "userNickname": "nickname2",
                    "title": "Board Title 2",
                    "body": "Content of the board",
                    "createdAt": "2023-01-01T10:00:00",
                    "lastModitiedAt": "2023-01-02T10:00:00",
                    "commentCnt": 5
                },
                {
                    "id": 12,
                    "userLoginId": "user2",
                    "userNickname": "nickname2",
                    "title": "Board Title 2",
                    "body": "Content of the board",
                    "createdAt": "2023-01-01T10:00:00",
                    "lastModitiedAt": "2023-01-02T10:00:00",
                    "commentCnt": 5
                },
                {
                    "id": 13,
                    "userLoginId": "user2",
                    "userNickname": "nickname2",
                    "title": "Board Title 2",
                    "body": "Content of the board",
                    "createdAt": "2023-01-01T10:00:00",
                    "lastModitiedAt": "2023-01-02T10:00:00",
                    "commentCnt": 5
                },
                {
                    "id": 14,
                    "userLoginId": "user2",
                    "userNickname": "nickname2",
                    "title": "Board Title 2",
                    "body": "Content of the board",
                    "createdAt": "2023-01-01T10:00:00",
                    "lastModitiedAt": "2023-01-02T10:00:00",
                    "commentCnt": 5
                },
                {
                    "id": 15,
                    "userLoginId": "user2",
                    "userNickname": "nickname2",
                    "title": "Board Title 2",
                    "body": "Content of the board",
                    "createdAt": "2023-01-01T10:00:00",
                    "lastModitiedAt": "2023-01-02T10:00:00",
                    "commentCnt": 5
                }
            ]
        };
    }


    return (
        <div class="board"> 
            <BoardHeader />
            <table class="board_table" border="0" cellSpacing="0">
                <thead>
                    <PostTitle />
                </thead>
                <tbody>
                    {loadBoard()}
                </tbody>
            </table>
            <BoardPage lastPage={data.totalPages} currentPage={data.currentPage}></BoardPage>
        </div>
    );
}

export default MainBoard;