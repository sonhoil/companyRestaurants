// src/components/RestaurantCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
const RestaurantCard = ({ restaurant }) => {
    const navigate = useNavigate();
    return (
        <div className="restaurant-card"
        onClick={() => navigate(`/restaurant/${restaurant.id}`)}
        >
            <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
            <div className="restaurant-info">
                <h3 className="restaurant-name">{restaurant.name}</h3>
                <p className="restaurant-description">{restaurant.description}</p>
                <div className="restaurant-details">
                    <span className="detail-item">
                        <i className="fas fa-star detail-icon"></i> {restaurant.rating} / 5
                    </span>
                    <span className="detail-item">
                        <i className="fas fa-dollar-sign detail-icon"></i> {restaurant.price} 원
                    </span>
                    <span className="detail-item">
                        <i className="fas fa-map-marker-alt detail-icon"></i> {restaurant.distance} km
                    </span>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;
