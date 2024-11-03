// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import SearchResultsPage from './pages/SearchResultsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />}/>
        <Route path="/search-results" element={<SearchResultsPage />} />
        {/* 추가적인 경로 설정 가능 */}
      </Routes>
    </Router>
  );
}

export default App;
