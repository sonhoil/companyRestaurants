🍽️ Company Restaurants - Backend Service

This project is a backend service for managing cafeteria and restaurant information for companies, allowing users to search, register, and review both corporate cafeterias and general restaurants.

✨ Features

🍱 Cafeteria Management

Register Cafeteria: Add new cafeterias to the system.

Weekly Menu Registration: Cafeterias can register multiple weekly menus, each with breakfast, lunch, and dinner options.

Search Cafeterias: Users can search for cafeterias near their location or by name and location criteria.

Favorite Cafeteria: Users can add cafeterias to their favorites.

Review Menus: Users can add reviews and ratings for specific menus, with the requirement of being within 100 meters of the cafeteria.

Like Menu Items: Users can like specific items from the cafeteria's weekly menu.

🍽️ Restaurant Management

Register Restaurant: Add new restaurants to the system.

Register Restaurant Menu: Restaurants can register their available menu items.

Search Restaurants: Users can search for restaurants by location, name, and other criteria.

Like Restaurant Menu Items: Users can like menu items from the restaurant.

🔍 Combined Search

Search All Restaurants and Cafeterias: Users can search for both restaurants and cafeterias at the same time, with a clear distinction between the two types of establishments.

🛠️ Technologies Used

![Java](https://img.shields.io/badge/Java-%23ED8B00.svg?style=flat-square&logo=openjdk&logoColor=white) ![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=flat-square&logo=spring-boot&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![MyBatis](https://img.shields.io/badge/MyBatis-000000.svg?style=flat-square&logo=MyBatis&logoColor=white) 


📡 API Endpoints

🍱 Cafeteria Endpoints

POST /api/cafeteria/register: Register a new cafeteria.

POST /api/cafeteria/menu/register: Register weekly menus for a cafeteria.

GET /api/cafeteria/search: Search cafeterias based on location and criteria.

POST /api/cafeteria/favorite/add: Add a cafeteria to favorites.

POST /api/cafeteria/menu/review: Add a review for a menu.

POST /api/cafeteria/menu-like/add: Like a specific menu item.

🍽️ Restaurant Endpoints

POST /api/restaurant/register: Register a new restaurant.

POST /api/restaurant/menu/register: Register menu items for a restaurant.

GET /api/restaurant/search: Search restaurants based on location and criteria.

POST /api/restaurant/menu-like/add: Like a specific restaurant menu item.

🔍 Combined Search Endpoint

GET /api/restaurant-cafeteria/search: Search for both restaurants and cafeterias in the user's vicinity.

🔮 Future Enhancements

🔒 User Authentication: Implement user authentication and role-based access control.

📧 Company Email Verification: Add verification of company email for users during registration.

🔗 Social Login: Integrate social login options (e.g., Kakao, Naver).
