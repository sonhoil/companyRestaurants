import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';
import CafeteriaList from '../components/CafeteriaList';
import RestaurantList from '../components/RestaurantList';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import RestaurantCard from '../components/RestaurantCard';
const Homepage = () => {
    const navigate = useNavigate();

    const handleSearchClick = () => {
        navigate('/search');
    };
    const [isLoading, setIsLoading] = useState(false);
    const [recommendedRestaurant, setRecommendedRestaurant] = useState(null);

    const sampleRestaurants = [
      {
          id: 1,
          name: "McDonald's",
          description: 'Fast food chain',
          image: 'https://via.placeholder.com/200x120',
          price: '8,000',
          distance: 1.2,
          rating: 4.2,
      },
      {
          id: 2,
          name: "Kimbap Heaven",
          description: 'Korean kimbap restaurant',
          image: 'https://via.placeholder.com/200x120',
          price: '6,000',
          distance: 0.8,
          rating: 4.5,
      },
      {
          id: 3,
          name: "Burger Queen",
          description: 'Burgers and fries',
          image: 'https://via.placeholder.com/200x120',
          price: '7,500',
          distance: 1.5,
          rating: 4.0,
      },
      {
          id: 4,
          name: "Burger Queen2",
          description: 'Burgers and fries',
          image: 'https://via.placeholder.com/200x120',
          price: '7,500',
          distance: 1.5,
          rating: 4.0,
      },
      {
          id: 5,
          name: "Burger Queen3",
          description: 'Burgers and fries',
          image: 'https://via.placeholder.com/200x120',
          price: '7,500',
          distance: 1.5,
          rating: 4.0,
      },
      {
          id: 6,
          name: "Burger Queen4",
          description: 'Burgers and fries',
          image: 'https://via.placeholder.com/200x120',
          price: '7,500',
          distance: 1.5,
          rating: 4.0,
      },
  ];

  const handleRecommendClick = () => {
    setRecommendedRestaurant(null); // 기존 결과를 숨김
    setIsLoading(true);
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * sampleRestaurants.length);
        setRecommendedRestaurant(sampleRestaurants[randomIndex]);
        setIsLoading(false);
    }, 2000);
};
    return (
        <div className="container homepage ">
            <SearchBar showBackButton={false} onSearch={false}/>

            {!isLoading && !recommendedRestaurant && (
                <button className="recommend-button" onClick={handleRecommendClick}>
                    Recommend a Restaurant
                </button>
            )}

            {isLoading && (
                <div className="loading-animation">
                    <i className="fas fa-hamburger"></i>
                    <i className="fas fa-pizza-slice"></i>
                    <i className="fas fa-coffee"></i>
                    <i className="fas fa-ice-cream"></i>
                </div>
            )}

          {recommendedRestaurant && (
                <div className="recommended-container">
                    <RestaurantCard restaurant={recommendedRestaurant} />
                    <button className="recommend-icon" onClick={handleRecommendClick}>
                        <i className="fas fa-sync-alt"></i>
                    </button>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Homepage;
