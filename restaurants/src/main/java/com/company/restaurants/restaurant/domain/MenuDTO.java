package com.company.restaurants.restaurant.domain;
import lombok.Data;

@Data

public class MenuDTO {
    private Long id;
    private String name;
    private String description;
    private Double price;
    private String photoUrl;

    // Getters and Setters
} 