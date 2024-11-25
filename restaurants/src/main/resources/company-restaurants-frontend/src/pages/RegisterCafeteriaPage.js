import React, { useState } from 'react';
import { registerCafeteria } from '../services/cafeteriaService';

const RegisterCafeteriaPage = () => {
    const [cafeteria, setCafeteria] = useState({
        name: '',
        location: '',
        // 기타 필요한 필드
    });

    const handleChange = (e) => {
        setCafeteria({
            ...cafeteria,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerCafeteria(cafeteria);
            alert('구내식당이 성공적으로 등록되었습니다.');
            // 폼 초기화 또는 다른 동작 수행
        } catch (error) {
            console.error("구내식당 등록에 실패했습니다:", error);
            alert('구내식당 등록에 실패했습니다. 다시 시도해주세요.');
        }
    };

    return (
        <div className="register-cafeteria-container">
            <h2>구내식당 등록</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>식당 이름:</label>
                    <input type="text" name="name" value={cafeteria.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>위치:</label>
                    <input type="text" name="location" value={cafeteria.location} onChange={handleChange} required />
                </div>
                {/* 기타 필드 추가 */}
                <button type="submit">등록</button>
            </form>
        </div>
    );
};

export default RegisterCafeteriaPage;
