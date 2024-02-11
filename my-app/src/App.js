import './App.css';
import ParentNS from './Components/ParentNS';
import Banner from './Components/Banner';
import VideoDisplay from './Components/VideoDisplay';
import YTVideos from './Components/YTVideos';
import Explore from './Components/Explore';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router> 
      <div>
        <ParentNS />
        <Banner/>
        <Routes>
          <Route exact path="/" element={<YTVideos/>} />
          <Route exact path="/shorts" element={<VideoDisplay />} />
          <Route exact path="/explore" element={<Explore/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
