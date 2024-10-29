package com.company.restaurants.cafeteria.service;

import com.company.restaurants.cafeteria.domain.CafeteriaDTO;
import com.company.restaurants.cafeteria.domain.WeeklyMenuDTO;
import com.company.restaurants.cafeteria.domain.FavoriteCafeteriaDTO;
import com.company.restaurants.cafeteria.domain.MenuReviewDTO;
import com.company.restaurants.cafeteria.domain.MenuItemLikeDTO;
import com.company.restaurants.cafeteria.mapper.CafeteriaMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalTime;
import java.util.List;

@Service
public class CafeteriaService {

    @Autowired
    private CafeteriaMapper cafeteriaMapper;

    public void registerCafeteria(CafeteriaDTO cafeteriaDTO) {
        cafeteriaMapper.insertCafeteria(cafeteriaDTO);
    }

    public List<CafeteriaDTO> searchCafeteria(Double latitude, Double longitude, String name, String location) {
        String mealTime = getCurrentMealTime();
        List<CafeteriaDTO> cafeterias = cafeteriaMapper.searchCafeteria(latitude, longitude, name, location, mealTime);
        if (cafeterias.isEmpty() && latitude != null && longitude != null) {
            return cafeteriaMapper.searchAllCafeteriasOrderedByDistance(latitude, longitude);
        }
        return cafeterias;
    }

    private String getCurrentMealTime() {
        LocalTime now = LocalTime.now();
        if (now.isBefore(LocalTime.of(9, 30))) {
            return "Breakfast";
        } else if (now.isBefore(LocalTime.of(15, 0))) {
            return "Lunch";
        } else {
            return "Dinner";
        }
    }

    public void registerWeeklyMenu(List<WeeklyMenuDTO> weeklyMenuDTOList) {
        for (WeeklyMenuDTO weeklyMenuDTO : weeklyMenuDTOList) {
            cafeteriaMapper.insertWeeklyMenu(weeklyMenuDTO);
        }
    }

    public List<WeeklyMenuDTO> getWeeklyMenu(Long cafeteriaId) {
        return cafeteriaMapper.getWeeklyMenu(cafeteriaId);
    }

    public void addFavoriteCafeteria(FavoriteCafeteriaDTO favoriteCafeteriaDTO) {
        cafeteriaMapper.insertFavoriteCafeteria(favoriteCafeteriaDTO);
    }

    public List<CafeteriaDTO> getFavoriteCafeterias(Long userId) {
        return cafeteriaMapper.getFavoriteCafeterias(userId);
    }

    public void addMenuReview(MenuReviewDTO menuReviewDTO, Double userLatitude, Double userLongitude) {
        CafeteriaDTO cafeteria = cafeteriaMapper.getCafeteriaByWeeklyMenuId(menuReviewDTO.getWeeklyMenuId());
        double distance = calculateDistance(userLatitude, userLongitude, cafeteria.getLatitude(), cafeteria.getLongitude());
        if (distance <= 0.1 && menuReviewDTO.getImageUrl() != null && !menuReviewDTO.getImageUrl().isEmpty()) {
            cafeteriaMapper.insertMenuReview(menuReviewDTO);
        } else {
            throw new IllegalArgumentException("User must be within 100 meters of the cafeteria and provide an image to leave a review.");
        }
    }

    public List<MenuReviewDTO> getMenuReviews(Long weeklyMenuId) {
        return cafeteriaMapper.getMenuReviews(weeklyMenuId);
    }

    public void addMenuItemLike(MenuItemLikeDTO menuItemLikeDTO) {
        cafeteriaMapper.insertMenuItemLike(menuItemLikeDTO);
    }

    private double calculateDistance(double lat1, double lon1, double lat2, double lon2) {
        final int R = 6371; // Radius of the earth in km
        double latDistance = Math.toRadians(lat2 - lat1);
        double lonDistance = Math.toRadians(lon2 - lon1);
        double a = Math.sin(latDistance / 2) * Math.sin(latDistance / 2)
                + Math.cos(Math.toRadians(lat1)) * Math.cos(Math.toRadians(lat2))
                * Math.sin(lonDistance / 2) * Math.sin(lonDistance / 2);
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // convert to kilometers
    }
}