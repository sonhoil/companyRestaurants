package com.company.restaurants.admin.service;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.company.restaurants.admin.mapper.systemAdminMapper;
import com.company.restaurants.search.domain.restaurantsDTO;

@Service
public class systemAdminService {
	@Autowired
	private systemAdminMapper systemAdminMapper;
	
	public int restaurantsRegist(restaurantsDTO restaurantsDTO) {
		String restaurantsCode = UUID.randomUUID().toString();
		restaurantsDTO.setRestaurantsCode(restaurantsCode);
		return this.systemAdminMapper.restaurantsRegist(restaurantsDTO);
	}
}
