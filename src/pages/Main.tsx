import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import { useModalStore } from '../store/modalStore';
import { projects } from '../data/projects';


gsap.registerPlugin(ScrollTrigger);

const Main: React.FC = () => {
  const textRefs = useRef<HTMLSpanElement[][]>([]);
  const { openModal } = useModalStore();

  // 텍스트 분리
  const splitText = (text: string): React.ReactElement[] => {
    const spanGroup: HTMLSpanElement[] = [];
    const elements = text.split('').map((char: string, index: number) => (
      <span
        key={index}
        ref={el => {
          if (el) {
            spanGroup.push(el);
          }
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
    textRefs.current.push(spanGroup);
    return elements;
  };

  useEffect(() => {
    // 각 텍스트 그룹별로 ScrollTrigger 개별 적용
    const endSettings = ['bottom 100%', 'bottom 100%', 'bottom 100%'];

    textRefs.current.forEach((group, idx) => {
      gsap.to(group, {
        top: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: group[0],
          start: 'top 100%',
          end: endSettings[idx] || 'bottom 80%',
          scrub: 0.5,
        },
      });
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
      <section className="about-section">
        <div className="about-container">
          <div className="about-text">
            <p className="text">{splitText('IMPLEMENTERS')}</p>
            <p className="text">{splitText('ARCHITECTS')}</p>
            <p className="text">{splitText('OPTIMIZERS')}</p>
          </div>

          <div className="about-description">
            I am a key implementer in web architecture, contributing to a portfolio of successful
             digital structures enjoyed by hundreds of millions of users around 
             the world. I have optimized front-end architectures for over 40 
             live digital projects in operation, ensuring availability 
             across desktop, tablet, and mobile interfaces in complex global 
             environments. I actively specialize in integrating major content 
             streams for more than ten critical services, supported by strong knowledge of Live Architecture Principles which keeps interfaces compliant, and refreshed with new content and enhanced user experiences. Spanning multiple platforms, my commitment to web standards and robust code contributes to stability for both developers and users alike.
          </div>
        </div>
      </section>

      {/* 작업 섹션 */}
      <section className="work-section">
        <div className="work-container">
          <h2 className="work-title">{splitText('NEWS')}</h2>

          <ul className="work-list">
            {projects.map(project => (
              <li key={project.id} onClick={() => openModal(project)}>
                <div className="work-item">
                  <h3>{project.title}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          <h2 className="contact-title">{splitText('CONTACT')}</h2>

          <div className="contact-info">
            <p>Email: contact@nexon.com</p>
            
            <ul className="contact-list">
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
