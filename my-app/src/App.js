import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Banner from './Components/Banner';
import VideoDisplay from './Components/VideoDisplay';
import YTVideos from './Components/YTVideos';
import Explore from './Components/Explore';
import UserInfo from './Components/UserInfo';
import LoginSignup from './Components/loginsignup';
import Personalization from './Components/Personalization';
import Tick from './Components/Tick';
import Library from './Components/Library';
import Subscriptions from './Components/Subscriptions';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/Personalization" element={<Personalization />} />
        <Route path="/AccountCreated" element={<Tick/>} />
        {/* <Route exact path="/library" element={<Library searchQuery={searchQuery} />} /> */}
        <Route path="/*" element={<MainApp
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          searchQuery={searchQuery}
          handleSearch={handleSearch}
        />} />
      </Routes>
    </Router>
  );
}

function MainApp({ isSidebarOpen, toggleSidebar, searchQuery, handleSearch }) {
  return (
    <>
      <Navbar handleMenuClick={toggleSidebar} handleSearch={handleSearch} />
      <Sidebar isOpen={isSidebarOpen} />
      <Banner />
      <Routes>
        <Route exact path="/" element={<YTVideos searchQuery={searchQuery} />} />
        <Route exact path="/shorts" element={<VideoDisplay searchQuery={searchQuery} />} />
        <Route exact path="/explore" element={<Explore searchQuery={searchQuery} />} />
        <Route exact path="/user-info" element={<UserInfo searchQuery={searchQuery} />} />
        <Route exact path="/library" element={<Library searchQuery={searchQuery} />} />
        <Route exact path="/subscriptions" element={<Subscriptions searchQuery={searchQuery} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
