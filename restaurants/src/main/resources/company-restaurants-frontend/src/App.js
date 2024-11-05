// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import SearchResultsPage from './pages/SearchResultsPage';
import RestaurantDetails from './pages/RestaurantDetail';
import Favorite from './pages/Favorite';
import UserProfilePage from './pages/UserProfilePage';
import { LikedRestaurantsProvider } from './context/LikedRestaurantsContext';
function App() {
  return (
    <LikedRestaurantsProvider>    
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />}/>
        <Route path="/search-results" element={<SearchResultsPage />} />
        <Route path="/restaurant/:id" element={<RestaurantDetails />} />
        <Route path="/Favorite" element={<Favorite />} />
        <Route path="/UserProfilePage" element={<UserProfilePage />} />
        {/* 추가적인 경로 설정 가능 */}
      </Routes>
    </Router>
    </LikedRestaurantsProvider>

  );
}

export default App;
