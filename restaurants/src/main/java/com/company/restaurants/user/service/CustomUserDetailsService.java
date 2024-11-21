package com.company.restaurants.user.service;

import com.company.restaurants.user.domain.UserDTO;
import com.company.restaurants.user.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        UserDTO user = userMapper.getUserByEmailAndPassword(email, null);
        if (user == null) {
            throw new UsernameNotFoundException("사용자를 찾을 수 없습니다: " + email);
        }
        return User.builder()
                .username(user.getEmail())
                .password(user.getPassword()) // 패스워드는 인코딩되어야 합니다.
                .roles("USER")
                .build();
    }
} 