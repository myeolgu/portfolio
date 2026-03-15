
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
    description: '<b>입사 6개월 차</b>, 기성 운영 업무와 병행하며 <b>단 1주일</b> 만에 메인 페이지의 고난도 인터랙티브 UI를 <b>단독으로 완수</b>했습니다. GSAP과 SVG 기술을 적재적소에 활용하여 브랜드의 기술적 신뢰도를 시각적으로 증명한 프로젝트입니다.',
    tech: ['GSAP', 'SVG Animation', 'SCSS', 'Vanilla JS'],
    link: 'https://www.lgchem.com/career/index',
    image: lgchemImg,
    background: '#ffffff',
    thumbnailHeight: '4rem',
    problem: '단순한 정보 전달을 넘어 기업의 미래지향적 가치를 담은 몰입감 있는 인터랙션이 필요했으나, 고해상도 그래픽과 복잡한 모션 시퀀스로 인한 성능 저하 우려가 있었습니다.',
    action: '<b>GSAP을 도입</b>하여 스크롤 기반의 유기적 모션을 설계하고, 무거운 영상 대신 <b>SVG Path 드로잉 기법</b>을 사용해 브라우저 렌더링 부하를 최소화했습니다. 운영 업무를 병행하는 극한의 일정 속에서도 리서치와 구현을 동시에 달성했습니다.',
    result: '생소한 기술 스택임에도 불구하고 기획 의도를 100% 반영한 고퀄리티 결과물을 <b>기한 내 성공적으로 마감</b>하며, 신입 이상의 <b>기술적 돌파력</b>과 리소스 관리 능력을 인정받았습니다.'
  },
  {
    id: 2,
    title: '시니어 레지던스 브랜드 사이트 구축',
    description: '퍼블리싱 파트 <b>리드급 기여</b>를 통해 고사양 시니어 주거 시설의 브랜드 가치를 웹에서 재현했습니다. <b>웹 접근성(WCAG) 준수</b>는 물론, 모든 디바이스에서 결점 없는 사용자 경험을 제공하는 데 집중했습니다.',
    tech: ['HTML5', 'SCSS', 'JavaScript'],
    link: 'https://www.lottesrc.com/vl',
    image: lotteImg,
    background: '#ffffff',
    thumbnailHeight: '3.4rem',
    problem: '시니어 타겟층의 특성을 고려한 높은 명도 대비와 폰트 가독성 확보가 필수적이었으며, 다양한 모바일/태블릿 환경에서의 완벽한 반응형 대응이 요구되었습니다.',
    action: '<b>WCAG 2.1 지표</b>를 기준으로 접근성을 자가 진단하여 개선하였고, <b>SCSS 믹스인 기반의 반응형 아키텍처</b>를 설계하여 기기별 렌더링 파편화를 원천 차단했습니다. 복합한 서브페이지들을 공통 컴포넌트화하여 개발팀의 생산성을 높였습니다.',
    result: '<b>웹 접근성 우수 마크 획득</b>에 기여하였으며, 유지보수성이 극대화된 반응형 프레임워크를 <b>사내 표준 가이드</b>로 확립하는 성과를 거두었습니다.'
  },
  {
    id: 3,
    title: '삼성자산운용 ETF 펀드솔루션 리뉴얼',
    description: '대규모 금융 플랫폼 리뉴얼의 <b>퍼블리싱 핵심 멤버</b>로서, 방대한 데이터와 복잡한 약관 테이블을 픽셀 퍼펙트 UI로 구현했습니다. 다수의 퍼블리셔 참여 환경에서 <b>코드 일관성</b>을 유지하는 관리 역량을 발휘했습니다.',
    tech: ['CSS Grid/Flexbox', 'Performance Tuning', 'JavaScript'],
    link: 'https://m.funetf.co.kr/',
    image: samsungVideo,
    background: '#ffffff',
    thumbnailHeight: '3rem',
    problem: '동적으로 변화하는 방대한 금융 데이터의 가독성을 모바일 한정된 화면 내에서 확보해야 했으며, 작업자 간의 스타일 충돌을 방지하는 체계적인 가이드가 부재했습니다.',
    action: '<b>CSS Grid를 도입</b>하여 복잡한 데이터를 레이아웃 깨짐 없이 구조화하였고, <b>전사 공통 컴포넌트 라이브러리</b>를 직접 작성하여 4명 이상의 작업자가 병렬로 작업하면서도 동일한 품질을 유지하도록 리드했습니다.',
    result: '금융 플랫폼 특유의 정보 밀도를 유지하면서도 로딩 속도와 가독성을 상향 평준화했으며, 최종 검수 단계에서 <b>마크업 결함 제로(Zero)</b>를 달성하며 프로젝트 안정성에 크게 기여했습니다.'
  },
  {
    id: 4,
    title: '큐브 리펀드 리뉴얼',
    description: '레거시 마크업 환경에서 현대적인 <b>React/TypeScript 생태계</b>로 전환하는 브릿지 역할을 수행했습니다. <b>컴포넌트 중심의 퍼블리싱 방법론</b>을 현장에 안착시키며 프론트엔드 개발 역량을 증명했습니다.',
    tech: ['React', 'TypeScript', 'SCSS Module', 'Component Design'],
    link: 'https://www.cuberefund.com/',
    image: cubeImg.src,
    background: '#ffffff',
    thumbnailHeight: '5rem',
    problem: '기존 jQuery 기반의 단일 페이지 구조에서 컴포넌트 기반의 SPA 아키텍처로 전환하며 일관된 스타일 캡슐화와 상태에 따른 UI 처리가 미흡했습니다.',
    action: 'React의 Props 구조를 이해하고 UI 컴포넌트의 재사용성을 극대화하는 <b>아토믹 디자인 패턴</b>을 일부 적용했습니다. <b>SCSS Module</b>을 활용해 스타일 충돌을 원천 차단하고, 상태값에 따른 동적 클래스 처리를 표준화했습니다.',
    result: '현대적인 프론트엔드 협업 프로세스에 완벽히 적응하며, <b>반복 작업 공수를 40% 이상 단축</b>시키는 등 컴포넌트 기반 개발의 비즈니스 효율을 직접 입증해냈습니다.'
  },
];
