import React, { createContext, ReactNode, useContext, useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  tech?: string[];
  link?: string;
}

interface ModalContextType {
  isOpen: boolean;
  selectedProject: Project | null;
  openModal: (project: Project) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; // 스크롤 방지
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return <ModalContext.Provider value={{ isOpen, selectedProject, openModal, closeModal }}>{children}</ModalContext.Provider>;
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within ModalProvider');
  }
  return context;
};

export type { Project };
