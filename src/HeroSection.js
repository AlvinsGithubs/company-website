// src/HeroSection.js
import React, { useEffect, useState } from 'react';
import './HeroSection.css';

function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const videoStyle = {
    transform: `translateY(${offsetY * 0.3}px)`
  };

  return (
    <section id="hero">
      <video
        className="hero-video"
        style={videoStyle}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={`${process.env.PUBLIC_URL}/images/hero-bg.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <h1>Experience the Best in iGaming</h1>
        <p>
          From Casino Gaming and Sports Betting to Live Dealer experiences,
          we bring you a world of gaming excitement.
        </p>
        <button
          className="btn"
          onClick={() => {
            const el = document.getElementById('about');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Learn More
        </button>
      </div>
    </section>
  );
}

export default HeroSection;


// // src/HeroSection.js
// import React, { useEffect, useState } from 'react';
// import './HeroSection.css';

// function HeroSection() {
//   const [offsetY, setOffsetY] = useState(0);
//   const handleScroll = () => setOffsetY(window.pageYOffset);

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // 스크롤에 따라 살짝 파라랙스 효과
//   const videoStyle = {
//     transform: `translateY(${offsetY * 0.3}px)`
//   };

//   return (
//     <section id="hero">
//       <video
//         className="hero-video"
//         style={videoStyle}
//         autoPlay
//         muted
//         loop
//         playsInline
//       >
//         {/* public/images/hero-bg.mp4 */}
//         <source src={`${process.env.PUBLIC_URL}/images/hero-bg.mp4`} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       <div className="hero-overlay"></div>

//       <div className="hero-container">
//         <h1>Experience the Best in iGaming</h1>
//         <p>From Casino Gaming and Sports Betting to Live Dealer experiences, we bring you a world of gaming excitement.</p>
//         <a href="/#about" className="btn">Learn More</a>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;
