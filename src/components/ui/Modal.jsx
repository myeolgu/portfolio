import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useModalStore } from '../../store/modalStore';
import { X, ExternalLink, Activity, Wrench, Trophy } from 'lucide-react';

const Modal = () => {
  const { isOpen, selectedProject, closeModal } = useModalStore();

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeModal]);

  if (!isOpen || !selectedProject) return null;

  // 배경 딤 처리 클릭으로 닫기
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <div className="modal-overlay" onClick={handleBackgroundClick}>
      <div className="modal-container">
        {/* 모달 닫기 버튼 */}
        <button className="modal-close-btn" onClick={closeModal} aria-label="Close modal">
          <X size={24} />
        </button>

        {/* 좌측: 비주얼 영역 (이미지/영상) */}
        <div className="modal-visual" style={{ background: selectedProject.background || '#f5f5f5' }}>
          {selectedProject.image && (
            selectedProject.image.includes('youtube') || selectedProject.image.includes('.mp4') ? (
              <iframe
                src={selectedProject.image}
                title={selectedProject.title}
                allow="autoplay; fullscreen"
                frameBorder="0"
                className="modal-media"
              />
            ) : (
              <img src={selectedProject.image} alt={selectedProject.title} className="modal-media img" />
            )
          )}
        </div>

        {/* 우측: 텍스트 및 상세 스토리 영역 */}
        <div className="modal-content">
          <header className="modal-header">
            <h2 className="modal-title">{selectedProject.title}</h2>
            <div className="modal-tech-stack">
              {selectedProject.tech?.map((t, idx) => (
                <span key={idx} className="tech-badge">{t}</span>
              ))}
            </div>
            <p className="modal-desc">{selectedProject.description}</p>
          </header>

          <div className="modal-body">
            {/* 배경 및 목표 (문제 상황) */}
            {selectedProject.problem && (
              <section className="insight-section">
                <h3 className="insight-title">
                  <Activity size={18} /> 배경 및 목표 (The Challenge)
                </h3>
                <p className="insight-text">{selectedProject.problem}</p>
              </section>
            )}

            {/* 해결 과정 (액션) */}
            {selectedProject.action && (
              <section className="insight-section">
                <h3 className="insight-title">
                  <Wrench size={18} /> 기술적 의사결정 (Action)
                </h3>
                <p className="insight-text">{selectedProject.action}</p>
              </section>
            )}

            {/* 비즈니스 임팩트 (결과) */}
            {selectedProject.result && (
              <section className="insight-section">
                <h3 className="insight-title highlight">
                  <Trophy size={18} /> 비즈니스 임팩트 (Result & Insight)
                </h3>
                <p className="insight-text">{selectedProject.result}</p>
              </section>
            )}
          </div>

          {/* 하단 CTA (프로젝트 보러가기) */}
          {selectedProject.link && (
            <footer className="modal-footer">
              <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="modal-link-btn">
                <span>프로젝트 사이트 방문하기</span>
                <ExternalLink size={18} />
              </a>
            </footer>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
