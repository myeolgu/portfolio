
const lgchemImg = '/portfolio/videos/lg_intro.mp4';
const lotteImg = '/portfolio/videos/lotte_intro.mp4';
const samsungVideo = 'https://www.youtube.com/embed/v1r4XlDyFPU?autoplay=1&mute=1&loop=1&playlist=v1r4XlDyFPU&controls=0&showinfo=0';
const damdiVideo = 'https://www.youtube.com/embed/mv2dr5egSk4?autoplay=1&mute=1&loop=1&playlist=mv2dr5egSk4';
const sonoVideo = 'https://www.youtube.com/embed/tA07T3XXp4w?autoplay=1&mute=1&loop=1&playlist=tA07T3XXp4w&controls=0&showinfo=0';
import cubeImg from '../assets/images/projects/cube.jpg';

export const projects = [
  {
    id: 1,
    title: 'LG화학 채용 사이트 메인 리뉴얼',
    description: '입사 5~6개월 차에 삼성자산운용 운영 업무와 병행하며, 단 일주일이라는 촉박한 기한 내에 메인 페이지의 고난도 인터랙션을 완수했습니다. GSAP을 전사 최초로 도입하며 기술적 한계를 돌파한 핵심 프로젝트입니다.',
    tech: ['HTML5', 'SCSS', 'JavaScript', 'GSAP (ScrollTrigger)', 'SVG Animation'],
    link: 'https://www.lgchem.com/career/index',
    image: lgchemImg,
    background: '#ffffff',
    thumbnailHeight: '4rem',
    problem: '브랜드 가치를 높이기 위한 정교한 스크롤 애니메이션과 SVG 드로잉 효과가 필요했으나, 짧은 기한과 생소한 기술(GSAP)이라는 제약이 있었습니다.',
    action: 'GSAP ScrollTrigger를 독학하여 도입하고, SVG path 애니메이션을 통해 시각적 요소를 유기적으로 연결했습니다. 멀티태스킹을 통해 운영 업무와 병행하며 마감 기한을 준수했습니다.',
    result: '생소한 기술과 촉박한 일정이라는 불확실성 속에서도, 적극적인 학습을 통해 기획 의도를 100% 구현하며 기한 내 성공적으로 마감했습니다.'
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
    image: cubeImg.src,
    background: '#ffffff',
    thumbnailHeight: '5rem',
    problem: '전통적인 jQuery/HTML 방식에서 React 기반의 SPA 렌더링 방식으로 아키텍처가 완전히 전환되는 과도기적 어려움이 있었습니다.',
    action: 'React의 컴포넌트 생명주기와 렌더링 원리를 이해하고, Styled-components 또는 SCSS Module을 활용해 스타일 캡슐화를 진행했습니다.',
    result: '현대적인 프론트엔드 프레임워크 기반의 퍼블리싱 플로우를 완벽히 적응하며, 유지보수성과 컴포넌트 재사용성을 획기적으로 끌어올렸습니다.'
  },
];
