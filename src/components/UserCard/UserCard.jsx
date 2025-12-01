import React from 'react';
import './UserCard.css';
import { getInitials } from '../../utils/helpers';

const UserCard = ({ user, isExpanded, onToggle }) => {
  return (
    <div className="user-card">
      <div className="user-header" onClick={onToggle}>
        <div className="user-info">
          <div className="user-avatar">
            {getInitials(user.name)}
          </div>
          <div>
            <h3 className="user-name">{user.name}</h3>
            <p className="user-username">@{user.username}</p>
          </div>
        </div>
        
        <div className="user-details-grid">
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
        
        <button className="toggle-button">
          {isExpanded ? '▲' : '▼'}
        </button>
      </div>
    </div>
  );
};

export default UserCard;