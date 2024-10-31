// src/pages/HomePage.js
import React from 'react';
import CafeteriaList from '../components/CafeteriaList';
import RestaurantList from '../components/RestaurantList';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Company Restaurants</h1>
      <SearchBar />
      <CafeteriaList />
      <RestaurantList />
    </div>
  );
};

export default HomePage;
