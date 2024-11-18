// src/components/RestaurantDetails.js
import React, { useState, useEffect } from 'react';
import { useLikedRestaurants } from '../context/LikedRestaurantsContext';
import Footer from '../components/Footer';
import Review from '../components/Review';
import MenuItem from '../components/MenuItem';
import { useNavigate } from 'react-router-dom';

const RestaurantDetails = () => {
    const [activeTab, setActiveTab] = useState('info');
    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate();
    const { likedRestaurants, addRestaurant, removeRestaurant } = useLikedRestaurants();
    const [isLiked, setIsLiked] = useState(false);
    const [menuItems, setMenuItems] = useState([]);
    const restaurant = {
        id: 1,
        name: 'Restaurant Name',
        rating: 2,
        price: '1 원',
        distance: '1 km',
        address: '123 Main St, Cityville',
        hours: '10:00 AM - 10:00 PM',
        phone: '123-456-7890',
        website: 'https://restaurantwebsite.com',
        additionalNotes: 'This is a cozy place with a great atmosphere. Free parking available.'
    };

    useEffect(() => {
        setIsLiked(likedRestaurants.some(r => r.id === restaurant.id));
        if (activeTab === 'info') {
            fetchMenuItems();
            fetchReviews();
        }
        if (activeTab === 'reviews') fetchReviews();
        if (activeTab === 'menu') fetchMenuItems();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [likedRestaurants, restaurant.id, activeTab]);

    // 임시 데이터로 리뷰 설정
    const fetchReviews = () => {
        const tempReviews = [
            {
                id: 1,
                author: 'Alice',
                rating: 4,
                comment: 'Great food and cozy atmosphere!',
                photoUrl: 'https://via.placeholder.com/300x200'
            },
            {
                id: 2,
                author: 'Bob',
                rating: 5,
                comment: 'Had a fantastic time, would recommend!',
                photoUrl: 'https://via.placeholder.com/300x200'
            },
            {
                id: 3,
                author: 'Charlie',
                rating: 3,
                comment: 'Loved the dessert selection!',
                photoUrl: 'https://via.placeholder.com/300x200'
            }
        ];
        setReviews(tempReviews);
    };
    const fetchMenuItems = () => {
      const tempMenuItems = [
          { id: 1, name: 'Pizza', price: '10,000 원', rating: 4, description: 'Delicious cheese pizza', photoUrl: 'https://via.placeholder.com/100x100' },
          { id: 2, name: 'Pasta', price: '12,000 원', rating: 5, description: 'Creamy Alfredo pasta', photoUrl: '' } // 사진 없는 경우
      ];
      setMenuItems(tempMenuItems);
    };
    const handleLikeClick = () => {
        if (isLiked) {
            removeRestaurant(restaurant.id);
        } else {
            addRestaurant(restaurant);
        }
        setIsLiked(!isLiked);
    };
    const handleWriteReviewClick = () => {
        navigate('/write-review');
    };
    const handleViewMoreMenusClick = () => setActiveTab('menu');
    const handleViewMoreReviewsClick = () => setActiveTab('reviews');
    const renderContent = () => {
        switch (activeTab) {
            case 'info':
                return (
                    <div className="info-container">
                        <div className="info-item">
                            <i className="fas fa-map-marker-alt info-icon"></i>
                            <span>{restaurant.address}</span>
                        </div>
                        <div className="info-item">
                            <i className="fas fa-clock info-icon"></i>
                            <span>{restaurant.hours}</span>
                        </div>
                        <div className="info-item">
                            <i className="fas fa-phone info-icon"></i>
                            <span>{restaurant.phone}</span>
                        </div>
                        <div className="info-item">
                            <i className="fas fa-globe info-icon"></i>
                            <a href={restaurant.website} target="_blank" rel="noopener noreferrer">
                                {restaurant.website}
                            </a>
                        </div>
                        <div className="info-item">
                            <i className="fas fa-info-circle info-icon"></i>
                            <span>{restaurant.additionalNotes}</span>
                        </div>
                        <hr className="section-divider" />

                        {/* 메뉴 미리보기 */}
                        <h2>Menu Preview</h2>
                        <div className="menu-container">
                            {menuItems.slice(0, 4).map((menuItem) => (
                                <MenuItem key={menuItem.id} {...menuItem} />
                            ))}
                        </div>
                        <button className="view-more-button" onClick={handleViewMoreMenusClick}>
                            View More Menus
                        </button>

                        {/* 구분선 */}
                        <hr className="section-divider" />

                        {/* 리뷰 미리보기 */}
                        <h2>Review Preview</h2>
                        <div className="review-preview">
                            {reviews.slice(0, 2).map(review => (
                                <Review key={review.id} {...review} />
                            ))}
                        </div>
                        <button className="view-more-button" onClick={handleViewMoreReviewsClick}>
                            View More Reviews
                        </button>
                    </div>
                );
                
              case 'menu':
                  return (
                      <div className="menu-container">
                          {menuItems.map((menuItem) => (
                              <MenuItem
                                  key={menuItem.id}
                                  name={menuItem.name}
                                  price={menuItem.price}
                                  rating={menuItem.rating}
                                  description={menuItem.description}
                                  photoUrl={menuItem.photoUrl}
                              />
                          ))}
                      </div>
                  );
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
                                    rating={review.rating}
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
            <div className="detail-headercontainer">
              <div className="detail-namebox">
                <button className="back-button" onClick={() => navigate(-1)}>
                    <i className="fas fa-arrow-left"></i>
                </button>
                <h1>{restaurant.name}</h1>
              </div>
              <div className="btn-area">
                <button className="like-button" onClick={handleLikeClick}>
                    <i className={`fas fa-heart ${isLiked ? 'liked' : ''}`}></i> {isLiked ? 'Liked' : 'Like'}
                </button>
                
              </div>
            </div>
            <div className="restaurant-summary">
                <div className="detail-items">
                    <div className="detail-item">
                        <i className="fas fa-star detail-icon"></i> {restaurant.rating} / 5
                    </div>
                    <div className="detail-item">
                        <i className="fas fa-dollar-sign detail-icon"></i> {restaurant.price}
                    </div>
                    <div className="detail-item">
                        <i className="fas fa-map-marker-alt detail-icon"></i> {restaurant.distance}
                    </div>
                </div>
                <button className="write-review-button" onClick={handleWriteReviewClick}>
                        <i className="fas fa-pen"></i>
                </button>
            </div>
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
            <div className="tab-content">
                {renderContent()}
            </div>
            <Footer />
        </div>
    );
};

export default RestaurantDetails;
