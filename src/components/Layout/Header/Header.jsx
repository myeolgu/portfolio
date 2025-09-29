import { useEffect, useState } from 'react';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScroll = window.scrollY > 50;
      setScroll(isScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scroll ? 'scroll' : ''}`}>
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
