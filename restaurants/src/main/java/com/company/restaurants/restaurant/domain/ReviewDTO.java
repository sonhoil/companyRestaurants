package com.company.restaurants.restaurant.domain;

import lombok.Data;

@Data
public class ReviewDTO {
    private Long id;
    private Long restaurantId;
    private Long userId;
    private int rating;
    private String comment;
    private String imageUrl;
    private String createdAt;

    // Getters and Setters

    public Long getRestaurantId() {
        return restaurantId;
    }

    public void setRestaurantId(Long restaurantId) {
        this.restaurantId = restaurantId;
    }
} 