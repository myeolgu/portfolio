
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
    description: '입사한 지 얼마 안 된 <b>6개월 차 신입</b>이었지만, 일주일이라는 짧은 기간 동안 메인 페이지의 인터랙션을 <b>혼자서 전부 구현</b>했습니다. GSAP과 SVG를 활용해 눈에 띄는 효과를 만들어내며 실력을 처음으로 제대로 보여드렸던 프로젝트입니다.',
    tech: ['GSAP', 'SVG Animation', 'SCSS', 'Vanilla JS'],
    link: 'https://www.lgchem.com/career/index',
    image: lgchemImg,
    background: '#ffffff',
    thumbnailHeight: '4rem',
    problem: '단순한 정보를 주는 게 아니라 브랜드 느낌을 잘 살릴 수 있는 화려한 효과가 필요했는데, 영상은 너무 무거워서 웹사이트가 느려질까 봐 걱정이었습니다.',
    action: '무거운 영상 대신 <b>GSAP과 SVG 드로잉</b>을 써서 가볍고 매끄러운 모션을 만들었습니다. 운영 업무를 병행하면서도 일주일 만에 리서치부터 구현까지 끝내는 집념을 보여주었습니다.',
    result: '생소한 기술이었지만 기획 의도에 딱 맞는 결과물을 제시간에 내놓았고, 신입 이상의 돌파력이 있다는 평가를 받으며 사내에서 신뢰를 얻었습니다.'
  },
  {
    id: 2,
    title: '시니어 레지던스 브랜드 사이트 구축',
    description: '시니어 주거 시설의 고급스러운 이미지를 웹에 담아냈습니다. <b>퍼블리싱 스크립트 전반을 단독으로 전담</b>하여 바닐라 자바스크립트로 세밀한 인터랙션을 구현했고, 누구나 쓰기 편하도록 웹 접근성까지 꼼꼼히 챙긴 프로젝트입니다.',
    tech: ['HTML5', 'SCSS', 'JavaScript'],
    link: 'https://www.lottesrc.com/vl',
    image: lotteImg,
    background: '#ffffff',
    thumbnailHeight: '3.4rem',
    problem: '글자가 잘 보여야 하는 시니어 타켓이라 폰트 크기나 색상 대비에 신경 쓸 게 많았습니다. 또 모바일이나 태블릿마다 화면이 깨지지 않게 잡는 작업이 중요했습니다.',
    action: '복잡한 레이아웃 속에서도 <b>모든 UI 스크립트를 혼자서 구축</b>하며 인터랙션의 완성도를 높였습니다. 접근성 지침을 하나하나 체크하며 개선했고, SCSS로 반응형 구조를 체계적으로 잡아 기기마다 화면이 틀어지는 걸 원천적으로 막았습니다.',
    result: '최종적으로 <b>웹 접근성 마크</b>를 땄고, 제가 만든 반응형 작업 방식이 나중에 사내 표준 가이드가 될 만큼 완성도를 인정받았습니다.'
  },
  {
    id: 3,
    title: '삼성자산운용 ETF 펀드솔루션 리뉴얼',
    description: '방대한 금융 데이터를 보여주는 플랫폼이라 공통 요소들을 정리하는 게 핵심이었습니다. <b>모달이나 셀렉트 박스 같은 핵심 인터랙션</b>을 직접 개발해서 전체 사이트의 통일감을 높였습니다.',
    tech: ['Vanilla JS', 'UI Library', 'Grid/Flex', 'SCSS'],
    link: 'https://m.funetf.co.kr/',
    image: samsungVideo,
    background: '#ffffff',
    thumbnailHeight: '3rem',
    problem: '금융 사이트라 입력창이나 팝업이 정말 많았는데, 작업자마다 만드는 방식이 달라서 나중에 고치기도 힘들고 사용자 입장에서도 제각각인 느낌이 강했습니다.',
    action: '바닐라 JS로 <b>공통 UI 라이브러리</b>를 제작했습니다. 모달, 커스텀 셀렉트, 드롭다운 같은 것들을 누구나 쓰기 쉬운 구조로 만들어서 4명의 퍼블리셔가 똑같은 퀄리티로 작업할 수 있게 가이드를 잡았습니다.',
    result: '파편화된 코드들을 하나로 통일하면서 <b>작업 공수를 30%나 줄였고</b>, 최종 검수 때 마크업 결함이 단 하나도 나오지 않을 만큼 탄탄하게 마무리했습니다.'
  },
  {
    id: 4,
    title: '큐브 리펀드 리뉴얼',
    description: '오래된 코드를 최신 <b>React/TypeScript</b> 환경으로 바꾸는 과정에서 UI 구조를 새로 짰습니다. <b>Radix UI</b>를 활용해 쓰기 편한 컴포넌트들을 만들어 배포하며 개발 효율을 높이는 데 집중했습니다.',
    tech: ['React', 'TypeScript', 'Radix UI', 'SCSS Module'],
    link: 'https://www.cuberefund.com/',
    image: cubeImg.src,
    background: '#ffffff',
    thumbnailHeight: '5rem',
    problem: '예전 방식의 코드는 스타일이 꼬이기 쉽고 화면 상태에 따라 UI를 다루기가 까다로웠습니다. 중복되는 작업도 많아서 효율성이 떨어지는 상태였습니다.',
    action: '<b>Radix UI</b>를 써서 접근성이 보장된 팝업이나 모달 같은 구성 요소를 빠르게 만들었고, 컴포넌트 단위로 쪼개서 작업해서 재사용성을 극대화했습니다. CSS가 섞이지 않게 따로 관리하고 가이드라인을 세워 협업이 잘 되게끔 했습니다.',
    result: '컴포넌트 중심의 작업 방식이 자리를 잡으면서 <b>수정 요청이나 반복 작업 시간이 40% 이상 줄었고</b>, 디자인 시스템의 기초를 탄탄히 다진 계기가 되었습니다.'
  },
];
