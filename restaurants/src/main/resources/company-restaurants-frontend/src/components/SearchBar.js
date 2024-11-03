// src/components/SearchBar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SearchBar = ({ onSearch, showBackButton }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleSearchClick = () => {
    navigate('/search');
  };

  return (
    <div
      className="search-bar-container"
      {...(!onSearch && { onClick: handleSearchClick })}
    >
      {showBackButton && (
        <button className="back-button" onClick={handleBackClick}>
          <i className="fas fa-arrow-left"></i>
        </button>
      )}
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a cafeteria or restaurant..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
