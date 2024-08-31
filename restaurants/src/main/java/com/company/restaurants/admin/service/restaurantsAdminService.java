package com.company.restaurants.admin.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.company.restaurants.review.domain.reviewDTO;
import com.company.restaurants.review.mapper.reviewMapper;
import com.company.restaurants.search.domain.restaurantsDTO;

@Service
public class restaurantsAdminService {
	@Autowired
	private reviewMapper reviewMapper;
	
	public List<reviewDTO> restaurantsReviewList(restaurantsDTO restaurantsDTO) {
		return this.reviewMapper.restaurantsReviewList(restaurantsDTO);
	}
	
	public int reviewWrite(reviewDTO reviewDTO) {
		return this.reviewMapper.reviewWrite(reviewDTO);
	}
	
	public int reviewUpdate(reviewDTO reviewDTO) {
		return this.reviewMapper.reviewUpdate(reviewDTO);
	}
	
	public int reviewDelete(reviewDTO reviewDTO) {
		return this.reviewMapper.reviewDelete(reviewDTO);
	}
}
