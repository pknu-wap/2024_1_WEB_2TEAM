import React from 'react';
import '../styles/Board.css';

function BoardPage(params) {
    function GetBoardPage() {
        const lastPage = Number(params.lastPage);
        const currentPage = Number(params.currentPage);

        let pages = [];
        for(let i = 1; i <= lastPage; i++){
            pages.push(i);
        }

        console.log("Get Board Pages : ", pages);

        return pages.map((page) => (
            page === currentPage ? 
                <a href={`/Board?page=${page}`} class="board_page_link bold_link" key={page}>[{page}]</a> :
                <a href={`/Board?page=${page}`} class="board_page_link" key={page}>[{page}]</a>
        ));
    }

    return (
        <div class="board_page">
            {GetBoardPage()}
        </div>
    );
}

export default BoardPage;