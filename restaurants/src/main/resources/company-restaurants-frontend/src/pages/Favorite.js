// src/pages/SearchResultsPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import RestaurantList from '../components/RestaurantList';
import Footer from '../components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useLikedRestaurants } from '../context/LikedRestaurantsContext';
import NoData from '../components/NoData';
const Favorite = () => {
    const { likedRestaurants } = useLikedRestaurants();

    return (
        <div className="liked-restaurants-container">
        {likedRestaurants.length === 0 ? (
           <NoData iconClass="fa-regular fa-circle-xmark" message="You have no liked restaurants" />
        ) : (
            <ul className="liked-restaurants-list">
                {likedRestaurants.map((restaurant) => (
                    <li key={restaurant.id} className="liked-restaurant-item">
                        <h3>{restaurant.name}</h3>
                        <p>Rating: {restaurant.rating}</p>
                        <p>Price: {restaurant.price}</p>
                        <p>Distance: {restaurant.distance}</p>
                    </li>
                ))}
            </ul>
        )}
        <Footer />
    </div>
    );
};

export default Favorite;
