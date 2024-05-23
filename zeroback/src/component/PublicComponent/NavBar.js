import { Link } from "react-router-dom";
import './NavBar.css';
import Hamberger from "./nav_hamberger";

function NavBar(props) {
    let { linkName1 } = props;
    let { linkName2 } = props;

    return (
        <main>
            <div id="nav-bar">
                <div id="nav-left">
                    <Hamberger />
                    <Link to='/' className="nav-link">
                        <h1 id="nav-logo">WealthWise</h1>
                    </Link>
                </div>
                <div id="nav-right">
                    <Link to='/index' className="nav-link">{linkName1}</Link>
                    <Link to='/board' className="nav-link">{linkName2}</Link>
                </div>
            </div>
            <i id="nav-line"></i>
            {/* 메뉴 */}
        </main>
    );
}

export default NavBar;