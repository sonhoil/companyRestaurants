package com.company.restaurants.cafeteria.controller;

import com.company.restaurants.cafeteria.domain.CafeteriaDTO;
import com.company.restaurants.cafeteria.domain.WeeklyMenuDTO;
import com.company.restaurants.cafeteria.domain.FavoriteCafeteriaDTO;
import com.company.restaurants.cafeteria.domain.MenuReviewDTO;
import com.company.restaurants.cafeteria.domain.MenuLikeDTO;
import com.company.restaurants.cafeteria.domain.MenuItemLikeDTO;
import com.company.restaurants.cafeteria.service.CafeteriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cafeteria")
public class CafeteriaController {

    @Autowired
    private CafeteriaService cafeteriaService;

    @PostMapping("/register")
    public ResponseEntity<String> registerCafeteria(@RequestBody CafeteriaDTO cafeteriaDTO) {
        cafeteriaService.registerCafeteria(cafeteriaDTO);
        return ResponseEntity.ok("Cafeteria registered successfully");
    }

    @GetMapping("/search")
    public ResponseEntity<List<CafeteriaDTO>> searchCafeteria(@RequestParam(required = false) Double latitude,
                                                               @RequestParam(required = false) Double longitude,
                                                               @RequestParam(required = false) String name,
                                                               @RequestParam(required = false) String location) {
        List<CafeteriaDTO> cafeterias = cafeteriaService.searchCafeteria(latitude, longitude, name, location);
        return ResponseEntity.ok(cafeterias);
    }

    @PostMapping("/weekly-menu/register")
    public ResponseEntity<String> registerWeeklyMenu(@RequestBody List<WeeklyMenuDTO> weeklyMenuDTOList) {
        cafeteriaService.registerWeeklyMenu(weeklyMenuDTOList);
        return ResponseEntity.ok("Weekly menu registered successfully");
    }

    @GetMapping("/weekly-menu/{cafeteriaId}")
    public ResponseEntity<List<WeeklyMenuDTO>> getWeeklyMenu(@PathVariable Long cafeteriaId) {
        List<WeeklyMenuDTO> weeklyMenu = cafeteriaService.getWeeklyMenu(cafeteriaId);
        return ResponseEntity.ok(weeklyMenu);
    }

    @PostMapping("/favorite")
    public ResponseEntity<String> addFavoriteCafeteria(@RequestBody FavoriteCafeteriaDTO favoriteCafeteriaDTO) {
        cafeteriaService.addFavoriteCafeteria(favoriteCafeteriaDTO);
        return ResponseEntity.ok("Cafeteria added to favorites successfully");
    }

    @GetMapping("/favorites/{userId}") 
    public ResponseEntity<List<CafeteriaDTO>> getFavoriteCafeterias(@PathVariable Long userId) {
        List<CafeteriaDTO> favoriteCafeterias = cafeteriaService.getFavoriteCafeterias(userId);
        return ResponseEntity.ok(favoriteCafeterias);
    }

    @PostMapping("/menu-review/add")
    public ResponseEntity<String> addMenuReview(@RequestBody MenuReviewDTO menuReviewDTO,
                                                 @RequestParam Double userLatitude,
                                                 @RequestParam Double userLongitude) {
        try {
            cafeteriaService.addMenuReview(menuReviewDTO, userLatitude, userLongitude);
            return ResponseEntity.ok("Menu review added successfully");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/menu-reviews/{weeklyMenuId}")
    public ResponseEntity<List<MenuReviewDTO>> getMenuReviews(@PathVariable Long weeklyMenuId) {
        List<MenuReviewDTO> menuReviews = cafeteriaService.getMenuReviews(weeklyMenuId);
        return ResponseEntity.ok(menuReviews);
    }

    @PostMapping("/menu-item-like/add")
    public ResponseEntity<String> addMenuItemLike(@RequestBody MenuItemLikeDTO menuItemLikeDTO) {
        cafeteriaService.addMenuItemLike(menuItemLikeDTO);
        return ResponseEntity.ok("Menu item like added successfully");
    }
}