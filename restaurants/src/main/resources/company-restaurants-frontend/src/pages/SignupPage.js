import React, { useState } from 'react';

const SignupPage = () => {
    const [nickname, setNickname] = useState('');
    const [companyEmail, setCompanyEmail] = useState('');

    const handleSocialLogin = (provider) => {
        // 소셜 로그인 처리 로직 (예: Firebase, OAuth)
        console.log(`${provider} 로그인 시도 중...`);
    };

    const handleSignup = () => {
        if (!nickname || !companyEmail) {
            alert('닉네임과 회사 이메일을 모두 입력해주세요.');
            return;
        }
        // 회원가입 처리 로직
        console.log('회원가입 완료:', { nickname, companyEmail });
    };

    return (
        <div className="signup-page">
            <h1>Sign Up</h1>
            <div className="social-login-buttons">
                <button onClick={() => handleSocialLogin('Google')}>
                    <i className="fab fa-google"></i> Login with Google
                </button>
                <button onClick={() => handleSocialLogin('Facebook')}>
                    <i className="fab fa-facebook"></i> Login with Facebook
                </button>
                <button onClick={() => handleSocialLogin('Apple')}>
                    <i className="fab fa-apple"></i> Login with Apple
                </button>
            </div>
            <div className="additional-inputs">
                <input
                    type="text"
                    placeholder="Nickname"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Company Email"
                    value={companyEmail}
                    onChange={(e) => setCompanyEmail(e.target.value)}
                />
                <button onClick={handleSignup} className="signup-button">
                    Complete Signup
                </button>
            </div>
        </div>
    );
};

export default SignupPage;