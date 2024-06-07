import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getToken } from './Auth';
import PostTitle from './PostTitle';
import Post from './Post';
import BoardHeader from './board_header';
import BoardPage from './board_page'; // 경로가 올바른지 확인합니다.
import '../styles/Board.css';

function MainBoard() {
    const [data, setData] = useState({
        totalPages: 1,
        totalElements: 0,
        currentPage: 1,
        pageSize: 15,
        boards: []
    });
    const [page, setPage] = useState(1);

    useEffect(() => {
        loadBoard(page);
    }, [page]);

    function getMD(day) {
        return day.substr(5, 2) + "/" + day.substr(8, 2);
    }

    async function loadBoard(page) {
        const token = getToken();
        if (!token) {
            console.log("No token found, please log in.");
            return;
        }

        try {
            const response = await axios.get("http://localhost:8080/boards", {
                params: { page },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setData(response.data);
            console.log("Get Board Data : ", response.data);
        } catch (error) {
            console.error("Failed to load board data", error);
        }
    }

    function handlePageChange(newPage) {
        setPage(newPage);
    }

    return (
        <div className="board">
            <BoardHeader />
            <table className="board_table" border="0" cellSpacing="0">
                <thead>
                    <PostTitle />
                </thead>
                <tbody>
                    {data.boards.map((entity) => (
                        <Post
                            key={entity.id}
                            number={entity.id}
                            title={entity.title}
                            username={entity.userNickname}
                            commentCnt={entity.commentCnt}
                            link={`/detail/${entity.id}`} // 여기서 링크를 올바르게 수정합니다.
                            day={getMD(entity.createdAt)}
                        />
                    ))}
                </tbody>
            </table>
            <BoardPage
                lastPage={data.totalPages}
                currentPage={page}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default MainBoard;
