package com.company.restaurants.user.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.company.restaurants.review.domain.reviewDTO;
import com.company.restaurants.user.domain.companyInfoDTO;
import com.company.restaurants.user.domain.userInfoDTO;
import com.company.restaurants.user.mapper.userMapper;

@Service
public class userService {
	@Autowired
	private userMapper userMapper;
	
	public int checkUser(userInfoDTO userInfoDTO) {
		return this.userMapper.checkUser(userInfoDTO);
	}
	
	public int userRegist(userInfoDTO userInfoDTO) {
		return this.userMapper.userRegist(userInfoDTO);
	}
	
	public List<companyInfoDTO> companyList(String keyWord) throws Exception {
		return this.userMapper.companyList(keyWord);
	}
}
