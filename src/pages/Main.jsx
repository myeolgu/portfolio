const Main = () => {
  const splitText = text => {
    return text.split('').map((char, index) => (
      <span key={index} className="char">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text">
          <p className="txt">{splitText('DREAMERS')}</p>
          <p className="txt">{splitText('PIONEERS')}</p>
          <p className="txt">{splitText('INNOVATORS')}</p>
        </div>

        <div className="about-description">
          Nexon is a leader in global entertainment with a portfolio of successful game franchises enjoyed by hundreds of millions of people around the world. Nexon has more than 40 live games in
          operation in more than 190 countries, available on PC, console and mobile. Nexon has more than ten intellectual properties including MapleStory, Mabinogi, and Dungeon&amp;Fighter supported
          by best-in-class Live Operations which keeps the games balanced, and refreshed with new content and experiences. Spanning multiple generations, Nexon games are enjoyed for decades by players
          all over the world.
        </div>
      </div>
    </section>
  );
};

export default Main;
