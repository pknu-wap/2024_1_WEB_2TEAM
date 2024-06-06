import React, { useState } from 'react';
import '../styles/Detail.css';
import DetailComment from './Detail_Comment';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../component/Auth';

function Detail({ boardId, title, userNickname, date, context, comments, refreshComments }) {
    const [newComment, setNewComment] = useState("");
    const navigate = useNavigate();

    function getYMD(day) {
        return day.substr(2, 2) + "-" + day.substr(5, 2) + "-" + day.substr(8, 2);
    }

    function getComment() {
        return comments.map((comment) => (
            <DetailComment
                key={comment.id}
                userNickname={comment.userNickname} // writer 대신 userNickname 사용
                date={getYMD(comment.createdAt)}
                context={comment.body}
            />
        ));
    }

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = getToken(); // 토큰을 로컬 스토리지에서 가져옴
            if (!token) {
                alert("로그인이 필요합니다."); // 경고 메시지 또는 다른 처리
                navigate("/login"); // 로그인 페이지로 리디렉션
                return;
            }
            const response = await axios.post(`http://localhost:8080/comments/${boardId}`, {
                body: newComment
            }, {
                headers: {
                    Authorization: `Bearer ${token}` // 헤더에 토큰 포함
                }
            });
            if (response.status === 200) {
                setNewComment(""); // 댓글 입력란 초기화
                refreshComments(); // 댓글 목록을 새로고침
            }
        } catch (error) {
            console.error("Failed to submit comment:", error);
            alert("댓글 작성에 실패했습니다.");
        }
    };

    return (
        <div id="detail_page_back">
            <div id="detail_page_content">
                <div id="detail_page_title">
                    <div id="detail_page_title_main">{title}</div>
                    <div id="detail_page_title_sub">
                        <p><strong>작성자</strong> : {userNickname}</p>
                        <p><strong>작성일</strong> : {getYMD(date)}</p>
                    </div>
                </div>
                <div id="detail_page_context">
                    <p>{context}</p>
                </div>
            </div>
            <div id="detail_page_contour"></div>
            <div id="detail_page_comment">
                {getComment()}
                <div id="detail_page_comment_write">
                    <form onSubmit={handleCommentSubmit}>
                        <textarea
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        ></textarea>
                        <button type="submit">작성</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Detail;
