// src/pages/RestaurantDetail.js
import React, { useState, useEffect } from 'react';
import { useLikedRestaurants } from '../context/LikedRestaurantsContext';
import Footer from '../components/Footer';
import Review from '../components/Review';
import MenuItem from '../components/MenuItem';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchRestaurantById, fetchReviewsByRestaurantId, fetchMenuItemsByRestaurantId } from '../services/restaurantService';

const RestaurantDetails = () => {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('info');
    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate();
    const { likedRestaurants, addRestaurant, removeRestaurant } = useLikedRestaurants();
    const [isLiked, setIsLiked] = useState(false);
    const [menuItems, setMenuItems] = useState([]);
    const [restaurant, setRestaurant] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const restaurantData = await fetchRestaurantById(id);
                setRestaurant(restaurantData.data);
                setIsLiked(likedRestaurants.some(r => r.id === restaurantData.data.id));

                if (activeTab === 'info') {
                    const [menuData, reviewData] = await Promise.all([
                        fetchMenuItemsByRestaurantId(id),
                        fetchReviewsByRestaurantId(id)
                    ]);
                    setMenuItems(menuData.data);
                    setReviews(reviewData.data);
                } else if (activeTab === 'reviews') {
                    const reviewData = await fetchReviewsByRestaurantId(id);
                    setReviews(reviewData.data);
                } else if (activeTab === 'menu') {
                    const menuData = await fetchMenuItemsByRestaurantId(id);
                    setMenuItems(menuData.data);
                }
            } catch (err) {
                console.error("데이터를 가져오는 중 오류가 발생했습니다:", err);
                setError('데이터를 불러오는 데 실패했습니다.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [likedRestaurants, id, activeTab]);

    const handleLikeClick = () => {
        if (isLiked) {
            removeRestaurant(restaurant.id);
        } else {
            addRestaurant(restaurant);
        }
        setIsLiked(!isLiked);
    };

    const handleWriteReviewClick = () => {
        navigate('/write-review', { state: { restaurantId: restaurant.id } });
    };

    const handleViewMoreMenusClick = () => setActiveTab('menu');
    const handleViewMoreReviewsClick = () => setActiveTab('reviews');

    const renderContent = () => {
        if (!restaurant) return null;

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

    if (loading) {
        return <div className="loading">로딩 중...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

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
