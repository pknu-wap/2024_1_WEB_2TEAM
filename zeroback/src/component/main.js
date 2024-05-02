import React from "react";
import {Routes, Route, Link, useNavigate} from "react-router-dom"
import Board from './board';
import './main.css'

function Main () {
    const navigate = useNavigate();

    const goToIndex = () => {
        navigate("/index");
    }

    const goToBoard = () => {
        navigate("/board");
    }

    return (
        <div className="links">
            <Link to='/board' className="link">지수</Link>
            <index onClick= {goToIndex} className="link">Index</index>
            <board onClick={goToBoard} className="link">Community</board>
        </div>
    );
}

export default Main;