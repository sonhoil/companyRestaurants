package com.company.restaurants.admin.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.company.restaurants.review.domain.reviewDTO;
import com.company.restaurants.search.domain.restaurantsDTO;

@Repository
public interface restaurantsAdminMapper {
	
	public List<reviewDTO> restaurantsReviewList(restaurantsDTO restaurantsDTO);
	
	public int reviewWrite(reviewDTO reviewDTO);
	
	public int reviewUpdate(reviewDTO reviewDTO);
	
	public int reviewDelete(reviewDTO reviewDTO);
}
