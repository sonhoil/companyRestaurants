package com.company.restaurants.restaurant.service;

import com.company.restaurants.restaurant.domain.RestaurantDTO;
import com.company.restaurants.restaurant.domain.RestaurantMenuDTO;
import com.company.restaurants.restaurant.domain.ReviewDTO;
import com.company.restaurants.cafeteria.domain.CafeteriaDTO;
import com.company.restaurants.cafeteria.mapper.CafeteriaMapper;
import com.company.restaurants.cafeteria.service.CafeteriaService;
import com.company.restaurants.restaurant.domain.MenuDTO;
import com.company.restaurants.restaurant.domain.MenuItemLikeDTO;
import com.company.restaurants.restaurant.mapper.RestaurantMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RestaurantService {

    @Autowired
    private RestaurantMapper restaurantMapper;
    @Autowired
    private CafeteriaService cafeteriaService;
    

    public void registerRestaurant(RestaurantDTO restaurantDTO) {
        restaurantMapper.insertRestaurant(restaurantDTO);
    }

    public void registerRestaurantMenu(RestaurantMenuDTO restaurantMenuDTO) {
        restaurantMapper.insertRestaurantMenu(restaurantMenuDTO);
    }

    public List<RestaurantDTO> searchRestaurant(Double latitude, Double longitude, String name, String location) {
        return restaurantMapper.searchRestaurant(latitude, longitude, name, location);
    }

    public void addRestaurantMenuLike(MenuItemLikeDTO menuItemLikeDTO) {
        restaurantMapper.insertRestaurantMenuLike(menuItemLikeDTO);
    }
    
    public List<Object> searchAllRestaurantsAndCafeterias(Double latitude, Double longitude, String name, String location) {
        List<CafeteriaDTO> cafeterias = cafeteriaService.searchCafeteria(latitude, longitude, name, location);
        List<RestaurantDTO> restaurants = restaurantMapper.searchRestaurant(latitude, longitude, name, location);
        List<Object> allPlaces = new ArrayList<>();
        allPlaces.addAll(cafeterias);
        allPlaces.addAll(restaurants);
        return allPlaces;
    }

    public List<MenuDTO> getRestaurantMenu(Long restaurantId) {
        return restaurantMapper.findMenuByRestaurantId(restaurantId);
    }

    public List<ReviewDTO> getRestaurantReviews(Long restaurantId) {
        return restaurantMapper.findReviewsByRestaurantId(restaurantId);
    }
}