/*Router로 안되서 놔둔 파일*/

import { Link } from "react-router-dom";
import Button from "./Button.jsx";
import './NavBar.css';

function NavBar() {
    return (
        <div id="NavBar">
            <div id="NavTexts">
                <Link to='/' className="link">
                    <h1 id="Logo">WealthWise</h1>
                </Link>
                <div id="links">
                    <Button name="지수" link="/index" />
                    <Button name="뉴스" link="/" />
                    <Button name="게시판" link="/board" />
                    <Button name="마이페이지" link="/" />
                    <Button name="로그인" link="/sign_in" />
                    {/* <Link to='/index' className="link">지수</Link>
                    <Link to='/' className="link">뉴스</Link>
                    <Link to='/board' className="link">게시판</Link>
                    <Link to='/' className="link">마이페이지</Link>
                    <Link to='/sign_in' className="link">로그인</Link> */}
                </div>
            </div>
            <i id="NavLine"></i>
        </div>
    );
}

export default NavBar;