// SearchPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SearchBar from '../components/SearchBar';


const SearchPage = () => {
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
           

            <div className="popular-searches">
                <h3>인기 검색어</h3>
                <ul>
                    <li>맥도날드</li>
                    <li>김밥</li>
                    <li>피자</li>
                    <li>떡볶이</li>
                    <li>맘스터치</li>
                </ul>
            </div>

            <div className="recent-searches">
                <h3>최근 검색어</h3>
                <ul>
                    <li>푸라닭</li>
                    <li>참치</li>
                    <li>알곱창</li>
                    <li>피제이</li>
                    <li>이삭토스트</li>
                </ul>
            </div>
        </div>
    );
};

export default SearchPage;
