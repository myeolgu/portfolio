// Zustand: React에서 전역 상태를 관리하기 위한 경량 상태 관리 라이브러리
import { create } from 'zustand';

// Zustand 스토어 생성
export const useModalStore = create((set) => ({
  // 초기 상태: 모달은 닫혀있고, 선택된 프로젝트는 없음
  isOpen: false,
  selectedProject: null,
  
  // 모달을 여는 함수
  openModal: (project) => {
    // 모달이 열릴 때 배경 스크롤을 막음 (UX 향상)
    document.body.style.overflow = 'hidden';
    // set 함수로 상태 업데이트: 모달 열고, 선택된 프로젝트 저장
    set({ isOpen: true, selectedProject: project });
  },

  // 모달을 닫는 함수
  closeModal: () => {
    // 모달이 닫힐 때 배경 스크롤을 다시 활성화
    // 참고: 'block'이 아닌 'auto' 또는 ''(빈 문자열)을 사용하는 것이 더 적절합니다
    document.body.style.overflow = 'block';
    // set 함수로 상태 업데이트: 모달 닫고, 선택된 프로젝트 초기화
    set({ isOpen: false, selectedProject: null });
  },
}));
