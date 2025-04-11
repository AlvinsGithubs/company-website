// src/App.js
import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <MainNav />
        <Routes>
          {/* HomePage: SPA 방식으로 모든 섹션을 포함 */}
          <Route path="/" element={<HomePage />} />
          <Route path="/:section" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

/**
 * MainNav: 상단 고정 메뉴 (8개 항목)
 * - Home, About, Services, Portfolio, Contact: SPA 내 앵커 링크
 * - Press Release, Career, NSUS Life: 외부 링크로 이동
 */
function MainNav() {
  // GitHub Pages 배포 시 PUBLIC_URL이 "/company-website"일 수 있으므로 사용
  const basePath = process.env.PUBLIC_URL || "";

  return (
    <nav
      className="main-nav"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        background: '#333',
        zIndex: 1000,
        padding: '1rem 0'
      }}
    >
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          gap: '1rem',
          margin: 0,
          justifyContent: 'center'
        }}
      >
        {/* SPA 내 섹션 이동 */}
        <li>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
            Home
          </Link>
        </li>
        <li>
          <a
            href={`${basePath}/#about`}
            style={{ color: '#fff', textDecoration: 'none' }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href={`${basePath}/#services`}
            style={{ color: '#fff', textDecoration: 'none' }}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href={`${basePath}/#portfolio`}
            style={{ color: '#fff', textDecoration: 'none' }}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href={`${basePath}/#contact`}
            style={{ color: '#fff', textDecoration: 'none' }}
          >
            Contact
          </a>
        </li>

        {/* 외부 링크 */}
        <li>
          <a
            href="https://www.nsuslab.com/press"
            style={{ color: '#fff', textDecoration: 'none' }}
          >
            Press Release
          </a>
        </li>
        <li>
          <a
            href="https://nsuslabkorea.career.greetinghr.com/home"
            style={{ color: '#fff', textDecoration: 'none' }}
          >
            Career
          </a>
        </li>
        <li>
          <a
            href="https://www.nsuslab.com/nsus-life"
            style={{ color: '#fff', textDecoration: 'none' }}
          >
            NSUS Life
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default App;


// // src/App.js
// import React from 'react';
// import {
//   HashRouter as Router,
//   Routes,
//   Route,
//   Link
// } from 'react-router-dom';

// import HomePage from './pages/HomePage';
// import PressRelease from './pages/PressRelease';
// import Career from './pages/Career';
// import NsusLife from './pages/NsusLife';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <MainNav />
//         <Routes>
//           {/* HomePage : "/" 혹은 "/:section" 모두 HomePage가 렌더링되어 내부 useEffect로 스크롤 이동 */}
//           <Route path="/" element={<HomePage />} />
//           <Route path="/:section" element={<HomePage />} />

//           {/* PressRelease, Career, NsusLife 는 별도 페이지 */}
//           <Route path="/press-release" element={<PressRelease />} />
//           <Route path="/career" element={<Career />} />
//           <Route path="/nsus-life" element={<NsusLife />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// /**
//  * MainNav: 상단 고정 메뉴 (8개 항목)
//  * - Home: "/" → HomePage 전체
//  * - About, Services, Portfolio, Contact: SPA 방식 (라우터 파라미터, 예: "/about")
//  * - Press Release, Career, NSUS Life: 별도 페이지 ("/press-release", ...)
//  */
// function MainNav() {
//   return (
//     <nav className="main-nav" style={{
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       width: '100%',
//       background: '#333',
//       zIndex: 1000,
//       padding: '1rem 0'
//     }}>
//       <ul style={{
//         listStyle: 'none',
//         display: 'flex',
//         gap: '1rem',
//         margin: 0,
//         justifyContent: 'center'
//       }}>
//         <li>
//           <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>
//             About
//           </Link>
//         </li>
//         <li>
//           <Link to="/services" style={{ color: '#fff', textDecoration: 'none' }}>
//             Services
//           </Link>
//         </li>
//         <li>
//           <Link to="/portfolio" style={{ color: '#fff', textDecoration: 'none' }}>
//             Portfolio
//           </Link>
//         </li>
//         <li>
//           <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>
//             Contact
//           </Link>
//         </li>
//         <li>
//           <Link to="/press-release" style={{ color: '#fff', textDecoration: 'none' }}>
//             Press Release
//           </Link>
//         </li>
//         <li>
//           <Link to="/career" style={{ color: '#fff', textDecoration: 'none' }}>
//             Career
//           </Link>
//         </li>
//         <li>
//           <Link to="/nsus-life" style={{ color: '#fff', textDecoration: 'none' }}>
//             NSUS Life
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default App;
