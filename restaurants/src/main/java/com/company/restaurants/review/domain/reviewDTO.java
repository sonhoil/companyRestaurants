package com.company.restaurants.review.domain;

import com.company.restaurants.search.domain.restaurantsDTO;

import lombok.Data;

@Data
public class reviewDTO extends restaurantsDTO{
	private String reviewCode;
	private String content;
	private String rate;
}
