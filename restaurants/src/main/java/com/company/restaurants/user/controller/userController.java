package com.company.restaurants.user.controller;

import java.nio.charset.Charset;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.company.restaurants.user.domain.companyInfoDTO;
import com.company.restaurants.user.domain.userInfoDTO;
import com.company.restaurants.user.service.userService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/user/*")
public class userController {
	@Autowired
	private userService userService;
	
	@PostMapping("/checkUser")
	public ResponseEntity<?> checkUser(HttpServletRequest req, Model model,@PathVariable userInfoDTO userInfoDTO) {
		
		int checkUser = userService.checkUser(userInfoDTO);
		
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(new MediaType("application", "json", Charset.forName("UTF-8")));
		return new ResponseEntity<>("", headers, HttpStatus.OK);
	}
	
	@PutMapping("/userRegist")
	public ResponseEntity<?> userRegist(HttpServletRequest req, Model model,@PathVariable userInfoDTO userInfoDTO) {
		int userRegist = userService.userRegist(userInfoDTO);
		
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(new MediaType("application", "json", Charset.forName("UTF-8")));
		return new ResponseEntity<>("", headers, HttpStatus.OK);
	}
	
	@GetMapping("/companyList/{keyWord}")
	public ResponseEntity<?> companyList(HttpServletRequest req, Model model, @PathVariable String keyWord) throws Exception {
		List<companyInfoDTO> companyList = userService.companyList(keyWord);
		
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(new MediaType("application", "json", Charset.forName("UTF-8")));
		return new ResponseEntity<>("", headers, HttpStatus.OK);
	}
	
	@PutMapping("/companyRegist")
	public ResponseEntity<?> companyRegist(HttpServletRequest req, Model model,@PathVariable companyInfoDTO companyInfoDTO) {
		
		int companyRegist = userService.companyRegist(companyInfoDTO);
		
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(new MediaType("application", "json", Charset.forName("UTF-8")));
		return new ResponseEntity<>("", headers, HttpStatus.OK);
	}
}
