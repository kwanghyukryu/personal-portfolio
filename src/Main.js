import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import MoreProject from './MoreProject';
import ScrollToTop from "./ScrollToTop";

function Main() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/More-Project" element={<MoreProject />} />
      </Routes>
    </Router>
  );
}

export default Main;
