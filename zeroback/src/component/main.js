import React from "react";
import {Routes, Route, Link} from "react-router-dom"
import Board from './board';
import './main.css'

function Main() {
    return (
        <div className="links">
            <Link to='/' className="link">Index</Link>
            <Link to='/' className="link">News</Link>
            <Link to='/board' className="link">Community</Link>
            <Link to='/' className="link">MyPage</Link>
            <Routes>
                <Route path="/board" element={<Board/>} />
            </Routes>
        </div>
    )
}

export default Main;