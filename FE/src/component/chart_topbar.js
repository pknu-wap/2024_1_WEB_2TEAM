import React from "react";
import { Link } from "react-router-dom";
import '../styles/chart_topbar.css';
import Bookmark from "./bookmark";

function TopBar(props) {
    let { id } = props;
    let { major_cg } = props;
    let { medium_cg } = props;
    let { minor_cg } = props;

    return (
        <div id="topbar">
            <div id="topbar-contents">
                <div id="topbar-path">
                    <Link to='/' className="topbar-path-link">
                        <img id="topbar-homeimg" src={process.env.PUBLIC_URL + '/home.png'} />
                    </Link>
                    <text className="topbar-path-txt">&nbsp;&nbsp;/&nbsp;&nbsp;</text>
                    <div className="topbar-path-link">{major_cg}</div>
                    <text className="topbar-path-txt">&nbsp;&nbsp;/&nbsp;&nbsp;</text>
                    <div className="topbar-path-link">{medium_cg}</div>
                    <text className="topbar-path-txt">&nbsp;&nbsp;/&nbsp;&nbsp;</text>
                    <div className="topbar-path-link">{minor_cg}</div>
                </div>
                <Bookmark indexId={id} />
            </div>
        </div>
    );
}

export default TopBar;