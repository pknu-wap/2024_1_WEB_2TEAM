import { Link } from "react-router-dom";
import '../styles/NavBar.css';
import Hamberger from "./navbar_hamberger";

function NavBar(props) {
    let { linkName1 } = props;
    let { linkName2 } = props;
    let { link1 } = props;
    let { link2 } = props;

    return (
        <main id="nav">
            <div id="nav-bar">
                <div id="nav-left">
                    <Hamberger />
                    <Link to='/' className="nav-link">
                        <h1 id="nav-logo">WealthWise</h1>
                    </Link>
                </div>
                <div id="nav-right">
                    <Link to={link1} className="nav-link">{linkName1}</Link>
                    <Link to={link2} className="nav-link">{linkName2}</Link>
                </div>
            </div>
            <i id="nav-line"></i>
            {/* 메뉴 */}
        </main>
    );
}

export default NavBar;