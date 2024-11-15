import React from 'react';

const LoginPage = () => {
    const handleSocialLogin = (provider) => {
        // 소셜 로그인 처리 로직
        console.log(`${provider} 로그인 시도 중...`);
    };

    return (
        <div className="login-page">
            <h1>Login</h1>
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
        </div>
    );
};

export default LoginPage;