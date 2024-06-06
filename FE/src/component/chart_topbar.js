import React from "react";
import { Link } from "react-router-dom";
import '../styles/chart_topbar.css';

function TopBar(props) {
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