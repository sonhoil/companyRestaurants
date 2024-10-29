package com.company.restaurants.restaurant.domain;

import lombok.Data;

@Data
public class MenuItemLikeDTO {
    private Long restaurantId;
    private String menuItem;
    private Long userId;
}