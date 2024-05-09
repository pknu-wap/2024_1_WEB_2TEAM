import React from "react";
import {Routes, Route} from "react-router-dom";
import Main from './component/Main_Page';
import Board from './component/Board_Page';
import Index from './component/index_page';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/board" element={<Board/>} />
        <Route path="/index" element={<Index/>} />
      </Routes>
    </div>
  );
}

export default App;


/* <main>
<div id="NavBar">
  <div id="NavTexts">
    <Link to='/' className="link">
      <h1 id="Logo">WealthWise</h1>
    </Link>
    <div id="links">
      <Link to='/index' className="link">지수</Link>
      <Link to='/' className="link">뉴스</Link>
      <Link to='/board' className="link">게시판</Link>
      <Link to='/' className="link">마이페이지</Link>
    </div>
  </div>
  <i id="NavLine"></i>
</div>
<div id="page">
  <Routes>
    <Route path="/board" element={<Board/>} />
    <Route path="/index" element={<TradingViewWidget/>} />
  </Routes>
</div>
</main> */