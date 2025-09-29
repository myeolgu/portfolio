import './About.scss';

const About = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'AWS', level: 65 },
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="about__title">About Me</h2>

        <div className="about__content">
          <div className="about__intro">
            <div className="about__profile">
              <div className="about__avatar">
                <div className="about__avatar-placeholder">👨‍💻</div>
              </div>

              <div className="about__info">
                <h3 className="about__name">김개발</h3>
                <p className="about__role">Frontend Developer</p>
                <p className="about__description">
                  사용자 경험을 중시하며 깔끔하고 효율적인 코드를 작성하는 것을 좋아합니다. 새로운 기술을 배우고 적용하는 것에 열정이 있으며, 팀과 협업하여 더 나은 제품을 만들어가는 과정을 즐깁니다.
                </p>
              </div>
            </div>
          </div>

          <div className="about__skills">
            <h4 className="about__skills-title">Skills</h4>
            <div className="about__skills-list">
              {skills.map((skill, index) => (
                <div key={index} className="about__skill">
                  <div className="about__skill-header">
                    <span className="about__skill-name">{skill.name}</span>
                    <span className="about__skill-level">{skill.level}%</span>
                  </div>
                  <div className="about__skill-bar">
                    <div className="about__skill-progress" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
