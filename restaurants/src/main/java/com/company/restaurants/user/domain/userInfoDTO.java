package com.company.restaurants.user.domain;

import lombok.Data;

@Data
public class userInfoDTO {
	private String restaurantsCode;
	private String categoryCode;
	private String xLocation;
	private String yLocation;
	private String keyword;

}
