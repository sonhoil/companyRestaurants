package com.company.restaurants.admin.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.company.restaurants.review.domain.reviewDTO;
import com.company.restaurants.search.domain.restaurantsDTO;

@Repository
public interface systemAdminMapper {
	
	public int restaurantsRegist(restaurantsDTO restaurantsDTO);
}
