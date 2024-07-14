package com.company.restaurants.search.controller;

import java.nio.charset.Charset;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.company.restaurants.search.domain.restaurantsDTO;

import jakarta.servlet.http.HttpServletRequest;

public class searchController {
	@GetMapping("/restaurantsList/{categoryCode}/{xLocation}/{yLocation}/{keyword}")
	public ResponseEntity<?> restaurantsList(HttpServletRequest req, Model model, restaurantsDTO restaurantsparam) {
		
		
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(new MediaType("application", "json", Charset.forName("UTF-8")));
		return new ResponseEntity<>("", headers, HttpStatus.OK);
	}
}
