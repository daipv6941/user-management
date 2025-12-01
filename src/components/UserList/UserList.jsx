import React, { useState } from 'react';
import UserCard from '../UserCard/UserCard';
import UserDetails from '../UserDetails/UserDetails';
import PostList from '../PostList/PostList';
import './UserList.css';

const UserList = ({ 
  users, 
  userPosts, 
  loadingPosts, 
  onLoadPosts,
  onDeleteUser
}) => {
  const [expandedUserId, setExpandedUserId] = useState(null);

  const handleToggle = (userId) => {
    if (expandedUserId === userId) {
      setExpandedUserId(null);
    } else {
      setExpandedUserId(userId);
      onLoadPosts(userId);
    }
  };

  const handleDelete = (userId) => {
    if (expandedUserId === userId) {
      setExpandedUserId(null); // Close details if deleting expanded user
    }
    onDeleteUser(userId);
  };

  if (users.length === 0) {
    return (
      <div className="no-users">
        <div className="no-users-icon">👤</div>
        <p>Không tìm thấy người dùng nào</p>
      </div>
    );
  }

  return (
    <div className="user-list">
      {users.map((user) => (
        <div key={user.id} className="user-list-item">
          <UserCard
            user={user}
            isExpanded={expandedUserId === user.id}
            onToggle={() => handleToggle(user.id)}
            onDelete={handleDelete}
          />
          
          {expandedUserId === user.id && (
            <div className="expanded-content">
              <UserDetails user={user} />
              <PostList
                posts={userPosts[user.id]}
                isLoading={loadingPosts[user.id]}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default UserList;