import React, { useState, useEffect } from 'react';
import './App.css';
import { useUsers } from './hooks/useUsers';
import { usePosts } from './hooks/usePosts';
import { 
  sortUsers, 
  paginateUsers, 
  getTotalPages, 
  getPaginationInfo 
} from './utils/helpers';
import Loading from './components/Loading/Loading';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import SearchBar from './components/SearchBar/SearchBar';
import SortButton from './components/SortButton/SortButton';
import UserList from './components/UserList/UserList';
import Pagination from './components/Pagination/Pagination';

function App() {
  const { users, isLoading, error, retry, deleteUser } = useUsers();
  const { userPosts, loadingPosts, loadPosts } = usePosts();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  
  // Filter users
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Sort users
  const sortedUsers = sortUsers(filteredUsers, sortOrder);
  
  // Pagination
  const totalPages = getTotalPages(sortedUsers.length, usersPerPage);
  const currentUsers = paginateUsers(sortedUsers, currentPage, usersPerPage);
  const { indexOfFirstUser, indexOfLastUser } = getPaginationInfo(
    currentPage, 
    usersPerPage, 
    sortedUsers.length
  );
  
  // Reset to page 1 when search or sort changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, sortOrder]);
  
  const handleToggleSort = () => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
  };
  
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };
  
  const handleDeleteUser = (userId) => {
    deleteUser(userId);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage error={error} onRetry={retry} />;
  }

  return (
    <div className="app">
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-title">Danh Sách Người Dùng</h1>
          <p className="app-subtitle">Quản lý và tìm kiếm thông tin người dùng</p>
        </header>

        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          resultCount={sortedUsers.length}
        />
        
        <div className="toolbar">
          <SortButton sortOrder={sortOrder} onToggle={handleToggleSort} />
        </div>

        <UserList
          users={currentUsers}
          userPosts={userPosts}
          loadingPosts={loadingPosts}
          onLoadPosts={loadPosts}
          onDeleteUser={handleDeleteUser}
        />
        
        {sortedUsers.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPrevious={handlePreviousPage}
            onNext={handleNextPage}
            indexOfFirstUser={indexOfFirstUser}
            indexOfLastUser={indexOfLastUser}
            totalUsers={sortedUsers.length}
          />
        )}

        <footer className="app-footer">
          <p>
            Tổng số người dùng: <span className="user-count">{users.length}</span>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;