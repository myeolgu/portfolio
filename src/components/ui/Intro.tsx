import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

interface IntroProps {
  onComplete: () => void;
}

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const textFadedRef = useRef(false);

  useEffect(() => {
    // 프로그레스 바 애니메이션 (0% -> 100%, 3초)
    gsap.to(progressRef.current, {
      width: '100%',
      duration: 3,
      ease: 'power1.inOut',
      onUpdate: function() {
        const progress = this.progress() * 100;
        // 80% 도달 시 텍스트 페이드아웃 (JU 제외)
        if (progress >= 80 && !textFadedRef.current) {
          textFadedRef.current = true;
          gsap.to('.intro-greeting', {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.in',
          });
        }
      },
      onComplete: () => {
        setIsAnimating(true);
        const tl = gsap.timeline({
          onComplete: () => {
            onComplete();
          },
        });

        // 프로그레스 바 페이드아웃
        tl.to('.intro-progress-bar', {
          opacity: 0,
          duration: 0.3,
        }, 0)
          // 문 열림
          .to('.intro-door-left', {
            xPercent: -100,
            duration: 1.2,
            ease: 'power3.inOut',
          }, 0.6)
          .to('.intro-door-right', {
            xPercent: 100,
            duration: 1.2,
            ease: 'power3.inOut',
          }, 0.6)
      },
    });
  }, [onComplete]);

  return (
    <div className={`intro-overlay ${isAnimating ? 'animating' : ''}`} aria-hidden="true">
      <div className="intro-door intro-door-left"></div>
      <div className="intro-door intro-door-right"></div>

      <div className="intro-progress-bar">
        <div className="intro-progress" ref={progressRef}></div>
      </div>

      <div className="intro-text">
        <p className="intro-greeting">Hello, I'm Publisher</p>
      </div>
    </div>
  );
};

export default Intro;
