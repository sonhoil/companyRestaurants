package com.company.restaurants.restaurant.domain;

import lombok.Data;

@Data
public class ReviewDTO {
    private Long id;
    private String author;
    private int rating;
    private String comment;
    private String photoUrl;

    // Getters and Setters
} 