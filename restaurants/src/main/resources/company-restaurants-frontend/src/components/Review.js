// src/components/Review.js
import React from 'react';
import PropTypes from 'prop-types';

const Review = ({ author, comment, photoUrl }) => {
    return (
        <div className="review-item">
            <img src={photoUrl} alt={`${author}'s review`} className="review-photo" />
            <div className="review-content">
                <p className="review-author"><strong>{author}</strong></p>
                <p className="review-text">{comment}</p>
            </div>
        </div>
    );
};

Review.propTypes = {
    author: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
};

export default Review;
