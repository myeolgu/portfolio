import React from 'react';
import './Navigation.scss';

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul className="nav-list">
                <li className="nav-item"><a href="#about">ABOUT ME</a></li>
                <li className="nav-item"><a href="#work">WORK</a></li>
                <li className="nav-item"><a href="#projects">PROJECT</a></li>
                <li className="nav-item"><a href="#contact">CONTACT</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;