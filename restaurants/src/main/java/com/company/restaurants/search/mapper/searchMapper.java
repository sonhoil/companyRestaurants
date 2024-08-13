package com.company.restaurants.search.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.company.restaurants.search.domain.categoryInfoDTO;
import com.company.restaurants.search.domain.restaurantsDTO;

@Mapper
public interface searchMapper {

	public List<restaurantsDTO> restaurantsList(restaurantsDTO restaurantsparam);
	public List<categoryInfoDTO> categoryInfo();
}
