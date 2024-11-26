// src/components/WriteReviewPage.js
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const WriteReviewPage = () => {
    const { restaurantId } = useParams();
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [photo, setPhoto] = useState(null);
    const navigate = useNavigate();

    const handleRatingClick = (value) => {
        setRating(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('userId', /* 현재 로그인된 사용자 ID */);
            formData.append('rating', rating);
            formData.append('comment', comment);
            if (photo) {
                formData.append('imageUrl', photo);
            }

            await axios.post(`/api/restaurant/${restaurantId}/reviews`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            alert('리뷰가 성공적으로 등록되었습니다.');
            navigate(-1);
        } catch (error) {
            console.error(error);
            alert('리뷰 등록에 실패했습니다.');
        }
    };

    const handlePhotoChange = (e) => {
        if (e.target.files[0]) {
            setPhoto(e.target.files[0]);
        }
    };

    return (
        <div className="write-review-container">
            <h2>리뷰 작성하기</h2>
            <form onSubmit={handleSubmit} className="write-review-form">
                <label>
                    평점:
                    <div className="star-rating">
                        {[...Array(5)].map((_, index) => (
                            <span key={index}>
                                <i
                                    className={`fas fa-star ${rating >= index + 1 ? 'full' : 'empty'}`}
                                    onClick={() => handleRatingClick(index + 1)}
                                ></i>
                            </span>
                        ))}
                    </div>
                </label>
                <label>
                    댓글:
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    ></textarea>
                </label>
                <label>
                    사진 업로드:
                    <input type="file" accept="image/*" onChange={handlePhotoChange} />
                    {photo && <img src={URL.createObjectURL(photo)} alt="리뷰 사진" className="review-photo-preview" />}
                </label>
                <button type="submit" className="submit-review-button">리뷰 제출</button>
            </form>
        </div>
    );
};

export default WriteReviewPage;
