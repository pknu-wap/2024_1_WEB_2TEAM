import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import BoardPage from './pages/BoardPage';
import IndexPage from './pages/ChartPage';
import LoginPage from './pages/LoginPage';
import { RequireToken } from "./component/Auth";
import './App.css';

import NavMenu from "./component/navbar_menu";
import CreateAccountPage from "./pages/CreateAccountPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/board" element={<BoardPage />} />
        <Route path="/index" element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create_account" element={<CreateAccountPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/test" element={< NavMenu />} />

      </Routes>
    </div>
  );
}

export default App;