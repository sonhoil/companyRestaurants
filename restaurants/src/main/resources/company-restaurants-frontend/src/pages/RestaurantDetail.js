// src/components/RestaurantDetails.js
import React, { useState } from 'react';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
const RestaurantDetails = () => {
  const [activeTab, setActiveTab] = useState('info'); // Default tab
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate(-1);
  };
  // Function to render the content based on the selected tab
  const renderContent = () => {
    switch (activeTab) {
      case 'info':
        return <div>Basic information about the restaurant...</div>;
      case 'menu':
        return <div>Menu items list...</div>;
      case 'reviews':
        return <div>User reviews...</div>;
      default:
        return null;
    }
  };

  return (
    <div className="details-container">
      <button className="back-button" onClick={handleBackClick}>
          <i className="fas fa-arrow-left"></i>
      </button>
      <h1>Restaurant Name</h1>
      <div className="restaurant-summary">
        <div className="detail-item">
          <i className="fas fa-star detail-icon"></i> 2 / 5
        </div>
        <div className="detail-item">
          <i className="fas fa-dollar-sign detail-icon"></i> 1 원
        </div>
        <div className="detail-item">
          <i className="fas fa-map-marker-alt detail-icon"></i> 1 km
        </div>
      </div> 
      {/* Tabs */}
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'info' ? 'active' : ''}`}
          onClick={() => setActiveTab('info')}
        >
          Info
        </button>
        <button 
          className={`tab ${activeTab === 'menu' ? 'active' : ''}`}
          onClick={() => setActiveTab('menu')}
        >
          Menu
        </button>
        <button 
          className={`tab ${activeTab === 'reviews' ? 'active' : ''}`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {renderContent()}
      </div>
      <Footer />
    </div>
  );
};

export default RestaurantDetails;
