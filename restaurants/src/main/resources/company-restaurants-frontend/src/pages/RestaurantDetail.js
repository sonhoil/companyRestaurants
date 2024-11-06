// src/components/RestaurantDetails.js
import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Review from '../components/Review';
import { useNavigate } from 'react-router-dom';
import { useLikedRestaurants } from '../context/LikedRestaurantsContext';
const RestaurantDetails = () => {
  const [activeTab, setActiveTab] = useState('info'); // Default tab
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();
  const { likedRestaurants, addRestaurant, removeRestaurant } = useLikedRestaurants();
  const [isLiked, setIsLiked] = useState(false); // Like button state
  const handleBackClick = () => {
    navigate(-1);
  };
  // Function to render the content based on the selected tab

  const handleLikeClick = () => {
    if (isLiked) {
        removeRestaurant(restaurant.id);
    } else {
        addRestaurant(restaurant);
    }
    setIsLiked(!isLiked);
};

  const restaurant = {
    id: 1,
    name: 'Restaurant Name',
    rating: 2,
    price: '1 원',
    distance: '1 km'
};

useEffect(() => {
        setIsLiked(likedRestaurants.some(r => r.id === restaurant.id));
        if (activeTab === 'reviews') {
            fetchReviews();
        }
    }, [likedRestaurants, restaurant.id, activeTab]);

	const fetchReviews = async () => {
        try {
           // const response = await axios.get(`/api/restaurants/${restaurant.id}/reviews`);
           const tempReviews = [
            {
                id: 1,
                author: 'Alice',
                comment: 'Great food and cozy atmosphere!',
                photoUrl: 'https://via.placeholder.com/60'
            },
            {
                id: 2,
                author: 'Bob',
                comment: 'Had a fantastic time, would recommend!',
                photoUrl: 'https://via.placeholder.com/60'
            },
            {
                id: 3,
                author: 'Charlie',
                comment: 'Loved the dessert selection!',
                photoUrl: 'https://via.placeholder.com/60'
            }
        ];
          //  setReviews(response.data);
          setReviews(tempReviews);
        } catch (error) {
            console.error("Failed to fetch reviews:", error);
        }
    };
    
    const renderContent = () => {
        switch (activeTab) {
            case 'info':
                return <div>Basic information about the restaurant...</div>;
            case 'menu':
                return <div>Menu items list...</div>;
            case 'reviews':
                return (
                    <div className="reviews-container">
                        {reviews.length === 0 ? (
                            <p>No reviews available.</p>
                        ) : (
                            reviews.map((review) => (
                                <Review
                                    key={review.id}
                                    author={review.author}
                                    comment={review.comment}
                                    photoUrl={review.photoUrl}
                                />
                            ))
                        )}
                    </div>
                );
            default:
                return null;
        }
    };

  return (
    <div className="details-container">
      <button className="back-button" onClick={handleBackClick}>
          <i className="fas fa-arrow-left"></i>
      </button>
      <h1>{restaurant.name}</h1>
      <div className="restaurant-addInfo">
        <div className="restaurant-summary">
          <div className="detail-item">
            <i className="fas fa-star detail-icon"></i> 2 / 5
          </div>
          <div className="detail-item">
            <i className="fas fa-dollar-sign detail-icon"></i> 1 원
          </div>
          <div className="detail-item">
            <i className="fas fa-map-marker-alt detail-icon"></i> 1 km
          </div>
        </div> 
        <button className="like-button" onClick={handleLikeClick}>
                <i className={`fas fa-heart ${isLiked ? 'liked' : ''}`}></i> {isLiked ? 'Liked' : 'Like'}
            </button>
      </div>
      
      {/* Tabs */}
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'info' ? 'active' : ''}`}
          onClick={() => setActiveTab('info')}
        >
          Info
        </button>
        <button 
          className={`tab ${activeTab === 'menu' ? 'active' : ''}`}
          onClick={() => setActiveTab('menu')}
        >
          Menu
        </button>
        <button 
          className={`tab ${activeTab === 'reviews' ? 'active' : ''}`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {renderContent()}
      </div>
      <Footer />
    </div>
  );
};

export default RestaurantDetails;
