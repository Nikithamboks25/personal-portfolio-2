import React from "react";
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <span className="logo-details"> NM.</span>
            </div>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                {/* <li><a href="/projects">Projects</a></li>
                <li><a href="/skills">Skills</a></li>
                <li><a href="/achievements">Achievements</a></li> */}
                <li><a href="/contactUs">Contact Us</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
