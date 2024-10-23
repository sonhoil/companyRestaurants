package com.company.restaurants.cafeteria.domain;

import lombok.Data;

@Data
public class MenuItemLikeDTO {
    private Long weeklyMenuId;
    private String menuItem;
    private Long userId;
}