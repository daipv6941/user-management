import React from 'react';
import './Pagination.css';

const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPrevious, 
  onNext,
  indexOfFirstUser,
  indexOfLastUser,
  totalUsers
}) => {
  return (
    <div className="pagination">
      <div className="pagination-info">
        Hiển thị <span className="highlight">{indexOfFirstUser}</span> - 
        <span className="highlight"> {indexOfLastUser}</span> trong tổng số 
        <span className="highlight"> {totalUsers}</span> người dùng
      </div>
      
      <div className="pagination-controls">
        <button
          onClick={onPrevious}
          disabled={currentPage === 1}
          className={`pagination-btn ${currentPage === 1 ? 'disabled' : ''}`}
        >
          ◀ Previous
        </button>
        
        <div className="page-indicator">
          Trang <span className="current-page">{currentPage}</span> / {totalPages}
        </div>
        
        <button
          onClick={onNext}
          disabled={currentPage === totalPages}
          className={`pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`}
        >
          Next ▶
        </button>
      </div>
    </div>
  );
};

export default Pagination;