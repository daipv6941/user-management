import React from 'react';
import './SortButton.css';

const SortButton = ({ sortOrder, onToggle }) => {
  return (
    <button onClick={onToggle} className="sort-button">
      <span className="sort-icon">⇅</span>
      <span>Sắp xếp: {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}</span>
    </button>
  );
};

export default SortButton;