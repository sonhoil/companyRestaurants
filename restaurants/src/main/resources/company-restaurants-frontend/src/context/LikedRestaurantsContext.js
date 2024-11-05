// src/context/LikedRestaurantsContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const LikedRestaurantsContext = createContext();

export const useLikedRestaurants = () => {
    return useContext(LikedRestaurantsContext);
};

export const LikedRestaurantsProvider = ({ children }) => {
    const [likedRestaurants, setLikedRestaurants] = useState([]);

    useEffect(() => {
        fetchLikedRestaurants();
    }, []);

    // 좋아요한 식당 목록을 서버에서 불러오는 함수
    const fetchLikedRestaurants = async () => {
        try {
            const response = await axios.get('/api/liked-restaurants');
            setLikedRestaurants(response.data);
        } catch (error) {
            console.error("Failed to fetch liked restaurants:", error);
        }
    };

    // 좋아요 추가
    const addRestaurant = async (restaurant) => {
        try {
            await axios.post('/api/liked-restaurants', restaurant);
            setLikedRestaurants([...likedRestaurants, restaurant]);
        } catch (error) {
            console.error("Failed to add restaurant:", error);
        }
    };

    // 좋아요 취소
    const removeRestaurant = async (restaurantId) => {
        try {
            await axios.delete(`/api/liked-restaurants/${restaurantId}`);
            setLikedRestaurants(likedRestaurants.filter(r => r.id !== restaurantId));
        } catch (error) {
            console.error("Failed to remove restaurant:", error);
        }
    };

    return (
        <LikedRestaurantsContext.Provider value={{ likedRestaurants, addRestaurant, removeRestaurant }}>
            {children}
        </LikedRestaurantsContext.Provider>
    );
};
