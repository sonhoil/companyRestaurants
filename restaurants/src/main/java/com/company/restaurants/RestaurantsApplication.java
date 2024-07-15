package com.company.restaurants;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan(basePackages = "com.company.restaurants.*")
public class RestaurantsApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestaurantsApplication.class, args);
	}

}
