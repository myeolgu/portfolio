// Zustand: React에서 전역 상태를 관리하기 위한 경량 상태 관리 라이브러리
import { create } from 'zustand';

// 프로젝트 데이터의 타입을 정의
// 모달에서 보여줄 프로젝트 정보의 구조를 명시
export interface Project {
  id: number;              // 프로젝트 고유 식별자
  title: string;           // 프로젝트 제목
  description: string;     // 프로젝트 설명
  image?: string;          // 프로젝트 이미지 URL (선택적)
  tech?: string[];         // 사용된 기술 스택 배열 (선택적)
  link?: string;           // 프로젝트 링크 (선택적)
}

// 모달 스토어의 상태와 액션을 정의하는 인터페이스
interface ModalStore {
  isOpen: boolean;                           // 모달의 열림/닫힘 상태
  selectedProject: Project | null;           // 현재 선택된 프로젝트 (없으면 null)
  openModal: (project: Project) => void;     // 모달을 여는 함수
  closeModal: () => void;                    // 모달을 닫는 함수
}

// Zustand 스토어 생성
// create 함수에 제네릭으로 ModalStore 타입을 전달하여 타입 안정성 확보
export const useModalStore = create<ModalStore>((set) => ({
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
