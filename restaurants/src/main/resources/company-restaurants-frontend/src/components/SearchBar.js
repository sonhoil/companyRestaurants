// src/components/SearchBar.js
import React, { useState } from 'react';
import api from '../services/api';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
      setQuery(e.target.value);
  };

  const handleSearch = () => {
      if (onSearch) {
          onSearch(query);
      }
  };

  return (
      <div className="search-bar-container">
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