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
    problem: '정적인 뷰를 넘어 사용자 이탈을 막기 위해 시각적으로 몰입감 있는 동적 인터랙션이 요구되었습니다.',
    action: '처음으로 GSAP 라이브러리를 도입하여 스크롤 기반의 패럴랙스 애니메이션과 부드러운 트랜지션을 모듈화하여 설계했습니다.',
    result: '메인 페이지 체류 시간을 기존 대비 20% 이상 개선했으며, 동적 인터랙션 구현 역량을 크게 확장하는 계기가 되었습니다.'
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
    problem: '시니어 타겟층의 특성상 높은 웹 접근성과 다양한 디바이스(태블릿 등)에서의 완벽한 반응형 렌더링이 필수적이었습니다.',
    action: '접근성 지침(WCAG)을 준수하여 명도 대비와 폰트 스케일링을 적용하고, SCSS 믹스인을 활용해 브레이크포인트 관리를 체계화했습니다.',
    result: '웹 접근성 검사를 무사히 통과하였으며, 유지보수가 용이한 반응형 공통 컴포넌트 아키텍처를 확립했습니다.'
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
    problem: '방대한 금융 데이터와 복잡한 약관 테이블을 모바일 화면에 가독성 있게 표현해야 하는 과제가 있었습니다.',
    action: 'CSS Grid와 Flexbox를 적극 활용하여 복잡한 테이블 구조를 재설계하고, 반복되는 UI 요소를 재사용 가능한 CSS 모듈로 분리했습니다.',
    result: '다수의 작업자가 투입된 환경에서도 코드 충돌을 최소화하고, 금융 플랫폼에 걸맞은 픽셀 퍼펙트 UI를 기한 내 완료했습니다.'
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
    problem: '시니어 헬스케어 데이터를 직관적으로 보여주기 위한 시각화(Chart) 구현과 중간 투입으로 인한 레거시 코드 파악의 어려움이 있었습니다.',
    action: 'amCharts 라이브러리를 빠르게 학습하여 헬스케어 동적 차트를 구현하고, 기획/개발 팀과의 애자일한 소통으로 요구사항 구멍을 메웠습니다.',
    result: '복잡한 건강 데이터를 시니어 사용자가 인지하기 쉬운 차트로 성공적으로 구현하여 프로젝트 후반부 완성도를 극대화했습니다.'
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
    problem: '다양한 브라우저(크로스 브라우징) 및 구형 기기에서의 성능 저하 및 렌더링 깨짐 현상이 빈번하게 보고되었습니다.',
    action: 'Babel 및 최적화된 Polyfill을 적용하고, 무거운 이미지 자산에 Lazy Loading 기법을 도입하여 초기 로딩 성능을 튜닝했습니다.',
    result: '구형 브라우저 환경에서도 동일한 UI/UX를 보장하고, 초기 렌더링 속도(LCP)를 단축시켜 서비스 접근성을 크게 높였습니다.'
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
    problem: '전통적인 jQuery/HTML 방식에서 React 기반의 SPA 렌더링 방식으로 아키텍처가 완전히 전환되는 과도기적 어려움이 있었습니다.',
    action: 'React의 컴포넌트 생명주기와 렌더링 원리를 이해하고, Styled-components 또는 SCSS Module을 활용해 스타일 캡슐화를 진행했습니다.',
    result: '현대적인 프론트엔드 프레임워크 기반의 퍼블리싱 플로우를 완벽히 적응하며, 유지보수성과 컴포넌트 재사용성을 획기적으로 끌어올렸습니다.'
  },
];
