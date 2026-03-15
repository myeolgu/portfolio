import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useModalStore } from '../../store/modalStore';
import { X, ExternalLink } from 'lucide-react';

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


        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title">{selectedProject.title}</h2>
            {selectedProject.description && (
              <p className="modal-description" dangerouslySetInnerHTML={{ __html: selectedProject.description }} />
            )}
            <div className="modal-meta">
              {selectedProject.period && <span className="meta-item">📅 {selectedProject.period}</span>}
              {selectedProject.members && <span className="meta-item">👥 {selectedProject.members}</span>}
            </div>
            {selectedProject.tech && (
              <div className="modal-tech-tags">
                {selectedProject.tech.map((tag, i) => (
                  <span key={i} className="tech-tag">{tag}</span>
                ))}
              </div>
            )}
          </div>

          <div className="modal-body">
            {/* 프로젝트 요약 / 배경 */}
            <section className="insight-section">
              <h3 className="insight-title">배경 및 목표</h3>
              <div className="insight-text-box">
                <p className="insight-text" dangerouslySetInnerHTML={{ __html: selectedProject.problem }} />
              </div>
            </section>

            {/* 해결 과정 (액션) */}
            <section className="insight-section">
              <h3 className="insight-title">기술적 의사결정</h3>
              <div className="insight-text-box">
                <p className="insight-text" dangerouslySetInnerHTML={{ __html: selectedProject.action }} />
              </div>
            </section>

            {/* 비즈니스 임팩트 (결과) */}
            <section className="insight-section">
              <h3 className="insight-title highlight">비즈니스 임팩트</h3>
              <div className="insight-text-box highlight">
                <p className="insight-text" dangerouslySetInnerHTML={{ __html: selectedProject.result }} />
              </div>
            </section>
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
