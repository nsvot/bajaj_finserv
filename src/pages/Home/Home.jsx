import React, { useState, useEffect, useRef } from 'react';
import "./Home.css";
import Nav from './Nav/Nav';
import Solution from "../Solution/Solution";
import F1 from "../../Assets/f1.png";
import F2 from "../../Assets/f2.png";

const Home = () => {
    const [text, setText] = useState('');
    const [solution, setSolution] = useState(null);
    const originalText = "Identifying Fraudulent Insurance Claims";
    const [showComponent, setShowComponent] = useState(false);
    const selectedComponentRef = useRef(null);

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= originalText.length) {
                setText(originalText.substring(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 100);
    }, []);

    const handleSolution = (selectedSolution) => {
        setSolution(selectedSolution);
        setShowComponent(true);
    };

    useEffect(() => {
        if (showComponent && selectedComponentRef.current) {
            selectedComponentRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [showComponent]);

    let selectedComponent = null;
    if (showComponent) {
        if (solution === '1') {
            selectedComponent =  <Solution heading="Digital Forgery Detection" id="digital-detect" text='some text' image={F1} ref={selectedComponentRef} />;

        } else if (solution === '2') {
            selectedComponent = <Solution heading="Data Manipulation Detection" id="data-detect" text='some text' image={F2} ref={selectedComponentRef} />;
        } else if (solution === '3') {
            selectedComponent = <Solution heading="Whitener Detection" id="white-detect" text={'some text'} ref={selectedComponentRef} />;
        }
    }

    return (
        <>
            <div className="home-bg">
                <Nav />
                <div className="main">
                    <div className="left">
                        <div className="home-heading">
                            {text}
                        </div>
                        <div className="home-heading-2">As a part of Bajaj Finserv Health - Datathon</div>
                        <div className="home-desc">
                            Our primary focus is on the development of robust algorithms and models tailored to the detection of insurance claim document fraud. These documents encompass a diverse array, including but not limited to medical invoices, prescriptions, and lab reports. Our mission revolves around the comprehensive identification of document forgeries, such as scribbling, digital manipulation, data tampering, and whitener-based alterations. Our approach is all-encompassing, covering documents in printed, handwritten, or digital formats.
                        </div>
                    </div>
                    <div className="right">
                        <h1 className='right-head'>What we do?</h1>
                        <h2 className='text-white ms-'>Click to access model</h2>
                        <div onClick={() => handleSolution('1')} className="right-desc">
                            Digital Forgery Detection
                        </div>
                        <div onClick={() => handleSolution('2')} className="right-desc">
                            Data Manipulation Detection
                        </div>
                        <div onClick={() => handleSolution('3')} className="right-desc">
                            Algorithmic Approach to Scribbling and Whitener Detection
                        </div>
                    </div>
                </div>
            </div>

            <div ref={selectedComponentRef}></div>
            {selectedComponent}
        </>
    );
}

export default Home;
