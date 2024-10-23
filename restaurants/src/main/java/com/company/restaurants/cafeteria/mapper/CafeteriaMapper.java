package com.company.restaurants.cafeteria.mapper;

import com.company.restaurants.cafeteria.domain.CafeteriaDTO;
import com.company.restaurants.cafeteria.domain.WeeklyMenuDTO;
import com.company.restaurants.cafeteria.domain.FavoriteCafeteriaDTO;
import com.company.restaurants.cafeteria.domain.MenuReviewDTO;
import com.company.restaurants.cafeteria.domain.MenuLikeDTO;
import com.company.restaurants.cafeteria.domain.MenuItemLikeDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface CafeteriaMapper {
    void insertCafeteria(CafeteriaDTO cafeteriaDTO);

    List<CafeteriaDTO> searchCafeteria(@Param("latitude") Double latitude,
                                        @Param("longitude") Double longitude,
                                        @Param("name") String name,
                                        @Param("location") String location,
                                        @Param("mealTime") String mealTime);

    List<CafeteriaDTO> searchAllCafeteriasOrderedByDistance(@Param("latitude") Double latitude,
                                                            @Param("longitude") Double longitude);

    void insertWeeklyMenu(WeeklyMenuDTO weeklyMenuDTO);

    List<WeeklyMenuDTO> getWeeklyMenu(@Param("cafeteriaId") Long cafeteriaId);

    void insertFavoriteCafeteria(FavoriteCafeteriaDTO favoriteCafeteriaDTO);

    List<CafeteriaDTO> getFavoriteCafeterias(@Param("userId") Long userId);

    void insertMenuReview(MenuReviewDTO menuReviewDTO);

    List<MenuReviewDTO> getMenuReviews(@Param("weeklyMenuId") Long weeklyMenuId);

    CafeteriaDTO getCafeteriaByWeeklyMenuId(@Param("weeklyMenuId") Long weeklyMenuId);

    void insertMenuItemLike(MenuItemLikeDTO menuItemLikeDTO);
}