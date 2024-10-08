package com.company.restaurants.search.domain;

import lombok.Data;

@Data
public class restaurantsDTO {
	private String restaurantsCode;
	private String name;
	private String categoryCode;
	private String xLocation;
	private String yLocation;
	private String keyword;
	private String address;
	private String roadAddress;
	private String minXLocation;
	private String maxXLocation;
	private String minYLocation;
	private String maxYLocation;
	private String mapx;
	private String mapy;
	private String isRegisted;
}
