package com.company.restaurants.restaurant.domain;

import lombok.Data;

@Data
public class RestaurantDTO {
    private Long restaurantId;
    private String name;
    private String location;
    private String contact;
    private Double latitude;
    private Double longitude;
}