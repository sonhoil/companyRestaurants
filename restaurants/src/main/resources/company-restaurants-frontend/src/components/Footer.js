import React, { useState } from 'react';


const Footer = () => {
    const [activeButton, setActiveButton] = useState('Home');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <footer className="footer">
            <div className="footer-top-border"></div>
            <button
                className={`footer-button ${activeButton === 'Home' ? 'active' : 'inactive'}`}
                onClick={() => handleButtonClick('Home')}
            >
                <i className="fas fa-home"></i>
                <span>Home</span>
            </button>
            <button
                className={`footer-button ${activeButton === 'Cafeterias' ? 'active' : 'inactive'}`}
                onClick={() => handleButtonClick('Cafeterias')}
            >
                <i className="fas fa-utensils"></i>
                <span>Cafeterias</span>
            </button>
            <button
                className={`footer-button ${activeButton === 'Restaurants' ? 'active' : 'inactive'}`}
                onClick={() => handleButtonClick('Restaurants')}
            >
                <i className="fas fa-store"></i>
                <span>Restaurants</span>
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
