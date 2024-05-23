import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from './component/MainPage/MainPage';
import BoardPage from './component/BoardPage/BoardPage';
import IndexPage from './component/IndexPage/IndexChartPage/IndexPage';
import LoginPage from './component/LoginPage/LoginPage';
import './App.css';

import Hamberger from "./component/PublicComponent/nav_hamberger";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/board" element={<BoardPage />} />
        <Route path="/index" element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/test" element={<Hamberger />} />

      </Routes>
    </div>
  );
}

export default App;