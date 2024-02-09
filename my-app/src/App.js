import './App.css';
// import Navbar from './Components/Navbar';
// import Sidebar from './Components/Sidebar';
import ParentNS from './Components/ParentNS';
import Banner from './Components/Banner';
// import VideoList from './Components/VideoList';
import VideoDisplay from './Components/VideoDisplay';
// import Login from './Components/Login';
import YTVideos from './Components/YTVideos';

function App() {
  return (
    
    <div>
    <ParentNS/>
    <Banner/> 
    {/* <VideoDisplay /> */}
    {/* <VideoList/> */}
    {/* <Login/> */}
    <YTVideos/>

    </div>    
    
    
    );
}

export default App;
