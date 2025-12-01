import React from 'react';
import './UserDetails.css';

const UserDetails = ({ user }) => {
  return (
    <div className="user-details">
      <div className="details-grid">
        <div className="detail-card">
          <div className="detail-header">
            <span className="detail-icon-large">📍</span>
            <h4>Địa chỉ</h4>
          </div>
          <p>{user.address.street}</p>
          <p>{user.address.city}, {user.address.zipcode}</p>
        </div>
        
        <div className="detail-card">
          <div className="detail-header">
            <span className="detail-icon-large">🌐</span>
            <h4>Website</h4>
          </div>
          <a 
            href={`http://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="website-link"
          >
            {user.website}
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;