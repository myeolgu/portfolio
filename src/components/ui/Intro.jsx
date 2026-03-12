import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Intro = ({ onComplete }) => {
  const overlayRef = useRef(null);
  const textRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    // 인트로 시작 시 스크롤 고정 및 위치 초기화
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    // [중요] 초기 상태를 즉시 설정하여 깜빡임 방지
    gsap.set(textRef.current, { x: 0, y: 0, opacity: 1 });
    gsap.set(counterRef.current, { opacity: 1, y: 0 });
    gsap.set(overlayRef.current, { opacity: 1 });

    let animationTl;

    const startAnimation = async () => {
      // 1. 필요한 에셋(폰트 등) 로드 대기
      if (typeof document !== 'undefined' && document.fonts) {
        await document.fonts.ready;
      }
      
      // 레이아웃이 완전히 정착될 시간을 미세하게 부여 (모바일 주소창/레이아웃 안정화)
      await new Promise(resolve => requestAnimationFrame(resolve));

      // 2. 타임라인 생성
      // 이 시점에서 이미 폰트가 로드되었으므로 정확한 측정이 가능합니다.
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = originalStyle;
          if (onComplete) onComplete();
        },
      });
      animationTl = tl;

      // 단계별 애니메이션 구성
      // 1단계: 카운터 숫자 애니메이션
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

      // 2단계: 카운터 퇴장
      tl.to(counterRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: 'power2.in',
      }, '+=0.1');

      // 3단계: 로고 이동 및 폰트 스타일 전환
      const headerLogoLink = document.querySelector('.header .logo-box a');
      
      if (textRef.current && headerLogoLink) {
        const logoStyle = window.getComputedStyle(headerLogoLink);
        const targetFontSize = logoStyle.fontSize;
        const targetLetterSpacing = logoStyle.letterSpacing === 'normal' ? '0px' : logoStyle.letterSpacing;

        tl.to(textRef.current, {
          fontSize: targetFontSize,
          letterSpacing: targetLetterSpacing,
          // 실시간 좌표 계산 (Functional Tweens)
          x: () => {
            const target = headerLogoLink.getBoundingClientRect();
            const current = textRef.current.getBoundingClientRect();
            return (target.left + target.width / 2) - (current.left + current.width / 2);
          },
          y: () => {
            const target = headerLogoLink.getBoundingClientRect();
            const current = textRef.current.getBoundingClientRect();
            return (target.top + target.height / 2) - (current.top + current.height / 2);
          },
          duration: 0.8,
          ease: 'power3.inOut',
          onStart: () => {
            console.log("[Intro Debug] Logo movement started.");
          }
        });
      }

      // 4단계: 오버레이 페이드 아웃 및 종료
      tl.to(overlayRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      }, '+=0.2');
    };

    startAnimation();

    return () => {
      document.body.style.overflow = originalStyle;
      if (animationTl) animationTl.kill();
    };
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
