import './App.css';
import React,{ useState} from 'react'
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
// import ParentNS from './Components/ParentNS';
import Banner from './Components/Banner';
import VideoDisplay from './Components/VideoDisplay';
import YTVideos from './Components/YTVideos';
import Explore from './Components/Explore';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// this function is for sidebar to change from navbar
  const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
  }
//for Search function
const [searchQuery, setSearchQuery] = useState('');
const handleSearch = (query) => {
  setSearchQuery(query); // Update searchQuery state with the new query
};
  return (
    
    <Router> 
      <div>
      <Navbar handleMenuClick={toggleSidebar} handleSearch={handleSearch} />
      <Sidebar isOpen={isSidebarOpen} />
        {/* <ParentNS /> */}
        <Banner />
        <Routes>
          <Route exact path="/" element={<YTVideos searchQuery={searchQuery}/>} />
          <Route exact path="/shorts" element={<VideoDisplay searchQuery={searchQuery} />} />
          <Route exact path="/explore" element={<Explore searchQuery={searchQuery}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
