// src/pages/SearchResultsPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import RestaurantList from '../components/RestaurantList';
import Footer from '../components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SearchResultsPage = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    
    const handleBackClick = () => {
        navigate(-1);
    };

    const handleSearchInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Implement the search functionality
    };

    return (
        <div className="search-page-container">
            <SearchBar showBackButton={true} onSearch={false}/>

            <RestaurantList />
            <Footer />
        </div>
    );
};

export default SearchResultsPage;
