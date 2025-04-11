// src/App.js
import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PressRelease from './pages/PressRelease';
import Career from './pages/Career';
import NsusLife from './pages/NsusLife';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <MainNav />
        
        <Routes>
          {/* 메인 화면 */}
          <Route path="/" element={<HomePage />} />

          {/* 새로 만든 페이지들 */}
          <Route path="/press-release" element={<PressRelease />} />
          <Route path="/career" element={<Career />} />
          <Route path="/nsus-life" element={<NsusLife />} />
        </Routes>
      </div>
    </Router>
  );
}

/** 상단 공통 네비게이션 (메뉴) */
function MainNav() {
  return (
    <nav style={{ background: '#333', padding: '1rem' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: 0, justifyContent: 'center' }}>
        <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>HOME</Link></li>
        <li><Link to="/press-release" style={{ color: '#fff', textDecoration: 'none' }}>PRESS RELEASE</Link></li>
        <li><Link to="/career" style={{ color: '#fff', textDecoration: 'none' }}>CAREER</Link></li>
        <li><Link to="/nsus-life" style={{ color: '#fff', textDecoration: 'none' }}>NSUS LIFE</Link></li>
      </ul>
    </nav>
  );
}

export default App;
