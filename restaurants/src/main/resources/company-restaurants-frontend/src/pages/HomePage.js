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
    const [recommendFrom, setRecommendFrom] = useState('myLikes'); // 기본값: 내가 좋아요 누른 식당
    const allNearbyRestaurants  = [
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
  const companyLikedRestaurants = [
    { id: 3, name: "Burger Queen", description: 'Burgers and fries', image: 'https://via.placeholder.com/200x120', price: '7,500', distance: 1.5, rating: 4.0 },
    { id: 4, name: "Sushi Place", description: 'Fresh sushi and sashimi', image: 'https://via.placeholder.com/200x120', price: '10,000', distance: 2.3, rating: 4.8 },
];
  const myLikedRestaurants = [
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
];
const handleRecommendClick = () => {
    setRecommendedRestaurant(null);
    setIsLoading(true);

    const selectedRestaurants =
        recommendFrom === 'myLikes'
            ? myLikedRestaurants
            : recommendFrom === 'companyLikes'
            ? companyLikedRestaurants
            : allNearbyRestaurants;

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * selectedRestaurants.length);
        setRecommendedRestaurant(selectedRestaurants[randomIndex]);
        setIsLoading(false);
    }, 2000);
};


    return (
        <div className="container homepage ">
            <SearchBar showBackButton={false} onSearch={false}/>
            <div className="recommend-options">
                <label className={`recommend-option-btn ${recommendFrom === 'myLikes' ? 'active' : ''}`}>
                    <input
                        type="radio"
                        name="recommendFrom"
                        value="myLikes"
                        checked={recommendFrom === 'myLikes'}
                        onChange={() => setRecommendFrom('myLikes')}
                    />
                    <i className="fas fa-heart"></i>
                    <span>My Likes</span>
                </label>
                <label className={`recommend-option-btn ${recommendFrom === 'companyLikes' ? 'active' : ''}`}>
                    <input
                        type="radio"
                        name="recommendFrom"
                        value="companyLikes"
                        checked={recommendFrom === 'companyLikes'}
                        onChange={() => setRecommendFrom('companyLikes')}
                    />
                    <i className="fas fa-users"></i>
                    <span>Company Likes</span>
                </label>
                <label className={`recommend-option-btn ${recommendFrom === 'allNearby' ? 'active' : ''}`}>
                    <input
                        type="radio"
                        name="recommendFrom"
                        value="allNearby"
                        checked={recommendFrom === 'allNearby'}
                        onChange={() => setRecommendFrom('allNearby')}
                    />
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Nearby</span>
                </label>
            </div>
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
