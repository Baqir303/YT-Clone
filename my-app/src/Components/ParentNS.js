import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import YTVideos from '../Components/YTVideos'; 

export default function ParentNS() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleSearch = (query) => {
        setSearchQuery(query); 
    };

    return (
        <div>
            <Navbar handleMenuClick={toggleSidebar} handleSearch={handleSearch} />
            <Sidebar isOpen={isSidebarOpen} />
            <YTVideos searchQuery={searchQuery} /> 
        </div>
    );
}
