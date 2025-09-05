import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import UserDataPolicy from "./components/UserDataPolicy";
import PrivacyPolicy from "./components/PrivacyPolicy";

export default function App() {
  return (
    <Router>
      <div className="app">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user-data-policy" element={<UserDataPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2024 Mounir Mahroug. All rights reserved.</p>
            <div className="footer-links">
              <Link to="/user-data-policy">User Data Policy</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
