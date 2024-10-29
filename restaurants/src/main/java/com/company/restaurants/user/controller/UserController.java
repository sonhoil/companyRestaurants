package com.company.restaurants.user.controller;


import com.company.restaurants.user.domain.UserDTO;
import com.company.restaurants.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody UserDTO userDTO) {
        userService.registerUser(userDTO);
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<UserDTO> loginUser(@RequestParam String email, @RequestParam String password) {
        UserDTO user = userService.loginUser(email, password);
        return ResponseEntity.ok(user);
    }

    @PostMapping("/social-register")
    public ResponseEntity<String> registerUserWithSocial(@RequestParam String socialId,
                                                         @RequestParam String nickname,
                                                         @RequestParam String email) {
        userService.registerUserWithSocial(socialId, nickname, email);
        return ResponseEntity.ok("User registered successfully with social login");
    }
}
