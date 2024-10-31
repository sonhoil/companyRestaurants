// src/components/RestaurantList.js
import React, { useEffect, useState } from 'react';
import api from '../services/api';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await api.get('/restaurant/search');
        setRestaurants(response.data);
      } catch (error) {
        console.error('Error fetching restaurants', error);
      }
    };
    fetchRestaurants();
  }, []);

  return (
    <div>
      <h2>🍽️ Restaurants Near You</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.restaurantId}>
            {restaurant.name} - {restaurant.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
