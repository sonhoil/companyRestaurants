import api from './api';

export const fetchUserProfile = () => {
    return api.get('/user-profile');
};

export const fetchReviewCount = () => {
    return api.get('/user-reviews/count');
};

export const verifyEmail = () => {
    return api.post('/user/verify-email');
};
