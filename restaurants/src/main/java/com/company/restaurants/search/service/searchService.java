package com.company.restaurants.search.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.company.restaurants.search.domain.categoryInfoDTO;
import com.company.restaurants.search.domain.restaurantsDTO;
import com.company.restaurants.search.mapper.searchMapper;
import com.company.restaurants.user.domain.companyInfoDTO;

@Service
public class searchService {
	@Autowired
	private searchMapper searchMapper;
	
	public List<restaurantsDTO> restaurantsList(restaurantsDTO restaurantsparam) throws Exception {
		return this.searchMapper.restaurantsList(restaurantsparam);
	}
	
	public List<categoryInfoDTO> categoryInfo() throws Exception {
		return this.searchMapper.categoryInfo();
	}
	
	public int restaurantsRegist(restaurantsDTO restaurantsDTO) {
		String restaurantsCode = UUID.randomUUID().toString();
		restaurantsDTO.setRestaurantsCode(restaurantsCode);
		return this.searchMapper.restaurantsRegist(restaurantsDTO);
	}
}
