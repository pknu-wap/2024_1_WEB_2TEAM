import React, { useState, useEffect, useCallback } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import '../styles/MainPage.css';
import Detail from "../component/Detail";
import NavBar from "../component/NavBar";

function DetailPage() {
    const { boardId } = useParams(); // URL 파라미터에서 boardId 가져오기
    const [title, setTitle] = useState('');
    const [writer, setWriter] = useState('');
    const [date, setDate] = useState('');
    const [context, setContext] = useState('');
    const [comments, setComments] = useState([]);

    const getData = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:8080/boards/${boardId}`);
            const data = response.data;

            setTitle(data.title);
            setWriter(data.userNickname);
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
            <Detail title={title} writer={writer} date={date} context={context} comments={comments} />
        </main>
    );
}

export default DetailPage;
