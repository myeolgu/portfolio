import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Intro = ({ onComplete }) => {
  const overlayRef = useRef(null);
  const textRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    // 1단계: 카운터 0 → 100 (1.5초)
    tl.to(counterRef.current, {
      innerText: 100,
      duration: 1.5,
      ease: 'power2.inOut',
      snap: { innerText: 1 },
      onUpdate: function () {
        if (counterRef.current) {
          counterRef.current.textContent =
            Math.round(parseFloat(counterRef.current.textContent || '0'));
        }
      },
    });

    // 2단계: 카운터 페이드아웃
    tl.to(counterRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: 'power2.in',
    }, '+=0.2');

    // 3단계: "JU" 텍스트가 헤더 로고 위치로 이동 + 축소
    // 헤더 로고의 실제 위치를 찾아서 이동
    const headerLogo = document.querySelector('.header .logo');
    if (headerLogo) {
      const logoRect = headerLogo.getBoundingClientRect();
      const textRect = textRef.current.getBoundingClientRect();

      const targetX = logoRect.left + logoRect.width / 2 - textRect.left - textRect.width / 2;
      const targetY = logoRect.top + logoRect.height / 2 - textRect.top - textRect.height / 2;
      const targetScale = logoRect.height / textRect.height;

      tl.to(textRef.current, {
        x: targetX,
        y: targetY,
        scale: targetScale,
        duration: 0.8,
        ease: 'power3.inOut',
      });
    } else {
      // 헤더 로고를 못 찾으면 좌상단으로 이동
      tl.to(textRef.current, {
        x: -window.innerWidth / 2 + 80,
        y: -window.innerHeight / 2 + 60,
        scale: 0.3,
        duration: 0.8,
        ease: 'power3.inOut',
      });
    }

    // 4단계: 오버레이 페이드아웃 → Hero 등장
    tl.to(overlayRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out',
    }, '-=0.2');

  }, [onComplete]);

  return (
    <div className="intro-overlay" ref={overlayRef}>
      <div className="intro-center">
        <span className="intro-logo" ref={textRef}>JU</span>
        <span className="intro-counter" ref={counterRef}>0</span>
      </div>
    </div>
  );
};

export default Intro;
