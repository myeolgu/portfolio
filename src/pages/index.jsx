import Head from 'next/head';
import { gsap } from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { useModalStore } from '../store/modalStore';
import { projects } from '../data/projects';

const Main = () => {
  const textRefs = useRef([]);
  const videoRef = useRef(null);
  const workListRef = useRef(null);
  const workImageAreaRef = useRef(null);
  const animatedSections = useRef(new Set());
  const { isOpen: isModalOpen } = useModalStore();
  const [currentSection, setCurrentSection] = useState(0);
  const [currentProject, setCurrentProject] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const isAnimating = useRef(false);
  const totalProjects = projects.length;

  // 첫 로딩 시 페이지 상단으로 이동
  useEffect(() => {
    // 브라우저 스크롤 복원 비활성화
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  // 동작 중 화면 크기 추적 (초기 세팅 포함)
  useEffect(() => {
    // 최초 브라우저 렌더링 시점에만 값을 가져옴 (SSR 회피)
    setIsMobile(window.innerWidth <= 1023);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1023);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 영상 14초부터 시작
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedMetadata = () => {
        video.currentTime = 15;
      };
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      // 이미 로드된 경우
      if (video.readyState >= 1) {
        video.currentTime = 15;
      }
      return () => {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, []);

  // 텍스트 분리
  const splitText = (text) => {
    const spanGroup = [];
    const elements = text.split('').map((char, index) => (
      <span
        key={index}
        className="split-char"
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

  // 섹션 이동 함수
  const goToSection = (index) => {
    const sections = document.querySelectorAll('.panel');
    if (index < 0 || index >= sections.length || isAnimating.current) return;

    isAnimating.current = true;
    setCurrentSection(index);

    const targetY = window.scrollY + sections[index].getBoundingClientRect().top;
    const scrollProxy = { y: window.scrollY };

    gsap.to(scrollProxy, {
      y: targetY,
      duration: 0.8,
      ease: 'power2.inOut',
      onUpdate: () => {
        window.scrollTo(0, scrollProxy.y);
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  };

  // 프로젝트 가로 스크롤 함수
  const goToProject = (index) => {
    if (index < 0 || index >= totalProjects || isAnimating.current) return;

    isAnimating.current = true;
    setCurrentProject(index);

    // 이미지 슬라이더의 실제 너비 기준으로 이동
    const slider = workListRef.current;
    if (slider) {
      const slideWidth = slider.parentElement?.offsetWidth || window.innerWidth;
      gsap.to(slider, {
        x: -index * slideWidth,
        duration: 0.5,
        ease: 'power2.out',
        onComplete: () => {
          isAnimating.current = false;
        },
      });
    } else {
      isAnimating.current = false;
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll('.panel');
    const totalSections = sections.length;

    // 휠 이벤트 핸들러 (768px 초과에서만 동작)
    const handleWheel = (e) => {
      if (isMobile || isModalOpen) return;

      e.preventDefault();

      if (isAnimating.current) return;

      // 프로젝트 섹션 (섹션 2)에서 가로 스크롤 처리
      if (currentSection === 2) {
        if (e.deltaY > 0) {
          // 아래로 스크롤 → 다음 프로젝트
          if (currentProject < totalProjects - 1) {
            goToProject(currentProject + 1);
          } else {
            // 마지막 프로젝트에서 다음 섹션으로
            goToSection(currentSection + 1);
          }
        } else if (e.deltaY < 0) {
          // 위로 스크롤 → 이전 프로젝트
          if (currentProject > 0) {
            goToProject(currentProject - 1);
          } else {
            // 첫 프로젝트에서 이전 섹션으로
            goToSection(currentSection - 1);
          }
        }
        return;
      }

      if (e.deltaY > 0 && currentSection < totalSections - 1) {
        // 아래로 스크롤
        goToSection(currentSection + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        // 위로 스크롤
        goToSection(currentSection - 1);
      }
    };

    // 키보드 이벤트 핸들러 (768px 초과에서만 동작)
    const handleKeyDown = (e) => {
      if (isMobile || isModalOpen || isAnimating.current) return;

      // 프로젝트 섹션에서 가로 스크롤
      if (currentSection === 2) {
        if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === 'ArrowRight') {
          e.preventDefault();
          if (currentProject < totalProjects - 1) {
            goToProject(currentProject + 1);
          } else {
            goToSection(currentSection + 1);
          }
        } else if (e.key === 'ArrowUp' || e.key === 'PageUp' || e.key === 'ArrowLeft') {
          e.preventDefault();
          if (currentProject > 0) {
            goToProject(currentProject - 1);
          } else {
            goToSection(currentSection - 1);
          }
        }
        return;
      }

      if ((e.key === 'ArrowDown' || e.key === 'PageDown') && currentSection < totalSections - 1) {
        e.preventDefault();
        goToSection(currentSection + 1);
      } else if ((e.key === 'ArrowUp' || e.key === 'PageUp') && currentSection > 0) {
        e.preventDefault();
        goToSection(currentSection - 1);
      }
    };

    // 터치 이벤트 (모바일 풀페이지)
    let touchStartY = 0;
    let touchStartX = 0;
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
    };

    // 터치 이동 중 기본 스크롤 차단 (풀페이지 효과 유지)
    const handleTouchMove = (e) => {
      if (isModalOpen) return;
      e.preventDefault();
    };

    const handleTouchEnd = (e) => {
      if (isModalOpen || isAnimating.current) return;

      const touchEndY = e.changedTouches[0].clientY;
      const touchEndX = e.changedTouches[0].clientX;
      const diffY = touchStartY - touchEndY;
      const diffX = touchStartX - touchEndX;

      // 프로젝트 섹션에서 가로 스와이프 처리
      if (currentSection === 2) {
        // 가로 스와이프가 더 강하면 프로젝트 이동
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
          if (diffX > 0 && currentProject < totalProjects - 1) {
            goToProject(currentProject + 1);
          } else if (diffX < 0 && currentProject > 0) {
            goToProject(currentProject - 1);
          }
          return;
        }
        // 세로 스와이프
        if (diffY > 50) {
          if (currentProject < totalProjects - 1) {
            goToProject(currentProject + 1);
          } else {
            goToSection(currentSection + 1);
          }
        } else if (diffY < -50) {
          if (currentProject > 0) {
            goToProject(currentProject - 1);
          } else {
            goToSection(currentSection - 1);
          }
        }
        return;
      }

      if (diffY > 50 && currentSection < totalSections - 1) {
        goToSection(currentSection + 1);
      } else if (diffY < -50 && currentSection > 0) {
        goToSection(currentSection - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    // 클린업 함수
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSection, currentProject, isModalOpen, isMobile]);

  // 모바일 작업 영역 스와이프 이벤트
  useEffect(() => {
    if (!isMobile) return;

    const workImageArea = workImageAreaRef.current;
    if (!workImageArea) return;

    let touchStartX = 0;
    let touchStartY = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (isAnimating.current) return;

      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const diffX = touchStartX - touchEndX;
      const diffY = touchStartY - touchEndY;

      // 가로 스와이프
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0 && currentProject < totalProjects - 1) {
          goToProject(currentProject + 1);
        } else if (diffX < 0 && currentProject > 0) {
          goToProject(currentProject - 1);
        }
      }
      // 세로 스와이프 (PC처럼 아래로 내리면 다음, 위로 올리면 이전)
      else if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 50) {
        if (diffY > 0 && currentProject < totalProjects - 1) {
          // 위로 스와이프 (손가락 아래→위) = 다음 프로젝트
          goToProject(currentProject + 1);
        } else if (diffY < 0 && currentProject > 0) {
          // 아래로 스와이프 (손가락 위→아래) = 이전 프로젝트
          goToProject(currentProject - 1);
        }
      }
    };

    workImageArea.addEventListener('touchstart', handleTouchStart, { passive: true });
    workImageArea.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      workImageArea.removeEventListener('touchstart', handleTouchStart);
      workImageArea.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMobile, currentProject, totalProjects]);

  // 섹션 변경 시 텍스트 애니메이션
  useEffect(() => {
    // 섹션별 텍스트 그룹 매핑 (Hero: 0-2, About: 3, Work: 4, Contact: 5)
    const sectionTextMap = {
      0: [0, 1, 2], // Hero 섹션의 3줄
      1: [3],       // About 섹션 "About Me"
      2: [],        // work 섹션 (현재 타이틀 splitText 없음)
      3: [4],       // contact 섹션 타이틀
    };

    const groupIndices = sectionTextMap[currentSection];
    if (!groupIndices || animatedSections.current.has(currentSection)) return;

    animatedSections.current.add(currentSection);

    groupIndices.forEach((index) => {
      const group = textRefs.current[index];
      if (!group || group.length === 0) return;

      gsap.set(group, {
        y: 120,
        opacity: 0,
        rotateX: -90,
      });

      gsap.to(group, {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1.2,
        stagger: {
          each: 0.03,
          from: 'start',
        },
        ease: 'power4.out',
        delay: 0.3,
      });
    });
  }, [currentSection]);

  return (
    <>
      <a href="#main-content" className="skip-link">본문 바로가기</a>
      <main className="wrap">
        <Head>
          <title>주엽 | 웹 퍼블리셔 포트폴리오</title>
        </Head>
        {/* Hero 섹션 */}
        <section id="main-content" className="panel intro-section" aria-label="히어로">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="about-video"
            aria-label="배경 영상"
          >
            <source src="/portfolio/videos/video.mp4" type="video/mp4" />
          </video>

          {/* Hero 텍스트 오버레이 */}
          <div className="hero-overlay">
            <h2 className="hero-title">
              <span className="text">{splitText('마크업을 넘어,')}</span>
              <span className="text">{splitText('사용자 경험에 집중하는')}</span>
              <span className="text">{splitText('디테일이 강한 퍼블리셔')}</span>
            </h2>
            <p className="hero-sub">UI 개발 · GSAP 인터랙션 · Core Web Vitals · SEO</p>
          </div>

          {/* 스크롤 인디케이터 */}
          <div className="scroll-indicator">
            <span className="scroll-text">Scroll</span>
            <span className="scroll-line"></span>
          </div>
        </section>

        {/* 소개 섹션 */}
        <section className="panel about-section" aria-label="소개">
          <div className="about-container">
            <h2 className="about-heading">{splitText('About Me')}</h2>

            <p className="about-description">
              3년 동안 다양한 규모의 프로젝트를 거치며, 단순 마크업을 넘어 <strong>'동작하는 UI'의 핵심인 스크립트 로직까지 책임지는 퍼블리싱</strong>을 해왔습니다.
              신입 시절부터 고난도의 인터랙션을 단독으로 완수하며 기술적인 돌파력을 키웠고, 대규모 플랫폼에서는 파편화된 코드를 하나로 모으는 <strong>공통 UI 라이브러리 제작과 디자인 시스템 설계</strong>를 주도하며 팀의 생산성을 높이는 데 기여했습니다.
              <br /><br />
              특히 최근에는 AI Agent 도구를 실무 워크플로우에 적극적으로 도입하여, 단순 반복 작업에 드는 시간을 획기적으로 줄이고 있습니다.
              이렇게 확보한 시간을 UI의 완성도를 높이고 웹 접근성을 꼼꼼히 챙기는 데 투자하여, 사용자에게는 더 나은 경험을, 개발팀에게는 유지보수하기 편한 코드를 제공하는 <strong>'UI 개발 전문가'</strong>를 지향합니다.
            </p>

            {/* 핵심 스킬 뱃지 */}
            <div className="about-skills">
              {['HTML5 / CSS3', 'SCSS', 'JavaScript', 'React', 'Next.js', 'GSAP', 'Git', 'SEO', 'GA4 / GTM', 'AI Agent'].map((skill, i) => (
                <span key={i} className="skill-badge">{skill}</span>
              ))}
            </div>

          </div>
        </section>

        {/* 작업 섹션 */}
        <section className="panel work-section" aria-label="프로젝트">
          <div className="work-container">
            {/* 왼쪽: 이미지 슬라이더 영역 */}
            <div
              className="work-image-area"
              ref={workImageAreaRef}
              role="region"
              aria-label={`프로젝트 슬라이더, ${currentProject + 1}/${totalProjects}`}
              aria-live="polite"
            >
              <div className="work-image-slider" ref={workListRef}>
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className="work-image-slide"
                    aria-hidden={currentProject !== index}
                  >
                    {project.image && (
                      project.image.includes('youtube.com') ? (
                        <iframe
                          src={project.image}
                          title={project.title}
                          className="work-thumbnail"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      ) : project.image.endsWith('.mp4') ? (
                        <video
                          src={project.image}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="work-thumbnail"
                          aria-label={`${project.title} 프로젝트 영상`}
                        />
                      ) : (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="work-thumbnail"
                        />
                      )
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 오른쪽: 텍스트 영역 (페이드 전환) */}
            <div className="work-info-area">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`work-info-content ${currentProject === index ? 'active' : ''}`}
                >
                  <h3 className="work-project-title">{project.title}</h3>
                  <div className="work-description-box">
                    <p dangerouslySetInnerHTML={{ __html: project.description }} />
                  </div>
                  {project.tech && project.tech.length > 0 && (
                    <ul className="work-tech-list">
                      {project.tech.map((tech, techIndex) => (
                        <li key={techIndex}>{tech}</li>
                      ))}
                    </ul>
                  )}
                  {project.link && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        useModalStore.getState().openModal(project);
                      }}
                      className="work-link"
                      aria-label={`${project.title} 자세히 보기`}
                    >
                      자세히 보기
                      <i className="ico ico-arrow" aria-hidden="true"></i>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 연락처 섹션 */}
        <section className="panel contact-section" aria-label="연락처">
          <div className="contact-container">
            <h2 className="contact-title">
              <span className="pc-only">{splitText('똑똑, 함께 성장할 파트너를 찾으시나요?')}</span>
              <span className="mo-only">
                {splitText('똑똑, 함께 성장할')}
                <br />
                {splitText('파트너를 찾으시나요?')}
              </span>
            </h2>

            <div className="contact-content">
              <p className="contact-desc">
                역량과 경험을 갖춘 웹 퍼블리셔를 찾고 계신가요? <br />
                프로젝트 합류 제안이나 기술적인 대화, 혹은 가벼운 커피챗도 모두 환영입니다. <br />
                보내주신 소중한 메시지에는 정성껏 답변 드릴게요.
              </p>

              <div className="contact-actions">
                <a href="mailto:juyeop198@naver.com" className="btn-contact">
                  이메일 보내기
                  <i className="ico ico-mail" aria-hidden="true"></i>
                </a>
              </div>

              <address className="contact-info">
                <a href="mailto:juyeop198@naver.com" className="contact-item">juyeop198@naver.com</a>
                <span className="contact-divider"></span>
                <a href="tel:010-5917-7297" className="contact-item">010-5917-7297</a>
              </address>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
