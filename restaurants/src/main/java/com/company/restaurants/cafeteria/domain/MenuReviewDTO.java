package com.company.restaurants.cafeteria.domain;

import lombok.Data;

@Data
public class MenuReviewDTO {
    private Long weeklyMenuId;
    private Long userId;
    private int rating;
    private String comment;
    private String imageUrl;
}