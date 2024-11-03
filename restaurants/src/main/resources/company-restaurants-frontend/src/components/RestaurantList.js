// src/components/RestaurantList.js
import React from 'react';


const RestaurantList = () => {
  // Sample data for front-end publishing
  const sampleRestaurants = [
    {
      id: 1,
      name: "McDonald's",
      image: 'https://via.placeholder.com/200x120', // Placeholder image URL
      price: '8,000',
      distance: 1.2,
      rating: 4.2,
    },
    {
      id: 2,
      name: "Kimbap Heaven",
      image: 'https://via.placeholder.com/200x120',
      price: '8,000',
      distance: 0.8,
      rating: 4.5,
    },
    {
      id: 3,
      name: "Burger Queen",
      image: 'https://via.placeholder.com/200x120',
      price: '8,000',
      distance: 1.5,
      rating: 4.0,
    }, {
      id: 4,
      name: "Burger Queen4",
      image: 'https://via.placeholder.com/200x120',
      price: '6,000',
      distance: 1.5,
      rating: 4.0,
    }, {
      id: 5,
      name: "Burger Queen2",
      image: 'https://via.placeholder.com/200x120',
      price: '8,000',
      distance: 1.5,
      rating: 4.0,
    },
  ];

  return (
    <div className="restaurant-list">
      {sampleRestaurants.map((restaurant) => (
        <div key={restaurant.id} className="restaurant-card">
          <img src={restaurant.image} alt={`${restaurant.name}`} className="restaurant-image" />
          <div className="restaurant-info">
            <h3 className="restaurant-name">{restaurant.name}</h3>
            <div className="restaurant-details">
              <div className="detail-item">
                <i className="fas fa-star detail-icon"></i> {restaurant.rating} / (666)
              </div>
              <div className="detail-item">
                <i className="fas fa-dollar-sign detail-icon"></i> {restaurant.price} 원
              </div>
              <div className="detail-item">
                <i className="fas fa-map-marker-alt detail-icon"></i> {restaurant.distance} km
              </div>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;
