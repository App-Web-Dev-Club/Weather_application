import React, { useState } from 'react';
import { Link } from "react-router-dom";
 // eslint-disable-next-line
import { FaHome, FaLink, FaUserAlt, FaUserAltSlash, FaBars } from 'react-icons/fa';
import '../App.css'; // Make sure this path is correct for your project structure

export default function Header() {
    const [isOpen, setIsOpen] = useState(true); // Start with the navbar open
    const toggleNavbar = () => setIsOpen(!isOpen);

    return (
        <div className={`whole ${isOpen ? '' : 'collapsed'}`}>
            <button className="menu-toggler" onClick={toggleNavbar}>
                <FaBars />
            </button>

            <ul className={`nav flex-column ${isOpen ? '' : 'collapsed'}`}>
                {/* Removed onClick={toggleNavbar} from Link components */}
                <li className="nav-item columns">
                    <Link to="/" className="nav-link">
                        <FaHome /> Home
                    </Link>
                </li>
                <li className="nav-item columns">
                    <Link to="/contact" className="nav-link">
                        <FaLink /> Link 1
                    </Link>
                </li>
                <li className="nav-item columns">
                    <Link to="/about" className="nav-link">
                        <FaUserAlt /> Link 2
                    </Link>
                </li>
            </ul>
        </div>
    );
}
