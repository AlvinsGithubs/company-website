// src/HeroSection.js
import React, { useEffect, useState } from 'react';
import './HeroSection.css';

function HeroSection() {
  // 아래는 만약 스크롤에 따른 추가 효과를 주고 싶다면 활용할 수 있습니다.
  // 예: 파라랙스 효과 (필요시 추가)
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 영상 배경은 고정 처리하며, 파라랙스 효과를 주고 싶다면 transform 속성에 offsetY 값을 반영할 수 있습니다.
  const videoStyle = {
    transform: `translateY(${offsetY * 0.3}px)`  // 스크롤에 따른 미세한 움직임 (조정 가능)
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
        <a href="#about" className="btn">Learn More</a>
      </div>
    </section>
  );
}

export default HeroSection;
