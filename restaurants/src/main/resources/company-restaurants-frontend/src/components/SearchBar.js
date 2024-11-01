// src/components/SearchBar.js
import React, { useState } from 'react';
import api from '../services/api';

const SearchBar = ({ setResults }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await api.get(`/cafeteria/search?name=${query}`);
      setResults(response.data);
    } catch (error) {
      console.error('Error searching', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a cafeteria or restaurant..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
