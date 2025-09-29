import { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: '', href: '#' },
    { label: '', href: '#' },
    { label: '', href: '#' },
    { label: '', href: '#' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="nav">
      <button className={`navigation__toggle ${isOpen ? 'navigation__toggle--open' : ''}`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-list ${isOpen ? 'nav-list-open' : ''}`}>
        {menuItems.map((item, index) => (
          <li key={index} className="nav__item">
            <a href={item.href} className="nav__link" onClick={handleLinkClick}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
