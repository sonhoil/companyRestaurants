package com.company.restaurants.restaurant.mapper;

import com.company.restaurants.restaurant.domain.RestaurantDTO;
import com.company.restaurants.restaurant.domain.RestaurantMenuDTO;
import com.company.restaurants.restaurant.domain.MenuItemLikeDTO;
import com.company.restaurants.restaurant.domain.MenuDTO;
import com.company.restaurants.restaurant.domain.ReviewDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface RestaurantMapper {
    void insertRestaurant(RestaurantDTO restaurantDTO);

    void insertRestaurantMenu(RestaurantMenuDTO restaurantMenuDTO);

    List<RestaurantDTO> searchRestaurant(@Param("latitude") Double latitude,
                                          @Param("longitude") Double longitude,
                                          @Param("name") String name,
                                          @Param("location") String location);

    void insertRestaurantMenuLike(MenuItemLikeDTO menuItemLikeDTO);

    List<MenuDTO> findMenuByRestaurantId(@Param("restaurantId") Long restaurantId);

    List<ReviewDTO> findReviewsByRestaurantId(@Param("restaurantId") Long restaurantId);
}