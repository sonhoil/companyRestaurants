import api from './api';

export const registerCafeteria = (cafeteriaData) => {
    return api.post('/cafeteria/register', cafeteriaData);
};

export const registerWeeklyMenu = (menuData) => {
    return api.post('/cafeteria/menu/register', menuData);
};

// 기타 구내식당 관련 API 호출 함수 추가
