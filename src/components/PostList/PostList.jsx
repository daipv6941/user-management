import React from 'react';
import './PostList.css';
import { truncateText } from '../../utils/helpers';

const PostList = ({ posts, isLoading }) => {
  if (isLoading) {
    return (
      <div className="posts-loading">
        <div className="small-spinner"></div>
        <p>Đang tải bài viết...</p>
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return <p className="no-posts">Không có bài viết</p>;
  }

  return (
    <div className="posts-container">
      <div className="posts-header">
        <span className="posts-icon">📝</span>
        <h4>Bài viết ({posts.length})</h4>
      </div>
      
      <div className="posts-list">
        {posts.map((post) => (
          <div key={post.id} className="post-item">
            <h5 className="post-title">{post.title}</h5>
            <p className="post-body">{truncateText(post.body, 120)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;