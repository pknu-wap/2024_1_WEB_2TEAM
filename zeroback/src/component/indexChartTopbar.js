import React from "react";
import { Link } from "react-router-dom";
import '../styles/indexChartTopbar.css';

function TopBar() {
    return (
        <div id="topbar">
            <div id="topbar-contents">
                <div id="topbar-path">
                    <Link to='/' className="topbar-path-link">
                        <img id="topbar-homeimg" src={process.env.PUBLIC_URL + '/home.png'} />
                    </Link>
                    <text className="topbar-path-txt">&nbsp;&nbsp;/&nbsp;&nbsp;</text>
                    <Link to='/' className="topbar-path-link">환율</Link>
                    <text className="topbar-path-txt">&nbsp;&nbsp;/&nbsp;&nbsp;</text>
                    <Link to='/' className="topbar-path-link">환율 지표</Link>
                    <text className="topbar-path-txt">&nbsp;&nbsp;/&nbsp;&nbsp;</text>
                    <Link to='/' className="topbar-path-link">달러/엔화</Link>
                </div>
                <div id="topbar-bookmark">
                    <input type="checkbox" id="topbar-checkbox" />
                    <img id="topbar-offimg" src={process.env.PUBLIC_URL + '/bookmark_off.png'} />
                    <img id="topbar-onimg" src={process.env.PUBLIC_URL + '/bookmark_on.png'} />
                </div>
            </div>
        </div>
    );
}

export default TopBar;