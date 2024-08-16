package com.company.restaurants.search.domain;

import lombok.Data;

@Data
public class restaurantsDTO {
	private String restaurantsCode;
	private String categoryCode;
	private String xLocation;
	private String yLocation;
	private String keyword;
	
	private String minXLocation;
	private String maxXLocation;
	private String minYLocation;
	private String maxYXLocation;
}
