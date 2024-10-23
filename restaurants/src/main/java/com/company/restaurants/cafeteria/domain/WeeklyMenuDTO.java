package com.company.restaurants.cafeteria.domain;

import lombok.Data;

import java.util.List;

@Data
public class WeeklyMenuDTO {
    private Long cafeteriaId;
    private String dayOfWeek;
    private String mealTime;
    private List<String> menuItems;
    private String imageUrl;
}