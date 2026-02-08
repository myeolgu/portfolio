import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (!cursor || !cursorDot) return;

    // 마우스 위치 추적
    const onMouseMove = (e: MouseEvent) => {
      // 외부 원 - 부드러운 따라다님
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power3.out',
      });

      // 내부 점 - 즉각 반응
      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      });
    };

    // 호버 가능 요소 감지
    const onMouseEnterHoverable = () => setIsHovering(true);
    const onMouseLeaveHoverable = () => setIsHovering(false);

    // 화면 이탈 감지
    const onMouseLeave = () => setIsHidden(true);
    const onMouseEnter = () => setIsHidden(false);

    // 이벤트 리스너 등록
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // 호버 가능 요소에 이벤트 추가
    const addHoverListeners = () => {
      const hoverables = document.querySelectorAll('a, button, .work-item, [data-cursor-hover]');
      hoverables.forEach((el) => {
        el.addEventListener('mouseenter', onMouseEnterHoverable);
        el.addEventListener('mouseleave', onMouseLeaveHoverable);
      });
    };

    // 초기 실행 및 DOM 변경 감지
    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      observer.disconnect();
    };
  }, []);

  // 호버 상태에 따른 스케일 애니메이션
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    gsap.to(cursor, {
      scale: isHovering ? 2 : 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  }, [isHovering]);

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor ${isHidden ? 'hidden' : ''} ${isHovering ? 'hovering' : ''}`}
        aria-hidden="true"
      />
      <div
        ref={cursorDotRef}
        className={`custom-cursor-dot ${isHidden ? 'hidden' : ''}`}
        aria-hidden="true"
      />
    </>
  );
};

export default CustomCursor;
