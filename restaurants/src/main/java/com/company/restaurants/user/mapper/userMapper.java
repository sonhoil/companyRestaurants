package com.company.restaurants.user.mapper;

import java.util.List;
import java.util.Map;

import com.company.restaurants.search.domain.restaurantsDTO;
import com.company.restaurants.user.domain.companyInfoDTO;
import com.company.restaurants.user.domain.userInfoDTO;


public interface userMapper {

	public int checkUser(userInfoDTO userInfoDTO);
	
	public int userRegist(userInfoDTO userInfoDTO);
	
	public List<companyInfoDTO> companyList(String keyWord);
	
	public int companyRegist(companyInfoDTO companyInfoDTO);
}
