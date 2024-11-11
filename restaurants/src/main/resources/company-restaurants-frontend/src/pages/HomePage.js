import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';
import CafeteriaList from '../components/CafeteriaList';
import RestaurantList from '../components/RestaurantList';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';

const Homepage = () => {
    const navigate = useNavigate();

    const handleSearchClick = () => {
        navigate('/search');
    };
    const [isLoading, setIsLoading] = useState(false);
    const [recommendedRestaurant, setRecommendedRestaurant] = useState(null);

    const sampleRestaurants = [
        { id: 1, name: "McDonald's", description: 'Fast food chain' },
        { id: 2, name: "Kimbap Heaven", description: 'Korean kimbap restaurant' },
        { id: 3, name: "Burger Queen", description: 'Burgers and fries' },
        { id: 4, name: "Sushi Place", description: 'Fresh sushi and sashimi' },
        { id: 5, name: "Italian Bistro", description: 'Italian pasta and pizza' }
    ];

    const handleRecommendClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * sampleRestaurants.length);
            setRecommendedRestaurant(sampleRestaurants[randomIndex]);
            setIsLoading(false);
        }, 2000); // 2초 동안 로딩 애니메이션 표시
    };
    return (
        <div className="container homepage ">
            <SearchBar showBackButton={false} onSearch={false}/>

            {!isLoading && !recommendedRestaurant && (
                <button className="recommend-button" onClick={handleRecommendClick}>
                    Recommend a Restaurant
                </button>
            )}

            {isLoading && <div className="loading-animation">Finding a restaurant...</div>}

            {recommendedRestaurant && (
                <div className="restaurant-list">
                <div
                key={sampleRestaurants.id}
                className="restaurant-card"
                onClick={() => navigate(`/restaurant/${sampleRestaurants.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <img src={sampleRestaurants.image} alt={`${sampleRestaurants.name}`} className="restaurant-image" />
                <div className="restaurant-info">
                  <h3 className="restaurant-name">{sampleRestaurants.name}</h3>
                  <div className="restaurant-details">
                    <div className="detail-item">
                      <i className="fas fa-star detail-icon"></i> {sampleRestaurants.rating} / (666)
                    </div>
                    <div className="detail-item">
                      <i className="fas fa-dollar-sign detail-icon"></i> {sampleRestaurants.price} 원
                    </div>
                    <div className="detail-item">
                      <i className="fas fa-map-marker-alt detail-icon"></i> {sampleRestaurants.distance} km
                    </div>
                  </div>
                </div>
              </div>
              </div>
            )}

            <Footer />
        </div>
    );
};

export default Homepage;
