// src/components/Review.js
import React from 'react';
import PropTypes from 'prop-types';

const Review = ({ author, rating, comment, photoUrl }) => {
    return (
        <div className="review-item">
            <div className="review-header">
                <p className="review-author"><strong>{author}</strong></p>
                <div className="review-rating">
                    {Array.from({ length: 5 }, (_, index) => (
                        <i 
                            key={index} 
                            className={`fas fa-star ${index < rating ? 'filled' : 'empty'}`}
                        ></i>
                    ))}
                </div>
            </div>
            <img src={photoUrl} alt={`${author}'s review`} className="review-photo" />
            <p className="review-text">{comment}</p>
        </div>
    );
};

Review.propTypes = {
    author: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
};

export default Review;
