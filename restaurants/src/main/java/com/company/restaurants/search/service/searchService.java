package com.company.restaurants.search.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.company.restaurants.search.domain.restaurantsDTO;
import com.company.restaurants.search.mapper.searchMapper;

@Service
public class searchService {
	@Autowired
	private searchMapper searchMapper;
	
	public restaurantsDTO restaurantsList(restaurantsDTO restaurantsparam) throws Exception {
		return this.searchMapper.restaurantsList(restaurantsparam);
	}
}
