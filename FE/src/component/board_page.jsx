import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Board.css';

function BoardPage({ lastPage, currentPage, onPageChange }) {
    function GetBoardPage() {
        const pages = [];
        for (let i = 1; i <= lastPage; i++) {
            pages.push(i);
        }

        return pages.map((page) => (
            <Link
                to={`?page=${page}`}
                className={`board_page_link ${page === currentPage ? 'bold_link' : ''}`}
                key={page}
                onClick={(e) => {
                    e.preventDefault(); // 링크 기본 동작을 막음
                    onPageChange(page); // 상태 업데이트를 통해 페이지 변경
                }}
            >
                [{page}]
            </Link>
        ));
    }

    return (
        <div className="board_page">
            {GetBoardPage()}
        </div>
    );
}

export default BoardPage;
