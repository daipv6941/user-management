import React, { useState, useEffect } from 'react';
import './App.css';
import { useUsers } from './hooks/useUsers';
import { usePosts } from './hooks/usePosts';
import { filterUsers } from './utils/helpers';
import Loading from './components/Loading/Loading';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import SearchBar from './components/SearchBar/SearchBar';
import UserList from './components/UserList/UserList';

function App() {
  const { users, isLoading, error, retry } = useUsers();
  const { userPosts, loadingPosts, loadPosts } = usePosts();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    setFilteredUsers(filterUsers(users, searchTerm));
  }, [users, searchTerm]);

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
          resultCount={filteredUsers.length}
        />

        <UserList
          users={filteredUsers}
          userPosts={userPosts}
          loadingPosts={loadingPosts}
          onLoadPosts={loadPosts}
        />

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