package com.company.restaurants.admin.controller;

import java.nio.charset.Charset;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.company.restaurants.admin.service.restaurantsAdminService;
import com.company.restaurants.review.domain.reviewDTO;
import com.company.restaurants.review.service.reviewService;
import com.company.restaurants.search.domain.restaurantsDTO;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/restrantsadmin/*")
public class restaurantsAdminController {
	
	@Autowired
	private restaurantsAdminService adminService;
	
	@PostMapping("/restaurantsRegist")
	public ResponseEntity<?> restaurantsReviewList(HttpServletRequest req, Model model, @PathVariable restaurantsDTO restaurantsDTO) {
		//List<reviewDTO> reviewList = reviewService.restaurantsReviewList(restaurantsDTO);
		
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(new MediaType("application", "json", Charset.forName("UTF-8")));
		return new ResponseEntity<>("", headers, HttpStatus.OK);
	}

	
}
