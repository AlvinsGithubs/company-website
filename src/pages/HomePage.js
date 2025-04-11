// src/pages/HomePage.js
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HeroSection from '../HeroSection';
import '../App.css';

function HomePage() {
  const { section } = useParams(); // URL 파라미터 (예: "about", "services", 등)

  useEffect(() => {
    if (section) {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [section]);

  return (
    // 고정된 상단 메뉴가 있으므로, 상단 메뉴 높이만큼 여백을 추가합니다.
    <div className="HomePage" style={{ marginTop: '80px' }}>
      <HeroSection />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

/** About 섹션 */
function About() {
  return (
    <section id="about">
      <div className="container">
        <h2>About Us</h2>
        <p>
          iGaming Hub is your premier destination for an all-encompassing iGaming experience.
          Our platform offers diverse gaming services ranging from innovative casino games,
          competitive sports betting, to authentic live dealer sessions.
          With cutting-edge technology and a modern design, we provide a seamless gaming experience.
        </p>
      </div>
    </section>
  );
}

/** Services 섹션 */
function Services() {
  return (
    <section id="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <img
              src={`${process.env.PUBLIC_URL}/images/casino.png`}
              alt="Casino Gaming"
            />
            <h3>Casino Gaming</h3>
            <p>
              Enjoy a wide variety of casino games—from classic table games to modern slot machines—
              crafted for an immersive experience.
            </p>
          </div>
          <div className="service-card">
            <img
              src={`${process.env.PUBLIC_URL}/images/sportsbetting.png`}
              alt="Sports Betting"
            />
            <h3>Sports Betting</h3>
            <p>
              Bet on your favorite sports events with ease, and access competitive odds on a user-friendly platform.
            </p>
          </div>
          <div className="service-card">
            <img
              src={`${process.env.PUBLIC_URL}/images/livedealer.png`}
              alt="Live Dealer"
            />
            <h3>Live Dealer</h3>
            <p>
              Experience the thrill of real-time gaming with our live dealer sessions that bring authenticity to your screen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Portfolio 섹션 */
function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container">
        <h2>Portfolio</h2>
        <div className="portfolio-grid">
          <div className="portfolio-item">
            <img
              src={`${process.env.PUBLIC_URL}/images/portfolio1.png`}
              alt="Casino Platform"
            />
            <div className="portfolio-overlay">
              <h3>Casino Platform</h3>
              <p>A comprehensive solution for online casino gaming.</p>
            </div>
          </div>
          <div className="portfolio-item">
            <img
              src={`${process.env.PUBLIC_URL}/images/portfolio2.png`}
              alt="Sports Betting Portal"
            />
            <div className="portfolio-overlay">
              <h3>Sports Betting Portal</h3>
              <p>An innovative platform tailored for sports enthusiasts.</p>
            </div>
          </div>
          <div className="portfolio-item">
            <img
              src={`${process.env.PUBLIC_URL}/images/portfolio3.png`}
              alt="Live Dealer System"
            />
            <div className="portfolio-overlay">
              <h3>Live Dealer System</h3>
              <p>Delivering an authentic live gaming experience.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Contact 섹션 */
function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent. We will contact you soon!');
    e.target.reset();
  };

  return (
    <section id="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your message" required />
          </div>
          <button type="submit" className="btn">Send</button>
        </form>
      </div>
    </section>
  );
}

/** Footer 섹션 */
function Footer() {
  return (
    <footer>
      <div className="container">
        <p>© 2025 iGaming Hub. All rights reserved.</p>
        <div className="social-links">
          <a href="#!">Facebook</a>
          <a href="#!">Twitter</a>
          <a href="#!">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default HomePage;


// // src/pages/HomePage.js
// import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import HeroSection from '../HeroSection';
// import '../App.css';

// function HomePage() {
//   // URL 파라미터로 섹션 이름을 받음 (예: "about", "services", "portfolio", "contact")
//   const { section } = useParams();

//   useEffect(() => {
//     if (section) {
//       // "about", "services", 등 URL 파라미터가 있으면 해당 id로 스크롤
//       const el = document.getElementById(section);
//       if (el) {
//         el.scrollIntoView({ behavior: 'smooth' });
//       }
//     } else {
//       // 파라미터가 없는 경우 최상단 스크롤
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
//   }, [section]);

//   return (
//     // 상단 메뉴가 고정되어 있으므로, 콘텐츠가 메뉴 밑에서 시작하도록 margin-top을 줌
//     <div className="HomePage" style={{ marginTop: '50px' }}>
//       <HeroSection />
//       <About />
//       <Services />
//       <Portfolio />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// /** ================== About 섹션 ================== */
// function About() {
//   return (
//     <section id="about">
//       <div className="container">
//         <h2>About Us</h2>
//         <p>
//           iGaming Hub is your premier destination for an all-encompassing iGaming experience.
//           Our platform offers diverse gaming services ranging from innovative casino games,
//           competitive sports betting, to authentic live dealer sessions.
//           With cutting-edge technology and a modern design, we provide a seamless gaming experience.
//         </p>
//       </div>
//     </section>
//   );
// }

// /** ================== Services 섹션 ================== */
// function Services() {
//   return (
//     <section id="services">
//       <div className="container">
//         <h2>Our Services</h2>
//         <div className="services-grid">
//           <div className="service-card">
//             <img
//               src={`${process.env.PUBLIC_URL}/images/casino.png`}
//               alt="Casino Gaming"
//             />
//             <h3>Casino Gaming</h3>
//             <p>
//               Enjoy a wide variety of casino games—from classic table games to modern slot machines—
//               crafted for an immersive experience.
//             </p>
//           </div>
//           <div className="service-card">
//             <img
//               src={`${process.env.PUBLIC_URL}/images/sportsbetting.png`}
//               alt="Sports Betting"
//             />
//             <h3>Sports Betting</h3>
//             <p>
//               Bet on your favorite sports events with ease, and access competitive odds on a user-friendly platform.
//             </p>
//           </div>
//           <div className="service-card">
//             <img
//               src={`${process.env.PUBLIC_URL}/images/livedealer.png`}
//               alt="Live Dealer"
//             />
//             <h3>Live Dealer</h3>
//             <p>
//               Experience the thrill of real-time gaming with our live dealer sessions that bring authenticity to your screen.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /** ================== Portfolio 섹션 ================== */
// function Portfolio() {
//   return (
//     <section id="portfolio">
//       <div className="container">
//         <h2>Portfolio</h2>
//         <div className="portfolio-grid">
//           <div className="portfolio-item">
//             <img
//               src={`${process.env.PUBLIC_URL}/images/portfolio1.png`}
//               alt="Casino Platform"
//             />
//             <div className="portfolio-overlay">
//               <h3>Casino Platform</h3>
//               <p>A comprehensive solution for online casino gaming.</p>
//             </div>
//           </div>
//           <div className="portfolio-item">
//             <img
//               src={`${process.env.PUBLIC_URL}/images/portfolio2.png`}
//               alt="Sports Betting Portal"
//             />
//             <div className="portfolio-overlay">
//               <h3>Sports Betting Portal</h3>
//               <p>An innovative platform tailored for sports enthusiasts.</p>
//             </div>
//           </div>
//           <div className="portfolio-item">
//             <img
//               src={`${process.env.PUBLIC_URL}/images/portfolio3.png`}
//               alt="Live Dealer System"
//             />
//             <div className="portfolio-overlay">
//               <h3>Live Dealer System</h3>
//               <p>Delivering an authentic live gaming experience.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /** ================== Contact 섹션 ================== */
// function Contact() {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Your message has been sent. We will contact you soon!');
//     e.target.reset();
//   };

//   return (
//     <section id="contact">
//       <div className="container">
//         <h2>Contact Us</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name">Name</label>
//             <input type="text" id="name" name="name" placeholder="Enter your name" required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" name="email" placeholder="Enter your email" required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="message">Message</label>
//             <textarea id="message" name="message" placeholder="Your message" required />
//           </div>
//           <button type="submit" className="btn">Send</button>
//         </form>
//       </div>
//     </section>
//   );
// }

// /** ================== Footer 섹션 ================== */
// function Footer() {
//   return (
//     <footer>
//       <div className="container">
//         <p>© 2025 iGaming Hub. All rights reserved.</p>
//         <div className="social-links">
//           <a href="#!">Facebook</a>
//           <a href="#!">Twitter</a>
//           <a href="#!">Instagram</a>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default HomePage;
