import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Work from './components/Work/Work';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './App.scss';

const App = () => {
    return (
        <div className="app">
            <Header />
            <About />
            <Work />
            <Projects />
            <Contact />
        </div>
    );
};

export default App;