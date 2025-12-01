import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = ({ error, onRetry }) => {
  return (
    <div className="error-container">
      <div className="error-card">
        <div className="error-icon">⚠️</div>
        <h2 className="error-title">Có lỗi xảy ra!</h2>
        <p className="error-message">{error}</p>
        <button onClick={onRetry} className="retry-button">
          Thử lại
        </button>
      </div>
    </div>
  );
};

export default ErrorMessage;