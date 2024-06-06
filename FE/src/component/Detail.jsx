import React from 'react';
import '../styles/Detail.css';
import { Link } from "react-router-dom";
import DetailComment from './Detail_Comment';

function Detail(props) {
    var title = props.title;
    var writer = props.writer;
    var date = props.date;
    var context = props.context;
    var comments = props.comments;

    function getYMD(day) {
        return day.substr(2, 2) + "-" + day.substr(5, 2) + "-" + day.substr(8, 2);
    }

    function getComment() {
        return comments.map((comment) => (
            <DetailComment
                writer={comment.writer}
                date={getYMD(comment.date)}
                context={comment.context}
            />
        ))
    }

    return (
        <div id="detail_page_back">
            {/* 게시글 */}
            <div id="detail_page_content">
                <div id="detail_page_title">
                    <div id="detail_page_title_main">{title}</div>
                    <div id="detail_page_title_sub">
                        <p><strong>작성자</strong> : {writer}</p>
                        <p><strong>작성일</strong> : {getYMD(date)}</p>
                    </div>
                </div>
                <div id="detail_page_context">
                    <p>{context}</p>
                </div>
            </div>


            {/* 구분선 */}
            <div id="detail_page_contour"></div>


            {/* 댓글 */}
            <div id="detail_page_comment">
                {getComment()}

                <div id="detail_page_comment_write">
                    <form>
                        <textarea></textarea>
                        <button>작성</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Detail;