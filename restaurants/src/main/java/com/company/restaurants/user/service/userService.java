package com.company.restaurants.user.service;

import java.util.List;
import java.util.UUID;

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
		String userCode = UUID.randomUUID().toString();
		userInfoDTO.setUserCode(userCode);
		return this.userMapper.userRegist(userInfoDTO);
	}
	
	public List<companyInfoDTO> companyList(String keyWord) throws Exception {
		return this.userMapper.companyList(keyWord);
	}
	
	public int companyRegist(companyInfoDTO companyInfoDTO) {
		String companyCode = UUID.randomUUID().toString();
	    companyInfoDTO.setCompanyCode(companyCode);
		return this.userMapper.companyRegist(companyInfoDTO);
	}
}
