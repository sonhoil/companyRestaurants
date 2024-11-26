// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import SearchResultsPage from './pages/SearchResultsPage';
import RestaurantDetails from './pages/RestaurantDetail';
import Favorite from './pages/Favorite';
import UserProfilePage from './pages/UserProfilePage';
import WriteReviewPage from './pages/WriteReviewPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import RegisterCafeteriaPage from './pages/RegisterCafeteriaPage';
import { LikedRestaurantsProvider } from './context/LikedRestaurantsContext';

function App() {
  const isAuthenticated = !!localStorage.getItem('token');

  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <LikedRestaurantsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />}/>
          <Route path="/search-results" element={<SearchResultsPage />} />
          <Route path="/restaurant/:id" element={<RestaurantDetails />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/user-profile" element={
            <PrivateRoute>
              <UserProfilePage />
            </PrivateRoute>
          } />
          <Route path="/write-review" element={
            <PrivateRoute>
              <WriteReviewPage />
            </PrivateRoute>
          } />
          <Route path="/register-cafeteria" element={
            <PrivateRoute>
              <RegisterCafeteriaPage />
            </PrivateRoute>
          } />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/write-review/:restaurantId" element={<WriteReviewPage />} />
          <Route path="/search-results" element={<SearchResultsPage />} />
          {/* 추가적인 경로 설정 가능 */}
        </Routes>
      </Router>
    </LikedRestaurantsProvider>
  );
}

export default App;
