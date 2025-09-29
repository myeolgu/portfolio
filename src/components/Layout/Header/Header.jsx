import { useEffect, useState } from 'react';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container">
        <div className="header__content">
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
