import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchTerm, onSearchChange, resultCount }) => {
  return (
    <div className="search-container">
      <div className="search-wrapper">
        <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
        <input
          type="text"
          placeholder="Tìm kiếm người dùng theo tên..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
      </div>
      <p className="search-result">
        Tìm thấy <span className="result-count">{resultCount}</span> kết quả
      </p>
    </div>
  );
};

export default SearchBar;