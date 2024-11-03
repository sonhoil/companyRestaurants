import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';
import CafeteriaList from '../components/CafeteriaList';
import RestaurantList from '../components/RestaurantList';
import Footer from '../components/Footer';

const Homepage = () => {
    const navigate = useNavigate();

    const handleSearchClick = () => {
        navigate('/search');
    };

    return (
        <div className="container">

            <div className="search-bar-container" onClick={handleSearchClick}>
                <input type="text" placeholder="Search for a cafeteria or restaurant..." readOnly />
                <button>Search</button>
            </div>

            <div className="card-list">
                <CafeteriaList />
                <RestaurantList />
            </div>

            <Footer />
        </div>
    );
};

export default Homepage;
