import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import About from '../components/About';
import Expertise from '../components/Expertise';
import Projects from '../components/Projects';
import './DevContainer.css';

export default function DevContainer() {
    const [page, setPage] = useState('About');

    const handlePageChange = (pageName) => {
        setPage(pageName);
    };

    return (
        <div className="dev-container">
            <NavBar changeHandler={handlePageChange} page={page}/>
            <div className="content-container">
                <CSSTransition
                    in={page === 'About'}
                    timeout={350}
                    classNames="fade"
                    unmountOnExit
                >
                    <About />
                </CSSTransition>
                <CSSTransition
                    in={page === 'Expertise'}
                    timeout={350}
                    classNames="fade"
                    unmountOnExit
                >
                    <Expertise />
                </CSSTransition>
                <CSSTransition
                    in={page === 'Projects'}
                    timeout={350}
                    classNames="fade"
                    unmountOnExit
                >
                    <Projects />
                </CSSTransition>
            </div>
            <div className="scroll"></div>
            <Footer />
        </div>
    );
}
