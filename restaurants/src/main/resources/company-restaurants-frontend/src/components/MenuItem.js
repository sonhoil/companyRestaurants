// src/components/MenuItem.js
import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = ({ name, price, rating, description, photoUrl }) => {
    return (
        <div className="menu-item">
            <div className="menu-info">
                <p className="menu-name">
                    {name} <span className="menu-rating">{Array.from({ length: 5 }, (_, i) => <i key={i} className={`fas fa-star ${i < rating ? 'filled' : 'empty'}`}></i>)}</span>
                </p>
                <p className="menu-price">{price}</p>
                <p className="menu-description">{description}</p>
            </div>
            {photoUrl ? <img src={photoUrl} alt={name} className="menu-photo" /> : null}
        </div>
    );
};

MenuItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    photoUrl: PropTypes.string,
};

export default MenuItem;
