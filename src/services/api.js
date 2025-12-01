const API_BASE_URL = process.env.REACT_APP_API_URL;;

export const fetchUsers = async () => {
  const response = await fetch(`${API_BASE_URL}/users`);
  if (!response.ok) {
    throw new Error('Không thể tải dữ liệu người dùng');
  }
  return response.json();
};

export const fetchUserPosts = async (userId) => {
  const response = await fetch(`${API_BASE_URL}/posts?userId=${userId}`);
  if (!response.ok) {
    throw new Error('Không thể tải bài viết');
  }
  return response.json();
};

export const fetchComments = async (postId) => {
  const response = await fetch(`${API_BASE_URL}/comments?postId=${postId}`);
  if (!response.ok) {
    throw new Error('Không thể tải comments');
  }
  return response.json();
};