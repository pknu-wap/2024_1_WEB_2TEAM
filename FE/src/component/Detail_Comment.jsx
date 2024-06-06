import React from 'react';
import '../styles/Detail.css';

function DetailComment({ userNickname, date, context }) { // 구조 분해 할당 사용
    return (
        <div className="detail_page_comment_view"> {/* class를 className으로 수정 */}
            <div className="detail_page_comment_title">
                <p className="detail_page_comment_title_writer">{userNickname}</p>
                <p className="detail_page_comment_title_date">{date}</p>
            </div>
            <div className="detail_page_comment_contour"></div>
            <div className="detail_page_comment_context">
                <p>{context}</p>
            </div>
        </div>
    );
}

export default DetailComment;