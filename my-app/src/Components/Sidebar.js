import React from 'react'
import classNames from 'classnames';
import HomeImg from '../Images/Home2.png'
import SubscriptionImg from '../Images/Subscription.png'
import ExploreImg from '../Images/Explore.png'
import LibraryImg from '../Images/Library.png'
import HistoryImg from '../Images/History.png'
import PlaylistIcon from '../Images/PlayList.png'
import MessageImg from '../Images/Message.png'
import MrBeastImg from '../Images/MrBeastLogo.jpg'
import WWEImg from '../Images/WWE logo.jpg'
import WaqarzakaImg from '../Images/WakarZaka.jpg'
import BitcoinImg from '../Images/Bitcoin.jpg'
import Siuuu from '../Images/Suu.jpg'
import ShortsImg from '../Images/ShortsYT.png'
import { Link } from 'react-router-dom';


export default function Sidebar({ isOpen }) {

  return (
    
    <div className={classNames('Sidebar', { 'small-Sidebar': isOpen })}>
      
      <div className="shortcut-links">
        <Link to="/"><img src={HomeImg} alt="" className='HomeImg' /><p>Home</p></Link>
        <Link to="/explore"><img src={ExploreImg} alt="" /><p>Explore</p></Link>
        <Link to="/subscriptions"><img src={SubscriptionImg} alt="" /><p>Subscription</p></Link>
        <Link to="/shorts"><img src={ShortsImg} alt="" /><p>Shorts</p></Link>
        <Link to="/library"><img src={LibraryImg} alt="" /><p>Library</p></Link>
        <Link to="/history"><img src={HistoryImg} alt="" /><p>History</p></Link>
        <Link to="/playlist"><img src={PlaylistIcon} alt="" /><p>Playlist</p></Link>
        <Link to="/notification"><img src={MessageImg} alt="" /><p>Messages</p></Link>
        
        <hr />
      </div>
      <div className="Subscribed-list">
        <h3>Recommendations</h3>
        <a href="/"><img src={MrBeastImg} alt="" /><p>Mr Beast</p></a>
        <a href="/"><img src={WWEImg} alt="" /><p>WWE</p></a>
        <a href="/"><img src={WaqarzakaImg} alt="" /><p>Waqar Zaka</p></a>
        <a href="/"><img src={BitcoinImg} alt="" /><p>Bitcoin</p></a>
        <a href="/"><img src={Siuuu} alt="" /><p>Siuuuu</p></a>
      </div>
    </div>
  )
}
