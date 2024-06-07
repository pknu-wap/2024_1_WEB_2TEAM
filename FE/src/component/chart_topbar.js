import React from "react";
import { Link } from "react-router-dom";
import '../styles/chart_topbar.css';
import Bookmark from "./bookmark";

function TopBar(props) {
    let { id, major_cg, medium_cg, minor_cg } = props;

    console.log("TopBar - id:", id); // Log id in TopBar

    return (
        <div id="topbar" >
            <div id="topbar-contents">
                <div id="topbar-path">
                    <Link to='/' className="topbar-path-link">
                        <img id="topbar-homeimg" src={process.env.PUBLIC_URL + '/home.png'} alt="home" />
                    </Link>
                    <text className="topbar-path-txt">&nbsp;&nbsp;/&nbsp;&nbsp;</text>
                    <div className="topbar-path-link">{major_cg}</div>
                    <text className="topbar-path-txt">&nbsp;&nbsp;/&nbsp;&nbsp;</text>
                    <div className="topbar-path-link">{medium_cg}</div>
                    <text className="topbar-path-txt">&nbsp;&nbsp;/&nbsp;&nbsp;</text>
                    <div className="topbar-path-link">{minor_cg}</div>
                </div>
                <Bookmark indexId={id} /> {/* Pass indexId prop to Bookmark */}
            </div>
        </div>
    );
}

export default TopBar;
