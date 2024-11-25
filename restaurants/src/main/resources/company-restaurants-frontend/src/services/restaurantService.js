import api from './api';

export const fetchLikedRestaurants = () => {
    return api.get('/liked-restaurants');
};

export const addLikedRestaurant = (restaurant) => {
    return api.post('/liked-restaurants', restaurant);
};

export const removeLikedRestaurant = (restaurantId) => {
    return api.delete(`/liked-restaurants/${restaurantId}`);
};

// 식당 상세 정보 가져오기
export const fetchRestaurantById = (id) => {
    return api.get(`/restaurants/${id}`);
};

// 식당의 리뷰 가져오기
export const fetchReviewsByRestaurantId = (id) => {
    return api.get(`/restaurants/${id}/reviews`);
};

// 식당의 메뉴 항목 가져오기
export const fetchMenuItemsByRestaurantId = (id) => {
    return api.get(`/restaurants/${id}/menus`);
};

// 필요한 경우 추가적인 API 호출 함수도 여기에 추가
