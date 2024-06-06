import React, { useState, useEffect, useCallback } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import '../styles/MainPage.css';
import Detail from "../component/Detail";
import NavBar from "../component/NavBar";

function DetailPage() {
    const { boardId } = useParams();
    const [title, setTitle] = useState('');
    const [userNickname, setUserNickname] = useState(''); // writer 대신 userNickname 사용
    const [date, setDate] = useState('');
    const [context, setContext] = useState('');
    const [comments, setComments] = useState([]);

    const getData = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:8080/boards/${boardId}`);
            const data = response.data;

            setTitle(data.title);
            setUserNickname(data.userNickname); // writer 대신 userNickname 사용
            setDate(data.createdAt);
            setContext(data.body);
            setComments(data.comments || []);
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    }, [boardId]);

    useEffect(() => {
        getData();
    }, [getData]);

    return (
        <main>
            <NavBar linkName1={"지수"} linkName2={"로그인"} link1={'/index'} link2={'/login'} />
            <Detail 
                boardId={boardId} 
                title={title} 
                userNickname={userNickname} // writer 대신 userNickname 사용
                date={date} 
                context={context} 
                comments={comments} 
                refreshComments={getData} // getData 함수를 Detail 컴포넌트에 전달
            />
        </main>
    );
}

export default DetailPage;
