package com.company.restaurants.cafeteria.domain;

import lombok.Data;

@Data
public class CafeteriaDTO {
    private Long cafeteriaId;
    private String name;
    private String location;
    private String operatingHours;
    private String menu;
    private String contact;
    private Double latitude;
    private Double longitude;
}