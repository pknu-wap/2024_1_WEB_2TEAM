import React from "react";
import { Link } from "react-router-dom";
import '../styles/navbar_menu-link.css';

function MenuLinkButton(probs) {
    let { title } = probs;
    let { sub1 } = probs;
    let { sub2 } = probs;
    let { sub3 } = probs;
    let { sub4 } = probs;

    return (
        <div id="nav-menu-button">
            <Link to='/' className="nav-menu-title">{title}</Link>
            <div id="nav-menu-subs">
                <Link to='/' className="nav-menu-sublink">{sub1}</Link>
                <Link to='/' className="nav-menu-sublink">{sub2}</Link>
                <Link to='/' className="nav-menu-sublink">{sub3}</Link>
                <Link to='/' className="nav-menu-sublink">{sub4}</Link>
            </div>
        </div>
    );
}

export default MenuLinkButton;