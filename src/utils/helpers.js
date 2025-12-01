export const filterUsers = (users, searchTerm) => {
  return users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const getInitials = (name) => {
  return name.charAt(0).toUpperCase();
};

export const formatPhone = (phone) => {
  return phone.split(' ')[0];
};

export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export const sortUsers = (usersList, order) => {
  return [...usersList].sort((a, b) => {
    if (order === 'asc') {
      return a.name.localeCompare(b.name); // A-Z
    } else {
      return b.name.localeCompare(a.name); // Z-A
    }
  });
};

export const paginateUsers = (users, currentPage, usersPerPage) => {
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  return users.slice(indexOfFirstUser, indexOfLastUser);
};

export const getTotalPages = (totalUsers, usersPerPage) => {
  return Math.ceil(totalUsers / usersPerPage);
};

export const getPaginationInfo = (currentPage, usersPerPage, totalUsers) => {
  const indexOfFirstUser = (currentPage - 1) * usersPerPage + 1;
  const indexOfLastUser = Math.min(currentPage * usersPerPage, totalUsers);
  return { indexOfFirstUser, indexOfLastUser };
};