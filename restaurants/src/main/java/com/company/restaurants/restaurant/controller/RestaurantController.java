package com.company.restaurants.restaurant.controller;

import com.company.restaurants.restaurant.domain.RestaurantDTO;
import com.company.restaurants.restaurant.domain.RestaurantMenuDTO;
import com.company.restaurants.restaurant.domain.MenuItemLikeDTO;
import com.company.restaurants.restaurant.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/restaurant")
public class RestaurantController {

    @Autowired
    private RestaurantService restaurantService;

    @PostMapping("/register")
    public ResponseEntity<String> registerRestaurant(@RequestBody RestaurantDTO restaurantDTO) {
        restaurantService.registerRestaurant(restaurantDTO);
        return ResponseEntity.ok("Restaurant registered successfully");
    }

    @PostMapping("/menu/register")
    public ResponseEntity<String> registerRestaurantMenu(@RequestBody RestaurantMenuDTO restaurantMenuDTO) {
        restaurantService.registerRestaurantMenu(restaurantMenuDTO);
        return ResponseEntity.ok("Restaurant menu registered successfully");
    }

    @GetMapping("/search")
    public ResponseEntity<List<RestaurantDTO>> searchRestaurant(@RequestParam(required = false) Double latitude,
                                                                 @RequestParam(required = false) Double longitude,
                                                                 @RequestParam(required = false) String name,
                                                                 @RequestParam(required = false) String location) {
        List<RestaurantDTO> restaurants = restaurantService.searchRestaurant(latitude, longitude, name, location);
        return ResponseEntity.ok(restaurants);
    }

    @PostMapping("/menu-like/add")
    public ResponseEntity<String> addRestaurantMenuLike(@RequestBody MenuItemLikeDTO menuItemLikeDTO) {
        restaurantService.addRestaurantMenuLike(menuItemLikeDTO);
        return ResponseEntity.ok("Restaurant menu like added successfully");
    }
}