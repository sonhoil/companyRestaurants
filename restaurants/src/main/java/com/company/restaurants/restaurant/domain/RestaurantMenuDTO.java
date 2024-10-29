package com.company.restaurants.restaurant.domain;

import lombok.Data;

@Data
public class RestaurantMenuDTO {
    private Long restaurantId;
    private String menuItem;
    private Double price;
}
