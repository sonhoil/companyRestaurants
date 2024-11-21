package com.company.restaurants;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;

@Configuration
public class WebSecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable() // CSRF 보호 비활성화 (필요에 따라 설정)
            .authorizeHttpRequests()
                .requestMatchers("/", "/search", "/signup", "/login", "/api/user/register", "/api/user/login", "/api/restaurant/search").permitAll() // 로그인 없이 접근 가능한 경로
                .requestMatchers("/api/user/**", "/api/review/**").authenticated() // 인증이 필요한 경로
                .anyRequest().permitAll()
            .and()
            .formLogin()
                .loginPage("/login") // 커스텀 로그인 페이지 경로
                .permitAll()
            .and()
            .logout()
                .permitAll();

        return http.build();
    }
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }
} 