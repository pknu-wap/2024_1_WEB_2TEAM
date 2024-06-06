import { useState } from "react";
import { Link } from "react-router-dom";
import { isTokenAvailable } from "../component/Auth";
import '../styles/NavBar.css';
import NavMenu from "./navbar_menu";

function NavBar(props) {
    const [view, setView] = useState(false);

    const link2 = rightLinkLoad();
    const linkName2 = rightNameLoad();

    const { linkName1 } = props;
    const { link1 } = props;

    function rightNameLoad() {
        if (isTokenAvailable()) {
            return "프로필";
        } else {
            return "로그인";
        }
    }

    function rightLinkLoad() {
        if (isTokenAvailable()) {
            return "/profile";
        } else {
            return "/login";
        }
    }

    return (
        <div id="nav" >
            <div id="nav-bar">
                <div id="nav-left">
                    <div id="nav-toggle">
                        <input type="checkbox" onClick={() => { setView(!view) }} />
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <Link to='/' className="nav-link">
                        <h1 id="nav-logo">WealthWise</h1>
                    </Link>
                </div>
                <div id="nav-right">
                    <Link to={link1} className="nav-link">{linkName1}</Link>
                    <Link to={link2} className="nav-link">{linkName2}</Link>
                </div>
            </div>
            {view && <NavMenu setView={setView} />}
        </div>
    );
}

export default NavBar;