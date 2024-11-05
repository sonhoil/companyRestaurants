// src/components/UserProfilePage.js
import React, { useEffect, useState } from 'react';
import { useLikedRestaurants } from '../context/LikedRestaurantsContext'; // 좋아요 데이터
import Footer from '../components/Footer';
import axios from 'axios';

const UserProfilePage = () => {
    const [userData, setUserData] = useState({
        nickname: '',
        email: '',
        isEmailVerified: false,
    });
    const [reviewCount, setReviewCount] = useState(0);
    const { likedRestaurants } = useLikedRestaurants();

    useEffect(() => {
        fetchUserData();
        fetchReviewCount();
    }, []);

    const fetchUserData = async () => {
        try {
            const response = await axios.get('/api/user-profile');
            setUserData(response.data);
        } catch (error) {
            console.error("Failed to fetch user data:", error);
        }
    };

    const fetchReviewCount = async () => {
        try {
            const response = await axios.get('/api/user-reviews/count');
            setReviewCount(response.data.count);
        } catch (error) {
            console.error("Failed to fetch review count:", error);
        }
    };

    const handleVerifyEmail = async () => {
        try {
            await axios.post('/api/user/verify-email');
            alert('Verification email sent! Please check your inbox.');
        } catch (error) {
            console.error("Failed to send verification email:", error);
        }
    };

    return (
        <div className="user-profile-container">
            <h2>User Profile</h2>
            <div className="user-info">
                <p><strong>Nickname:</strong> {userData.nickname}</p>
                <p><strong>Email:</strong> {userData.email}</p>
                {userData.isEmailVerified ? (
                    <p className="verified">Email Verified</p>
                ) : (
                    <button onClick={handleVerifyEmail} className="verify-button">
                        Verify Email
                    </button>
                )}
            </div>
            <div className="user-stats">
                <h3>Usage Statistics</h3>
                <p><strong>Liked Restaurants:</strong> {likedRestaurants.length}</p>
                <p><strong>Reviews:</strong> {reviewCount}</p>
            </div>
            <Footer />
        </div>
    );
};

export default UserProfilePage;
