import { useState } from 'react';
import { fetchUserPosts } from '../services/api';

export const usePosts = () => {
  const [userPosts, setUserPosts] = useState({});
  const [loadingPosts, setLoadingPosts] = useState({});

  const loadPosts = async (userId) => {
    if (userPosts[userId]) return; // Đã có data

    try {
      setLoadingPosts(prev => ({ ...prev, [userId]: true }));
      const data = await fetchUserPosts(userId);
      setUserPosts(prev => ({ ...prev, [userId]: data }));
    } catch (err) {
      console.error('Lỗi khi tải bài viết:', err);
    } finally {
      setLoadingPosts(prev => ({ ...prev, [userId]: false }));
    }
  };

  return { userPosts, loadingPosts, loadPosts };
};