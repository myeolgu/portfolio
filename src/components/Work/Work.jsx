import React from 'react';
import './Work.scss';

const Work = () => {
    return (
        <section className="work">
            <h2>My Work</h2>
            <div className="work-items">
                <div className="work-item">
                    <h3>Project Title 1</h3>
                    <p>Description of project 1. This project showcases my skills in...</p>
                </div>
                <div className="work-item">
                    <h3>Project Title 2</h3>
                    <p>Description of project 2. This project demonstrates my ability to...</p>
                </div>
                <div className="work-item">
                    <h3>Project Title 3</h3>
                    <p>Description of project 3. This project highlights my experience with...</p>
                </div>
            </div>
        </section>
    );
};

export default Work;