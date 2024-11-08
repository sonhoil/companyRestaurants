// src/components/WriteReviewPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WriteReviewPage = () => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [photo, setPhoto] = useState(null);
    const navigate = useNavigate();

    const restaurantName = 'Restaurant Name'; // 예시 이름, 실제 데이터와 연결 시 해당 값 대체

    const handleRatingClick = (value) => {
        setRating(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ rating, comment, photo });
        navigate(-1); // 리뷰 제출 후 이전 페이지로 이동
    };

    const handlePhotoChange = (e) => {
        if (e.target.files[0]) {
            setPhoto(URL.createObjectURL(e.target.files[0]));
        }
    };

    return (
        <div className="write-review-container">
            <h2>{restaurantName}</h2>
            <form onSubmit={handleSubmit} className="write-review-form">
                <label>
                    Rating:
                    <div className="star-rating">
                        {[...Array(5)].map((_, index) => (
                            <span key={index}>
                                <i
                                    className={`fas fa-star ${rating >= index + 1 ? 'full' : rating >= index + 0.5 ? 'half' : 'empty'}`}
                                    onClick={() => handleRatingClick(index + 1)}
                                    onMouseEnter={() => handleRatingClick(index + 1)}
                                ></i>
                            </span>
                        ))}
                    </div>
                </label>
                <label>
                    Comment:
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    ></textarea>
                </label>
                <label>
                    Photo:
                    <input type="file" accept="image/*" onChange={handlePhotoChange} />
                    {photo && <img src={photo} alt="Review" className="review-photo-preview" />}
                </label>
                <button type="submit" className="submit-review-button">Submit Review</button>
            </form>
        </div>
    );
};

export default WriteReviewPage;
