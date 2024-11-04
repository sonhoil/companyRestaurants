import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const [activeButton, setActiveButton] = useState('Home');
    const navigate = useNavigate();
    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
        navigate(`/${buttonName}`);
    };

    return (
        <footer className="footer">
            <div className="footer-top-border"></div>
            <button
                className={`footer-button ${activeButton === '' ? 'active' : 'inactive'}`}
                onClick={() => handleButtonClick('')}
            >
                <i className="fas fa-home"></i>
                <span>Home</span>
            </button>
          
            <button
                className={`footer-button ${activeButton === 'Search' ? 'active' : 'inactive'}`}
                onClick={() => handleButtonClick('Search')}
            >
                <i className="fas fa-store"></i>
                <span>Search</span>
            </button>
            <button
                className={`footer-button ${activeButton === 'Favorites' ? 'active' : 'inactive'}`}
                onClick={() => handleButtonClick('Favorites')}
            >
                <i className="fas fa-heart"></i>
                <span>Favorites</span>
            </button>
            <button
                className={`footer-button ${activeButton === 'Profile' ? 'active' : 'inactive'}`}
                onClick={() => handleButtonClick('Profile')}
            >
                <i className="fas fa-user"></i>
                <span>Profile</span>
            </button>
        </footer>
    );
};

export default Footer;
