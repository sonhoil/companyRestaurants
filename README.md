🍽️ Company Restaurants - Backend Service

This project is a backend service for managing cafeteria and restaurant information for companies, allowing users to search, register, and review both corporate cafeterias and general restaurants.

이 프로젝트는 회사 내 구내식당과 일반 식당 정보를 관리하기 위한 백엔드 서비스입니다. 사용자는 구내식당과 일반 식당을 검색, 등록, 리뷰할 수 있습니다.

✨ Features (기능)

🍱 Cafeteria Management (구내식당 관리)

Register Cafeteria (구내식당 등록): 시스템에 새로운 구내식당을 추가합니다.

Weekly Menu Registration (주간 메뉴 등록): 구내식당은 아침, 점심, 저녁 옵션이 포함된 여러 주간 메뉴를 등록할 수 있습니다.

Search Cafeterias (구내식당 검색): 사용자는 위치 또는 이름과 위치 기준으로 가까운 구내식당을 검색할 수 있습니다.

Favorite Cafeteria (즐겨찾기 추가): 사용자는 구내식당을 즐겨찾기에 추가할 수 있습니다.

Review Menus (메뉴 리뷰): 사용자는 특정 메뉴에 대한 리뷰와 평점을 남길 수 있으며, 구내식당에서 100미터 이내에 있어야 합니다.

Like Menu Items (메뉴 좋아요): 사용자는 구내식당의 주간 메뉴에서 특정 항목에 좋아요를 누를 수 있습니다.

🍽️ Restaurant Management (일반 식당 관리)

Register Restaurant (일반 식당 등록): 시스템에 새로운 일반 식당을 추가합니다.

Register Restaurant Menu (식당 메뉴 등록): 일반 식당은 제공하는 메뉴 항목을 등록할 수 있습니다.

Search Restaurants (일반 식당 검색): 사용자는 위치, 이름 등의 기준으로 식당을 검색할 수 있습니다.

Like Restaurant Menu Items (식당 메뉴 좋아요): 사용자는 일반 식당의 메뉴 항목에 좋아요를 누를 수 있습니다.

🔍 Combined Search (통합 검색)

Search All Restaurants and Cafeterias (모든 식당 및 구내식당 검색): 사용자는 일반 식당과 구내식당을 동시에 검색할 수 있으며, 두 종류의 시설을 명확히 구분하여 표시합니다.

🛠️ Technologies Used (사용된 기술 스택)

![Java](https://img.shields.io/badge/Java-%23ED8B00.svg?style=flat-square&logo=openjdk&logoColor=white) ![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=flat-square&logo=spring-boot&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![MyBatis](https://img.shields.io/badge/MyBatis-000000.svg?style=flat-square&logo=MyBatis&logoColor=white) 


📡 API Endpoints (API 엔드포인트)

🍱 Cafeteria Endpoints (구내식당 엔드포인트)

POST /api/cafeteria/register: Register a new cafeteria (새로운 구내식당 등록).

POST /api/cafeteria/menu/register: Register weekly menus for a cafeteria (구내식당 주간 메뉴 등록).

GET /api/cafeteria/search: Search cafeterias based on location and criteria (위치와 조건에 따라 구내식당 검색).

POST /api/cafeteria/favorite/add: Add a cafeteria to favorites (구내식당 즐겨찾기 추가).

POST /api/cafeteria/menu/review: Add a review for a menu (메뉴 리뷰 추가).

POST /api/cafeteria/menu-like/add: Like a specific menu item (특정 메뉴 항목 좋아요).

🍽️ Restaurant Endpoints (일반 식당 엔드포인트)

POST /api/restaurant/register: Register a new restaurant (새로운 일반 식당 등록).

POST /api/restaurant/menu/register: Register menu items for a restaurant (일반 식당 메뉴 항목 등록).

GET /api/restaurant/search: Search restaurants based on location and criteria (위치와 조건에 따라 일반 식당 검색).

POST /api/restaurant/menu-like/add: Like a specific restaurant menu item (특정 일반 식당 메뉴 항목 좋아요).

🔍 Combined Search Endpoint (통합 검색 엔드포인트)

GET /api/restaurant-cafeteria/search: Search for both restaurants and cafeterias in the user's vicinity (사용자 근처의 모든 일반 식당 및 구내식당 검색).

🔮 Future Enhancements (향후 개선예정 사항)

🔒 User Authentication (사용자 인증): 사용자 인증 및 역할 기반 접근 제어를 구현합니다.

📧 Company Email Verification (회사 이메일 인증): 사용자 등록 시 회사 이메일 인증 기능을 추가합니다.

🔗 Social Login (소셜 로그인): 소셜 로그인 옵션(예: 카카오, 네이버)을 통합합니다.
