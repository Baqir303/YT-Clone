import './App.css';
import ParentNS from './Components/ParentNS';
import Banner from './Components/Banner';
import VideoDisplay from './Components/VideoDisplay';
import YTVideos from './Components/YTVideos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <ParentNS />
      <Banner />
      <Router>
        <Routes>
          <Route exact path="/" element={<YTVideos />} />
          <Route path="/shorts" element={<VideoDisplay />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
