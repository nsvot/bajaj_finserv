import React, { useState, useEffect } from 'react';
import "./Home.css";
import Nav from './Nav/Nav';

const Home = () => {
    const [text, setText] = useState('');
    const originalText = "Identifying Fraudulent Insurance Claims";

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= originalText.length) {
                setText(originalText.substring(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 100); // Adjust the interval for typing speed
    }, []);

    return (
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
                    <div className=" right-desc">
                        Digital Forgery Detection
                    </div>
                    <div className="right-desc">
                        Data Manipulation Detection
                    </div>
                    <div className="right-desc">Algorithmic Approach to Scribbling and Whitener Detection
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;
