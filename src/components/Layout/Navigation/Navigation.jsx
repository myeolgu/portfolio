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
      <ul className={`nav-list ${isOpen ? 'nav-list-open' : ''}`}>
        {menuItems.map((item, index) => (
          <li key={index} className="nav-item">
            <a href={item.href} className="nav-link" onClick={handleLinkClick}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
