import { Link } from "react-router-dom";
import './NavBar.css';

function NavBar() {
    return (
        <div id="nav-bar">
            <div id="nav-txts">
                <Link to='/' className="nav-link">
                    <h1 id="nav-logo">WealthWise</h1>
                </Link>
                <div id="nav-links">
                    <Link to='/index' className="nav-link">지수</Link>
                    <Link to='/board' className="nav-link">게시판</Link>
                    {/* <Link to='/login' className="nav_link">로그인</Link> */}
                </div>
            </div>
            <i id="nav-line"></i>
        </div>
    );
}

export default NavBar;