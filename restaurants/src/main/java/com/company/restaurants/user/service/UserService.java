package com.company.restaurants.user.service;

import com.company.restaurants.user.domain.UserDTO;
import com.company.restaurants.user.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public void registerUser(UserDTO userDTO) {
        userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        userMapper.insertUser(userDTO);
    }

    public UserDTO loginUser(String email, String password) {
        return userMapper.getUserByEmailAndPassword(email, password);
    }

    public void registerUserWithSocial(String socialId, String nickname, String email) {
        UserDTO userDTO = new UserDTO();
        userDTO.setSocialId(socialId);
        userDTO.setNickname(nickname);
        userDTO.setEmail(email);
        userMapper.insertUser(userDTO);
    }
}
