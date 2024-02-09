import React, { useState } from 'react';
import Navbar from './Navbar';
import YTVideos from './YTVideos';

export default function ParentComponent() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <div>
      <Navbar handleSearch={handleSearch} />
      <YTVideos searchValue={searchValue} />
    </div>
  );
}
