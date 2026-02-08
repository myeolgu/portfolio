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
    description: '페이지 애니메이션 구현 및 GSAP을 도입한 LG화학 메인 페이지 리뉴얼. 사용자 인터랙션 향상과 유지보수 효율성 개선에 기여했습니다.',
    tech: ['HTML5', 'SCSS', 'JavaScript'],
    link: 'https://www.lgchem.com/career/index',
    image: lgchemImg,
    background: '#ffffff',
    thumbnailHeight: '4rem',
  },
  {
    id: 2,
    title: '시니어 레지던스 홈페이지 구축',
    description: '고급 시니어 주거 시설을 위한 반응형 웹사이트를 신규 구축하여 사용자 친화적인 UI/UX를 제공했습니다.',
    tech: ['HTML5', 'SCSS', 'JavaScript'],
    link: 'https://www.lottesrc.com/vl',
    image: lotteImg,
    background: '#ffffff',
    thumbnailHeight: '3.4rem',
  },
  {
    id: 3,
    title: '삼성자산운용 ETF 펀드솔루션 리뉴얼',
    description: '삼성자산운용 ETF 및 펀드솔루션 플랫폼 전면 리뉴얼 프로젝트를 진행하여 사용자 경험을 개선했습니다.',
    tech: ['HTML5', 'SCSS', 'JavaScript'],
    link: 'https://m.funetf.co.kr/',
    image: samsungVideo,
    background: '#ffffff',
    thumbnailHeight: '3rem',
  },
  {
    id: 4,
    title: '롯데호텔 시니어 케어 플랫폼 담디 APP 구축',
    description: '롯데호텔의 시니어 케어 플랫폼 담디 앱의 추가 기능 개발 및 고도화 작업을 수행했습니다.',
    tech: ['HTML5', 'SCSS', 'JavaScript', 'Mobile'],
    link: 'https://daddl.lottesrc.com/',
    image: damdiVideo,
    background: '#ffffff',
    thumbnailHeight: '10rem',
  },
  {
    id: 5,
    title: '대명 아임 레디 리뉴얼 구축',
    description: '대명 아임 레디 상조 서비스 웹사이트를 신규 구축하여 사용자에게 편리한 서비스 이용 환경을 제공했습니다.',
    tech: ['HTML5', 'SCSS', 'JavaScript'],
    link: 'https://www.sonoimready.com/main/front/main',
    image: sonoVideo,
    background: '#ffffff',
    thumbnailHeight: '6rem',
  },
  {
    id: 6,
    title: '큐브 리펀드 리뉴얼 구축',
    description: '큐브 리펀드 세금 환급 서비스 웹사이트를 전면 리뉴얼하여 사용자 편의성과 접근성을 향상시켰습니다.',
    tech: ['React', 'TypeScript', 'SCSS'],
    link: 'https://www.cuberefund.com/',
    image: cubeImg,
    background: '#ffffff',
    thumbnailHeight: '5rem',
  },
];
