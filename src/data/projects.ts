import { Project } from '../store/modalStore';

// 이미지 import
import lgchemImg from '../assets/videos/lg_intro.mp4';
import lotteImg from '../assets/videos/lotte_intro.mp4';
const samsungVideo = 'https://www.youtube.com/embed/v1r4XlDyFPU?autoplay=1&mute=1&loop=1&playlist=v1r4XlDyFPU&controls=0&showinfo=0';
const damdiVideo = 'https://www.youtube.com/embed/mv2dr5egSk4?autoplay=1&mute=1&loop=1&playlist=mv2dr5egSk4';
const sonoVideo = 'https://www.youtube.com/embed/tA07T3XXp4w?autoplay=1&mute=1&loop=1&playlist=tA07T3XXp4w&controls=0&showinfo=0';
import cubeImg from '../assets/images/projects/cube.jpg';

export const projects: Project[] = [
  {
    id: 1,
    title: 'LG화학 메인 리뉴얼',
    description: 'GSAP을 처음 도입한 프로젝트로, 메인 페이지 마크업과 스크립트를 단독으로 담당했습니다. 새로운 기술 학습과 구현에 도전하며 성장할 수 있었던 보람찬 경험이었습니다.',
    tech: ['HTML5', 'SCSS', 'JavaScript', 'GSAP'],
    link: 'https://www.lgchem.com/career/index',
    image: lgchemImg,
    background: '#ffffff',
    thumbnailHeight: '4rem',
  },
  {
    id: 2,
    title: '시니어 레지던스 홈페이지 구축',
    description: '퍼블리셔 3명이 참여한 프로젝트로, 마크업과 스크립트 개발을 담당했습니다. 고급 시니어 주거 시설을 위한 반응형 웹사이트를 신규 구축했습니다.',
    tech: ['HTML5', 'SCSS', 'JavaScript'],
    link: 'https://www.lottesrc.com/vl',
    image: lotteImg,
    background: '#ffffff',
    thumbnailHeight: '3.4rem',
  },
  {
    id: 3,
    title: '삼성자산운용 ETF 펀드솔루션 리뉴얼',
    description: '총 4명의 퍼블리셔가 참여한 대규모 리뉴얼 프로젝트에서 마크업과 스크립트를 담당했습니다. 차트 영역을 제외한 전반적인 UI 구현을 맡았습니다.',
    tech: ['HTML5', 'SCSS', 'JavaScript'],
    link: 'https://m.funetf.co.kr/',
    image: samsungVideo,
    background: '#ffffff',
    thumbnailHeight: '3rem',
  },
  {
    id: 4,
    title: '롯데호텔 시니어 케어 플랫폼 담디 APP 구축',
    description: '2차 개발로 투입되어 마크업과 스크립트를 단독으로 담당했습니다. amCharts를 활용한 데이터 시각화 작업을 진행했으며, 개발자분들과 긴밀히 소통하며 원활한 협업으로 좋은 평가를 받았습니다.',
    tech: ['HTML5', 'SCSS', 'JavaScript', 'amCharts', 'Mobile'],
    link: 'https://daddl.lottesrc.com/',
    image: damdiVideo,
    background: '#ffffff',
    thumbnailHeight: '10rem',
  },
  {
    id: 5,
    title: '대명 아임 레디 리뉴얼 구축',
    description: '퍼블리셔 3명이 참여한 프로젝트로, 마크업과 스크립트 개발을 담당했습니다. 상조 서비스 웹사이트를 신규 구축하였습니다.',
    tech: ['HTML5', 'SCSS', 'JavaScript'],
    link: 'https://www.sonoimready.com/main/front/main',
    image: sonoVideo,
    background: '#ffffff',
    thumbnailHeight: '6rem',
  },
  {
    id: 6,
    title: '큐브 리펀드 리뉴얼 구축',
    description: 'React와 TypeScript 기반으로 전환한 리뉴얼 프로젝트로, 퍼블리셔 2명이 참여했습니다. 컴포넌트 단위의 퍼블리싱을 진행하며 React 환경에서의 마크업 경험을 쌓았습니다.',
    tech: ['React', 'TypeScript', 'SCSS', 'GSAP'],
    link: 'https://www.cuberefund.com/',
    image: cubeImg,
    background: '#ffffff',
    thumbnailHeight: '5rem',
  },
];
