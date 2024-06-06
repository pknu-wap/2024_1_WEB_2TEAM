import React from "react";
import '../styles/MainPage.css'
import Detail from "../component/Detail";
import NavBar from "../component/NavBar";

function DetailPage() {
    var title;
    var writer;
    var date;
    var context;
    var comments;

    function getData() {
        /* TODO : 백엔드에서 데이터 가져오기 */
        const data = getTmpData();

        title = data.title;
        writer = data.writer;
        date = data.date;
        context = data.context;
        comments = data.comments;
    }   

    function getTmpData() {
        return {
            title : "홀리몰리",
            writer : "qwer1234",
            date : "2023-01-01T10:00:00",
            context : "진짜 프론트 해야할 일 너무 많다 진짜진짜진짜진짜 그만! 그만!!!! 멈춰!!!!!!!",
            comments : [
            {
                writer:"yuyu0830",
                date:"2023-01-01T10:00:00",
                context:"하 그만하고싶다 진짜"
            },
            {
                writer:"abdds1166",
                date:"2023-01-01T10:00:00",
                context:"그만하자"
            }
        ]};
    }

    return (
        <main>
            <NavBar linkName1={"지수"} linkName2={"로그인"} link1={'/index'} link2={'/login'} />
            {getData()}
            <Detail title={title} writer={writer} date={date} context={context} comments={comments} />
        </main>
    );
}

export default DetailPage;