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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`header${scroll ? ' scroll' : ''}`}>
      <div className="logo-box">
        <h1 className="logo">JU</h1>
      </div>
      <nav className="nav">
        <ul className={`nav-list`}>
          {[
            { label: 'ABOUT ME', href: '#about' },
            { label: 'NEWS', href: '#news' },
            { label: 'CONTACT', href: '#contact' },
          ].map((item, index) => (
            <li key={index} className="nav-item">
              <a
                href={item.href}
                className="nav-link"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
