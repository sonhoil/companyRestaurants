package com.company.restaurants.search.controller;

import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.company.restaurants.common.api.naverSearchApi;
import com.company.restaurants.search.domain.categoryInfoDTO;
import com.company.restaurants.search.domain.restaurantsDTO;
import com.company.restaurants.search.service.searchService;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/search/*")
public class searchController {
	@Autowired
	private searchService searchService;
	
	@PostMapping("/restaurantsList")
	public ResponseEntity<?> restaurantsList(HttpServletRequest req, Model model, @RequestBody restaurantsDTO restaurantsDTO) throws Exception {
	   // List<restaurantsDTO> restaurantsList = searchService.restaurantsList(restaurantsDTO);
	    String searchData = naverSearchApi.naverRestaurantSearch(restaurantsDTO.getKeyword());
	    
	    ObjectMapper mapper = new ObjectMapper();
        JsonNode rootNode = mapper.readTree(searchData);
        JsonNode itemsNode = rootNode.get("items");

        List<restaurantsDTO> restaurantsList = new ArrayList<>();

        if (itemsNode.isArray()) {
            for (JsonNode itemNode : itemsNode) {
            	restaurantsDTO item = new restaurantsDTO();
            	item.setName(itemNode.get("title").asText().replaceAll("<[^>]*>", ""));
                item.setKeyword(itemNode.get("title").asText().replaceAll("<[^>]*>", ""));
                item.setAddress(itemNode.get("address").asText());
                item.setRoadAddress(itemNode.get("roadAddress").asText());
                item.setMinXLocation(itemNode.get("mapx").asText());
                item.setMaxXLocation(itemNode.get("mapx").asText());
                item.setMinYLocation(itemNode.get("mapy").asText());
                item.setMaxYLocation(itemNode.get("mapy").asText());
                List<restaurantsDTO> checkRestaurants = searchService.restaurantsList(item);
                if(checkRestaurants.size() > 0) {
                	item.setIsRegisted("Y");
                	item.setRestaurantsCode(checkRestaurants.get(0).getRestaurantsCode());
                }else {
                	item.setIsRegisted("N");
                }
                restaurantsList.add(item);
            }
        }
	    
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
	
	@GetMapping("/naverapiSearch/{keyWord}")
	public ResponseEntity<?> naverapiTest(HttpServletRequest req, Model model, @PathVariable String keyWord) throws Exception {
		 // List<restaurantsDTO> restaurantsList = searchService.restaurantsList(restaurantsDTO);
		restaurantsDTO restaurantsDTO = new restaurantsDTO();
		restaurantsDTO.setKeyword(keyWord);
	    String searchData = naverSearchApi.naverRestaurantSearch(restaurantsDTO.getKeyword());
	    
	    ObjectMapper mapper = new ObjectMapper();
        JsonNode rootNode = mapper.readTree(searchData);
        JsonNode itemsNode = rootNode.get("items");

        List<restaurantsDTO> restaurantsList = new ArrayList<>();
      
        if (itemsNode.isArray()) {
            for (JsonNode itemNode : itemsNode) {
            	restaurantsDTO item = new restaurantsDTO();
                item.setName(itemNode.get("title").asText().replaceAll("<[^>]*>", ""));
                item.setKeyword(itemNode.get("title").asText().replaceAll("<[^>]*>", ""));
                item.setAddress(itemNode.get("address").asText());
                item.setRoadAddress(itemNode.get("roadAddress").asText());
                item.setMinXLocation(itemNode.get("mapx").asText());
                item.setMaxXLocation(itemNode.get("mapx").asText());
                item.setMinYLocation(itemNode.get("mapy").asText());
                item.setMaxYLocation(itemNode.get("mapy").asText());
                List<restaurantsDTO> checkRestaurants = searchService.restaurantsList(item);
                if(checkRestaurants.size() > 0) {
                	item.setIsRegisted("Y");
                	item.setRestaurantsCode(checkRestaurants.get(0).getRestaurantsCode());
                }else {
                	item.setIsRegisted("N");
                }
                restaurantsList.add(item);
            }
        }
	    
	    HttpHeaders headers = new HttpHeaders();
	    headers.setContentType(new MediaType("application", "json", Charset.forName("UTF-8")));
	    return new ResponseEntity<>(restaurantsList, headers, HttpStatus.OK);
	}
}
