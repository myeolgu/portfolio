import React, { useEffect } from 'react';
import { useModalStore } from '../../store/modalStore';

const Modal: React.FC = () => {
  const { isOpen, selectedProject, closeModal } = useModalStore();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, closeModal]);

  if (!isOpen || !selectedProject) return null;

  return (
    <div className="modal-overlay" onClick={closeModal} role="presentation">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={e => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2 id="modal-title">{selectedProject.title}</h2>
          <button className="modal-close" onClick={closeModal} aria-label="닫기">
            ✕
          </button>
        </div>
        <div className="modal-content">
          <p className="modal-description">{selectedProject.description}</p>
          {selectedProject.tech && (
            <div className="modal-tech">
              <h3></h3>
              <ul>
                {selectedProject.tech.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          )}
          {selectedProject.link && (
            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="modal-link">
              링크
              <i className="ico ico-arrow" aria-hidden="true"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
