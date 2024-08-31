package com.company.restaurants.search.controller;

import java.nio.charset.Charset;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.company.restaurants.common.api.naverSearchApi;
import com.company.restaurants.search.domain.categoryInfoDTO;
import com.company.restaurants.search.domain.restaurantsDTO;
import com.company.restaurants.search.service.searchService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/search/*")
public class searchController {
	@Autowired
	private searchService searchService;
	
	@PostMapping("/restaurantsList")
	public ResponseEntity<?> restaurantsList(HttpServletRequest req, Model model, @RequestBody restaurantsDTO restaurantsDTO) throws Exception {
	    List<restaurantsDTO> restaurantsList = searchService.restaurantsList(restaurantsDTO);
	    
	    HttpHeaders headers = new HttpHeaders();
	    headers.setContentType(new MediaType("application", "json", Charset.forName("UTF-8")));
	    return new ResponseEntity<>(restaurantsList, headers, HttpStatus.OK);
	}
	
	@GetMapping("/categoryInfo")
	public ResponseEntity<?> categoryInfo(HttpServletRequest req, Model model) throws Exception {
		List<categoryInfoDTO> categoryInfo = searchService.categoryInfo();
		
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(new MediaType("application", "json", Charset.forName("UTF-8")));
		return new ResponseEntity<>("", headers, HttpStatus.OK);
	}
	
	@GetMapping("/naverapiTest")
	public ResponseEntity<?> naverapiTest(HttpServletRequest req, Model model) throws Exception {
		naverSearchApi.naverRestaurantSearch();
		
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(new MediaType("application", "json", Charset.forName("UTF-8")));
		return new ResponseEntity<>("", headers, HttpStatus.OK);
	}
}
