import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import BoardPage from './pages/BoardPage';
import IndexPage from './pages/ChartPage';
import LoginPage from './pages/LoginPage';
import './App.css';

import NavMenu from "./component/navbar_menu";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/board" element={<BoardPage />} />
        <Route path="/index" element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/test" element={< NavMenu />} />

      </Routes>
    </div>
  );
}

export default App;