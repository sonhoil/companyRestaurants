import React from 'react';
import './Homepage.css';
import CafeteriaList from '../components/CafeteriaList';
import RestaurantList from '../components/RestaurantList';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';

const Homepage = () => {
    return (
      <div className="container">
      <header className="header">
          Company Cafeteria & Restaurants
      </header>

      <SearchBar />

      <div className="card-list">
          <CafeteriaList />
          <RestaurantList />
      </div>

      <Footer />
  </div>
    );
};

export default Homepage;
