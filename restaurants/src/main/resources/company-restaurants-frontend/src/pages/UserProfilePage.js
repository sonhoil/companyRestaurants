// src/components/UserProfilePage.js
import React, { useEffect, useState } from 'react';
import { useLikedRestaurants } from '../context/LikedRestaurantsContext';
import Footer from '../components/Footer';
import { fetchUserProfile, fetchReviewCount, verifyEmail } from '../services/userService';

const UserProfilePage = () => {
    const [userData, setUserData] = useState({
        nickname: '',
        email: '',
        isEmailVerified: false,
    });
    const [reviewCount, setReviewCount] = useState(0);
    const { likedRestaurants } = useLikedRestaurants();

    useEffect(() => {
        loadUserData();
        loadReviewCount();
    }, []);

    const loadUserData = async () => {
        try {
            const response = await fetchUserProfile();
            setUserData(response.data);
        } catch (error) {
            console.error("사용자 데이터를 가져오는 데 실패했습니다:", error);
        }
    };

    const loadReviewCount = async () => {
        try {
            const response = await fetchReviewCount();
            setReviewCount(response.data.count);
        } catch (error) {
            console.error("리뷰 수를 가져오는 데 실패했습니다:", error);
        }
    };

    const handleVerifyEmail = async () => {
        try {
            await verifyEmail();
            alert('인증 이메일이 전송되었습니다! 받은 편지함을 확인해주세요.');
        } catch (error) {
            console.error("이메일 인증을 전송하는 데 실패했습니다:", error);
        }
    };

    return (
        <div className="user-profile-container">
            <h2>사용자 프로필</h2>
            <div className="user-info">
                <p><strong>닉네임:</strong> {userData.nickname}</p>
                <p><strong>이메일:</strong> {userData.email}</p>
                {userData.isEmailVerified ? (
                    <p className="verified">이메일 인증 완료</p>
                ) : (
                    <button onClick={handleVerifyEmail} className="verify-button">
                        이메일 인증
                    </button>
                )}
            </div>
            <div className="user-stats">
                <h3>사용 통계</h3>
                <p><strong>좋아요한 식당:</strong> {likedRestaurants.length}</p>
                <p><strong>리뷰:</strong> {reviewCount}</p>
            </div>
            <Footer />
        </div>
    );
};

export default UserProfilePage;
