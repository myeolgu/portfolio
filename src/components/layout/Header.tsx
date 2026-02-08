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
      <div className="logo-box">
        <h1 className="logo">JU</h1>
      </div>
    </header>
  );
};

export default Header;
