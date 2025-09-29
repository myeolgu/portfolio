const About = () => {
  return (
    <section className="about-section">
      <video autoPlay loop muted playsInline className="about-video">
        <source src={require('../../../assets/videos/video.mp4')} type="video/mp4" />
      </video>
    </section>
  );
};

export default About;
