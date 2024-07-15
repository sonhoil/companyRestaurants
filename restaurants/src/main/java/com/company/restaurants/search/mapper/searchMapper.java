package com.company.restaurants.search.mapper;

import java.util.List;

import com.company.restaurants.search.domain.categoryInfoDTO;
import com.company.restaurants.search.domain.restaurantsDTO;


public interface searchMapper {

	public List<restaurantsDTO> restaurantsList(restaurantsDTO restaurantsparam);
	public List<categoryInfoDTO> categoryInfo();
}
