import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const isScroll: boolean = window.scrollY > 50;
      setScroll(isScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header${scroll ? ' scroll' : ''}`}>
      <div className="logo">
        <h1>LOGO</h1>
      </div>
      <nav className="nav">
        <ul className={`nav-list`}>
          {['ABOUT NEXON', 'PRODUCTS', 'INVESTOR RELATIONS', 'CAREERS', 'CONTACT', 'NEWS'].map((label, index) => (
            <li key={index} className="nav-item">
              <a href="#" className="nav-link">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
