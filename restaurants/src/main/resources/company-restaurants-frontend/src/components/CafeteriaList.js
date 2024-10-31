// src/components/CafeteriaList.js
import React, { useEffect, useState } from 'react';
import api from '../services/api';

const CafeteriaList = () => {
  const [cafeterias, setCafeterias] = useState([]);

  useEffect(() => {
    const fetchCafeterias = async () => {
      try {
        const response = await api.get('/cafeteria/search');
        setCafeterias(response.data);
      } catch (error) {
        console.error('Error fetching cafeterias', error);
      }
    };
    fetchCafeterias();
  }, []);

  return (
    <div>
      <h2>🍱 Cafeterias Near You</h2>
      <ul>
        {cafeterias.map((cafeteria) => (
          <li key={cafeteria.cafeteriaId}>
            {cafeteria.name} - {cafeteria.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CafeteriaList;
