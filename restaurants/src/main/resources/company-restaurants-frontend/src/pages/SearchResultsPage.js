// src/pages/SearchResultsPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
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
            <SearchBar showBackButton={true} />

            <div className="results-list">
                <ul>
                    {/* Dummy list items for restaurants/cafeterias */}
                    <li className="result-item">
                        <div className="result-title">McDonald's</div>
                        <div className="result-location">123 Main St, Cityville</div>
                    </li>
                    <li className="result-item">
                        <div className="result-title">Kimbap Heaven</div>
                        <div className="result-location">456 Foodie Rd, Cityville</div>
                    </li>
                    <li className="result-item">
                        <div className="result-title">Pizza Paradise</div>
                        <div className="result-location">789 Slice Ave, Cityville</div>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    );
};

export default SearchResultsPage;
