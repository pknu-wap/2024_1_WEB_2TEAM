import React from "react";
import { Link } from "react-router-dom";
import '../styles/navbar_menu-link.css';

function MenuLinkButton(probs) {
    let { title } = probs;
    let { sub1 } = probs;
    let { sub2 } = probs;
    let { sub3 } = probs;
    let { sub4 } = probs;
    let { id } = probs;

    return (
        <div id="nav-menu-button">
            <Link to={`/index/${id}`} className="nav-menu-title">{title}</Link> {/* id별로 바꿀 예정 */}
            <div id="nav-menu-subs">
                <div className="nav-menu-sublink">{sub1}</div>
                <div className="nav-menu-sublink">{sub2}</div>
                <div className="nav-menu-sublink">{sub3}</div>
                <div className="nav-menu-sublink">{sub4}</div>
            </div>
        </div>
    );
}

export default MenuLinkButton;