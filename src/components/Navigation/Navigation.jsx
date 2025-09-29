import { useState } from 'react';
import './Navigation.scss';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'ABOUT ME', href: '#about' },
    { label: 'WORK', href: '#work' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navigation">
      <button className={`navigation__toggle ${isOpen ? 'navigation__toggle--open' : ''}`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`navigation__list ${isOpen ? 'navigation__list--open' : ''}`}>
        {menuItems.map((item, index) => (
          <li key={index} className="navigation__item">
            <a href={item.href} className="navigation__link" onClick={handleLinkClick}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
