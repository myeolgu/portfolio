
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
    members: '퍼블리싱 단독',
    problem: 'LG화학의 채용 브랜드 이미지를 강화하기 위해, 방문자들에게 강렬한 첫인상을 줄 수 있는 몰입감 있는 메인 페이지를 만드는 것이 목표였습니다.',
    action: '브랜드의 미래지향적인 느낌을 살리기 위해 <b>GSAP과 SVG 드로잉</b>으로 정교한 모션을 구현했습니다. 영상 대신 코드로 구현하여 브라우저 부하를 줄였고, 신입 시절 운영 업무를 병행하며 일주일 만에 완성해내는 성과를 냈습니다.',
    result: '생소한 기술이었지만 기획 의도에 딱 맞는 결과물을 제시간에 내놓았고, 신입 이상의 돌파력이 있다는 평가를 받으며 사내에서 신뢰를 얻었습니다.'
  },
  {
    id: 2,
    title: '시니어 레지던스 브랜드 사이트 구축',
    description: '시니어 주거 시설의 고급스러운 이미지를 웹에 담아냈습니다. <b>퍼블리싱 스크립트 전반을 단독으로 전담</b>하여 바닐라 자바스크립트로 세밀한 인터랙션을 구현했고, 누구나 이용에 불편함이 없도록 웹 접근성 가이드라인을 철저히 준수하여 작업했습니다.',
    tech: ['HTML5', 'SCSS', 'JavaScript'],
    link: 'https://www.lottesrc.com/vl',
    image: lotteImg,
    background: '#ffffff',
    thumbnailHeight: '3.4rem',
    members: '퍼블리싱 3명 (스크립트 전담)',
    problem: '고사양 시니어 주거 시설의 브랜드 가치를 웹에서 재현하면서, 실버 세대 사용자들도 불편함 없이 정보를 확인할 수 있는 최적의 시각적 경험을 제공하고자 했습니다.',
    action: '가독성을 높이기 위해 폰트와 색상 대비를 세밀하게 조정하고, <b>모든 UI 스크립트를 단독으로 전담</b>하여 바닐라 JS로 인터랙션을 구현했습니다. 어떤 기기에서도 화면이 깨지지 않도록 SCSS로 탄탄한 반응형 구조를 잡았습니다.',
    result: '가독성과 접근성을 최우선으로 고려한 UI를 통해 시니어 사용자들에게 최적화된 경험을 제공하였고, 유지보수가 용이한 반응형 구조를 구축하여 프로젝트의 완성도를 높였습니다.'
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
    members: '퍼블리싱 4명 (공통 라이브러리 개발)',
    problem: '삼성자산운용의 펀드 서비스 플랫폼을 전면 리뉴얼하며, 복잡한 금융 데이터를 사용자들에게 더 쉽고 명확하게 전달하는 것을 최적의 목표로 삼았습니다.',
    action: '대규모 인원이 투입되는 프로젝트인 만큼, 작업자마다 제각각이었던 제작 방식을 통일하기 위해 <b>바닐라 JS 기반의 공통 UI 라이브러리</b>를 제작했습니다. 모달, 셀렉트 박스 등 핵심 컴포넌트를 모듈화해서 전체 사이트의 일관성을 확보했습니다.',
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
    members: '퍼블리싱 2명 (디자인 시스템 설계)',
    problem: '기존의 노후화된 코드를 최신 React 환경으로 전환하여 서비스의 안정성을 높이고, 팀원들이 장기적으로 유지보수하기 편한 UI 개발 환경을 구축하고자 했습니다.',
    action: '<b>Radix UI</b>를 도입하여 접근성이 보장된 컴포넌트들을 빠르게 구축했고, 아토믹 디자인 패턴을 적용해 재사용성을 높였습니다. 스타일이 꼬이지 않도록 독립적으로 관리하는 시스템을 만들어 협업 효율을 극대화했습니다.',
    result: '컴포넌트 중심의 작업 방식이 자리를 잡으면서 <b>수정 요청이나 반복 작업 시간이 40% 이상 줄었고</b>, 디자인 시스템의 기초를 탄탄히 다진 계기가 되었습니다.'
  },
];
