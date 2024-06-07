import React from "react";
import { Link } from "react-router-dom"
import '../styles/MainPage.css'
import NavBar from "../component/NavBar";

function Main() {
    return (
        <div id="main">
            <NavBar link1="/board" linkName1="게시판" />
            <div id="main_index_box">
                <span id="main_title">
                    주요 지수 한눈에 보기
                </span>
                <div id="main_charts">
                    <iframe src="https://d3fy651gv2fhd3.cloudfront.net/embed/?s=CRB&&v=202405210017&type=line&h=280&w=460" className="main_chart"></iframe>
                    <iframe src="https://www.widgets.investing.com/live-currency-cross-rates?theme=darkTheme&pairs=1,3,1565,9511,9536,158,159,650" className="main_chart"></iframe>
                    <iframe src="https://www.widgets.investing.com/top-cryptocurrencies?theme=darkTheme" className="main_chart"></iframe>
                </div>
            </div>
        </div>
    );
}

export default Main;