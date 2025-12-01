export const filterUsers = (users, searchTerm) => {
  return users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const getInitials = (name) => {
  return name.charAt(0).toUpperCase();
};

export const formatPhone = (phone) => {
  // Format số điện thoại nếu cần
  return phone.split(' ')[0];
};

export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};