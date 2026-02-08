import { gsap } from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { useModalStore } from '../store/modalStore';
import { projects } from '../data/projects';

const Main: React.FC = () => {
  const textRefs = useRef<HTMLSpanElement[][]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const workListRef = useRef<HTMLDivElement>(null);
  const workImageAreaRef = useRef<HTMLDivElement>(null);
  const animatedSections = useRef<Set<number>>(new Set());
  const { isOpen: isModalOpen } = useModalStore();
  const [currentSection, setCurrentSection] = useState(0);
  const [currentProject, setCurrentProject] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);
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

  // 리사이즈 이벤트로 화면 크기 추적
  useEffect(() => {
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
  const splitText = (text: string): React.ReactElement[] => {
    const spanGroup: HTMLSpanElement[] = [];
    const elements = text.split('').map((char: string, index: number) => (
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
  const goToSection = (index: number) => {
    const sections = document.querySelectorAll('.panel');
    if (index < 0 || index >= sections.length || isAnimating.current) return;

    isAnimating.current = true;
    setCurrentSection(index);

    gsap.to(window, {
      scrollTo: { y: sections[index], autoKill: false },
      duration: 0.8,
      ease: 'power2.inOut',
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  };

  // 프로젝트 가로 스크롤 함수
  const goToProject = (index: number) => {
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
    // GSAP ScrollTo 플러그인 동적 로드
    import('gsap/ScrollToPlugin').then(({ ScrollToPlugin }) => {
      gsap.registerPlugin(ScrollToPlugin);
    });

    const sections = document.querySelectorAll('.panel');
    const totalSections = sections.length;

    // 휠 이벤트 핸들러 (768px 초과에서만 동작)
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault(); // 768px 이하에서도 휠 스크롤 완전 차단

      if (isMobile || isModalOpen) return;

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
    const handleKeyDown = (e: KeyboardEvent) => {
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
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
    };

    // 터치 이동 중 기본 스크롤 차단 (풀페이지 효과 유지)
    const handleTouchMove = (e: TouchEvent) => {
      if (isModalOpen) return;
      e.preventDefault();
    };

    const handleTouchEnd = (e: TouchEvent) => {
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

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
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
    // 섹션별 텍스트 그룹 매핑 (섹션 1: 0-2, 섹션 2: 3, 섹션 3: 4)
    const sectionTextMap: { [key: number]: number[] } = {
      1: [0, 1, 2], // about 섹션의 3줄
      2: [3],       // work 섹션 타이틀
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
    <div className="wrap">
      {/* 인트로 섹션 */}
      <section className="panel intro-section" aria-label="인트로">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="about-video"
          aria-label="배경 영상"
        >
          <source src={require('../assets/videos/video.mp4')} type="video/mp4" />
        </video>
      </section>

      {/* 소개 섹션 */}
      <section id="about" className="panel about-section" aria-label="소개">
        <div className="about-container">
          <h2 className="about-text">
            <span className="text">{splitText('디테일한 마크업 위에')}</span>
            <span className="text">{splitText('인터랙션을 더하는')}</span>
            <span className="text">{splitText('퍼블리셔')}</span>
          </h2>

          <div className="about-description">
            3년간 웹 에이전시에서 다양한 클라이언트 프로젝트를 경험하며 정확한 마크업과 크로스브라우징, 반응형 구현에 대한 실무 감각을 쌓아왔습니다. 디자인 시안을 픽셀 단위로 구현하는 것에서 나아가, 사용자가 실제로 편하게 느끼는 UI를 만드는 데 관심을 두고 있습니다.
현재는 JavaScript와 React를 학습하며 퍼블리셔에서 프론트엔드 개발자로의 전환을 준비하고 있습니다. 탄탄한 CSS 기반 위에 컴포넌트 설계와 상태 관리 역량을 더해, 설계부터 구현까지 아우르는 개발자로 성장하고자 합니다.
          </div>
        </div>
      </section>

      {/* 작업 섹션 */}
      <section id="news" className="panel work-section" aria-label="프로젝트">
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
                  <p>{project.description}</p>
                </div>
                {project.tech && project.tech.length > 0 && (
                  <ul className="work-tech-list">
                    {project.tech.map((tech, techIndex) => (
                      <li key={techIndex}>{tech}</li>
                    ))}
                  </ul>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-link"
                    aria-label={`${project.title} 사이트 바로가기`}
                  >
                    사이트 바로가기
                    <i className="ico ico-arrow" aria-hidden="true"></i>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 연락처 섹션 */}
      <section id="contact" className="panel contact-section" aria-label="연락처">
        <div className="contact-container">
          <h2 className="contact-title">{splitText('함께 일할 웹 퍼블리셔를 찾고 계신가요?')}</h2>

          <div className="contact-info">
            <p className="contact-email">Email : juyeop198@naver.com</p>

            <p className="contact-phone">Tel: 010-5917-7297</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
