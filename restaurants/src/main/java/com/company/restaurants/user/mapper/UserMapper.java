package com.company.restaurants.user.mapper;

import com.company.restaurants.user.domain.UserDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UserMapper {
    void insertUser(UserDTO userDTO);

    UserDTO getUserByEmailAndPassword(@Param("email") String email, @Param("password") String password);
}