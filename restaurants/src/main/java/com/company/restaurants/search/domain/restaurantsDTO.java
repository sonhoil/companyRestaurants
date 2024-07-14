package com.company.restaurants.search.domain;

import lombok.Data;

@Data
public class restaurantsDTO {
	private String categoryCode;
	private String xLocation;
	private String yLocation;
	private String keyword;
}
