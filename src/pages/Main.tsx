import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Main: React.FC = () => {
  const aboutSectionRef = useRef<HTMLElement>(null);
  const workSectionRef = useRef<HTMLElement>(null);
  const textRefs = useRef<HTMLSpanElement[]>([]);

  // 텍스트 분리
  const splitText = (text: string): React.ReactElement[] => {
    return text.split('').map((char: string, index: number) => (
      <span
        key={index}
        ref={el => {
          if (el && !textRefs.current.includes(el)) {
            textRefs.current.push(el);
          }
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  useEffect(() => {
    // 소개 애니메이션
    gsap.to(textRefs.current, {
      top: 0,
      duration: 0.3,
      stagger: 0.025,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: aboutSectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
      },
    });

    // 작업 섹션 애니메이션
    gsap.to(workSectionRef.current, {
      top: 0,
      duration: 0.3,
      stagger: 0.025,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: workSectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
      },
    });

    // 클린업 함수
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="wrap">
      {/* 인트로 섹션 */}
      <section className="intro-section">
        <video autoPlay loop muted playsInline className="about-video">
          <source src={require('../assets/videos/video.mp4')} type="video/mp4" />
        </video>
      </section>

      {/* 소개 섹션 */}
      <section className="about-section" ref={aboutSectionRef}>
        <div className="about-container">
          <div className="about-text">
            <p className="text">{splitText('DREAMERS')}</p>
            <p className="text">{splitText('PIONEERS')}</p>
            <p className="text">{splitText('INNOVATORS')}</p>
          </div>

          <div className="about-description">
            Nexon is a leader in global entertainment with a portfolio of successful game franchises enjoyed by hundreds of millions of people around the world. Nexon has more than 40 live games in
            operation in more than 190 countries, available on PC, console and mobile. Nexon has more than ten intellectual properties including MapleStory, Mabinogi, and Dungeon&amp;Fighter supported
            by best-in-class Live Operations which keeps the games balanced, and refreshed with new content and experiences. Spanning multiple generations, Nexon games are enjoyed for decades by
            players all over the world.
          </div>
        </div>
      </section>

      {/* 작업 섹션 */}
      <section className="work-section" ref={workSectionRef}>
        <div className="work-container">
          <h2 className="work-title">{splitText('WORK')}</h2>
        </div>
      </section>
    </div>
  );
};

export default Main;
