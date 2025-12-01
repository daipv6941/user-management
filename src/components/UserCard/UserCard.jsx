import React from 'react';
import './UserCard.css';
import { getInitials } from '../../utils/helpers';

const UserCard = ({ user, isExpanded, onToggle, onDelete }) => {
  
  const handleDelete = (e) => {
    e.stopPropagation(); // Prevent toggle when clicking delete
    if (window.confirm(`Bạn có chắc muốn xóa người dùng "${user.name}"?`)) {
      onDelete(user.id);
    }
  };

  return (
    <div className="user-card">
      <div className="user-header">
        {/* Click vào phần này để toggle */}
        <div className="user-info" onClick={onToggle}>
          <div className="user-avatar">
            {getInitials(user.name)}
          </div>
          <div>
            <h3 className="user-name">{user.name}</h3>
            <p className="user-username">@{user.username}</p>
          </div>
        </div>
        
        <div className="user-details-grid" onClick={onToggle}>
          <div className="detail-item">
            <span className="detail-icon">📧</span>
            <span>{user.email}</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">📞</span>
            <span>{user.phone}</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">💼</span>
            <span>{user.company.name}</span>
          </div>
        </div>
        
        {/* ===== THÊM MỚI ===== */}
        <div className="action-buttons">
          <button 
            onClick={handleDelete}
            className="delete-button"
            title="Xóa người dùng"
          >
            🗑️
          </button>
          
          <button onClick={onToggle} className="toggle-button">
            {isExpanded ? '▲' : '▼'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;