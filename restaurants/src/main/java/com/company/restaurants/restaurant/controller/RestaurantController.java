package com.company.restaurants.restaurant.controller;

import com.company.restaurants.restaurant.domain.RestaurantDTO;
import com.company.restaurants.restaurant.domain.RestaurantMenuDTO;
import com.company.restaurants.restaurant.domain.ReviewDTO;
import com.company.restaurants.restaurant.domain.MenuDTO;
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

    @GetMapping("/{id}/menu")
    public ResponseEntity<List<MenuDTO>> getRestaurantMenu(@PathVariable Long id) {
        List<MenuDTO> menuItems = restaurantService.getRestaurantMenu(id);
        return ResponseEntity.ok(menuItems);
    }

    @GetMapping("/{id}/reviews")
    public ResponseEntity<List<ReviewDTO>> getRestaurantReviews(@PathVariable Long id) {
        List<ReviewDTO> reviews = restaurantService.getRestaurantReviews(id);
        return ResponseEntity.ok(reviews);
    }

    @PostMapping("/{restaurantId}/reviews")
    public ResponseEntity<String> addRestaurantReview(@PathVariable Long restaurantId,
                                                     @RequestBody ReviewDTO reviewDTO) {
        try {
            restaurantService.addRestaurantReview(restaurantId, reviewDTO);
            return ResponseEntity.ok("리뷰가 성공적으로 추가되었습니다.");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}