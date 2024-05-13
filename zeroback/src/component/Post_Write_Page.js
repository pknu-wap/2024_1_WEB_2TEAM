import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
/* import axios from 'axios'; */

function PostWrite() {
    const navigate = useNavigate();

    const [board, setBoard] = useState({
        title: '',
        createdBy: '',
        contents: '',
    });

    const { title, createdBy, contents } = board; //비구조화 할당

    const onChange = (event) => {
        const { value, name } = event.target; //event.target에서 name과 value만 가져오기
        setBoard({
            ...board,
            [name]: value,
        });
    };

    const saveBoard = async () => {
        /* await axios.post(`//localhost:8080/board`, board).then((res) => {
            alert('등록되었습니다.');
            navigate('/board');
        }); */
    };

    const backToList = () => {
        navigate('/board');
    };

    return (
        <main>
            <div id="NavBar">
                <div id="NavTexts">
                    <Link to='/' className="link">
                        <h1 id="Logo">WealthWise</h1>
                    </Link>
                    <div id="links">
                        <Link to='/index' className="link">지수</Link>
                        <Link to='/' className="link">뉴스</Link>
                        <Link to='/board' className="link">게시판</Link>
                        <Link to='/' className="link">마이페이지</Link>
                    </div>
                </div>
                <i id="NavLine"></i>
            </div>
            <div>
                <div>
                    <span>제목</span>
                    <input type="text" name="title" value={title} onChange={onChange} />
                </div>
                <div>
                    <span>작성자</span>
                    <input
                        type="text"
                        name="createdBy"
                        value={createdBy}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <span>내용</span>
                    <textarea
                        name="contents"
                        cols="30"
                        rows="10"
                        value={contents}
                        onChange={onChange}
                    ></textarea>
                </div>
                <div>
                    <button onClick={saveBoard}>저장</button>
                    <button onClick={backToList}>취소</button>
                </div>
            </div>
        </main>
    );
};

export default PostWrite;