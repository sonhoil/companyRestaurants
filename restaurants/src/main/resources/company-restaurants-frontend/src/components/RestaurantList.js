// src/components/RestaurantList.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RestaurantList = () => {
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('/api/restaurant/search');
        setRestaurants(response.data);
      } catch (error) {
        console.error('식당 목록을 불러오는데 실패했습니다:', error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant) => (
        <div
          key={restaurant.id}
          className="restaurant-card"
          onClick={() => navigate(`/restaurant/${restaurant.id}`)}
          style={{ cursor: 'pointer' }}
        >
          <img 
            src={restaurant.imageUrl || 'https://via.placeholder.com/200x120'} 
            alt={`${restaurant.name}`} 
            className="restaurant-image" 
          />
          <div className="restaurant-info">
            <h3 className="restaurant-name">{restaurant.name}</h3>
            <div className="restaurant-details">
              <div className="detail-item">
                <i className="fas fa-star detail-icon"></i> {restaurant.rating} / ({restaurant.reviewCount || 0})
              </div>
              <div className="detail-item">
                <i className="fas fa-dollar-sign detail-icon"></i> {restaurant.averagePrice || '정보없음'} 원
              </div>
              <div className="detail-item">
                <i className="fas fa-map-marker-alt detail-icon"></i> {restaurant.distance || '정보없음'} km
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;
