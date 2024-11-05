import React from 'react';

const NoData = ({ iconClass = "fas fa-search", message = "No data found" }) => {
    return (
        <div className="no-data-container">
            <i className={`${iconClass} no-data-icon`}></i>
            <p>{message}</p>
        </div>
    );
};

export default NoData;