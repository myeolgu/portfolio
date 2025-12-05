import { create } from 'zustand';

export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  tech?: string[];
  link?: string;
}

interface ModalStore {
  isOpen: boolean;
  selectedProject: Project | null;
  openModal: (project: Project) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  selectedProject: null,
  openModal: (project) => {
    document.body.style.overflow = 'hidden';
    set({ isOpen: true, selectedProject: project });
  },
  closeModal: () => {
    document.body.style.overflow = 'unset';
    set({ isOpen: false, selectedProject: null });
  },
}));
