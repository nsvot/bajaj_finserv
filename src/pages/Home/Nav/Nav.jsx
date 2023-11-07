import React from 'react';
import "./Nav.css"

function Navbar() {
    return (
        <nav className="navbar">
            <div className="left-section">
                <div className="team-name">Team HacktheHustle</div>
            </div>
            <ul className="nav-list">
                <li><a href="/">Home</a></li>
                <li><a href="/upload">Upload</a></li>
                <li><a href="/about">About</a></li>
                {/* <li><a href="/login">Log In/Sign Up</a></li> */}
            </ul>
        </nav>
    );
}

export default Navbar;
    