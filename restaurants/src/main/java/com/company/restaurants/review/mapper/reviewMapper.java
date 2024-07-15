package com.company.restaurants.review.mapper;

import java.util.List;
import java.util.Map;

import com.company.restaurants.review.domain.reviewDTO;
import com.company.restaurants.search.domain.restaurantsDTO;


public interface reviewMapper {
	
	public List<reviewDTO> restaurantsReviewList(restaurantsDTO restaurantsDTO);
	
	public int reviewWrite(reviewDTO reviewDTO);
	
	public int reviewUpdate(reviewDTO reviewDTO);
	
	public int reviewDelete(reviewDTO reviewDTO);
}
