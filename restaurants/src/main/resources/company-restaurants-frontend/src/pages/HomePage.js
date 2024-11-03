import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';
import CafeteriaList from '../components/CafeteriaList';
import RestaurantList from '../components/RestaurantList';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';

const Homepage = () => {
    const navigate = useNavigate();

    const handleSearchClick = () => {
        navigate('/search');
    };

    return (
        <div className="container">
            <SearchBar showBackButton={false} onSearch={false}/>

            <RestaurantList />

            <Footer />
        </div>
    );
};

export default Homepage;
