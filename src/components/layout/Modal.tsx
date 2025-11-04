import React, { useEffect } from 'react';
import { useModal } from '../../context/ModalContext';

const Modal: React.FC = () => {
  const { isOpen, selectedProject, closeModal } = useModal();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, closeModal]);

  if (!isOpen || !selectedProject) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{selectedProject.title}</h2>
          <button className="modal-close" onClick={closeModal}>
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
          {selectedProject.link && <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="modal-link"></a>}
        </div>
      </div>
    </div>
  );
};

export default Modal;
