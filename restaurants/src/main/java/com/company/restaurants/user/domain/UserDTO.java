package com.company.restaurants.user.domain;

import lombok.Data;

@Data
public class UserDTO {
    private Long userId;
    private String email;
    private String password;
    private String nickname;
    private String socialId;
}