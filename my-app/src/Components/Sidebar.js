import React from 'react'
import classNames from 'classnames';
import HomeImg from '../Images/Home2.png'
import SubscriptionImg from '../Images/Subscription.png'
import ExploreImg from '../Images/Explore.png'
import LibraryImg from '../Images/Library.png'
import HistoryImg from '../Images/History.png'
import PlaylistIcon from '../Images/PlayList.png'
import MessageImg from '../Images/Message.png'
import ShowMoreImg from '../Images/Down Arrow.png'
import MrBeastImg from '../Images/MrBeastLogo.jpg'
import WWEImg from '../Images/WWE logo.jpg'
import WaqarzakaImg from '../Images/WakarZaka.jpg'
import BitcoinImg from '../Images/Bitcoin.jpg'
import Siuuu from '../Images/Suu.jpg'


export default function Sidebar({ isOpen }) {

  return (
    
    <div className={classNames('Sidebar', { 'small-Sidebar': isOpen })}>
      
      <div className="shortcut-links">
        <a href="/"><img src={HomeImg} alt="" className='HomeImg' /><p>Home</p></a>
        <a href="/"><img src={ExploreImg} alt="" /><p>Explore</p></a>
        <a href="/"><img src={SubscriptionImg} alt="" /><p>Subscription</p></a>
        <a href="/"><img src={LibraryImg} alt="" /><p>Library</p></a>
        <a href="/"><img src={HistoryImg} alt="" /><p>History</p></a>
        <a href="/"><img src={PlaylistIcon} alt="" /><p>Playlist</p></a>
        <a href="/"><img src={MessageImg} alt="" /><p>Messages</p></a>
        <a href="/"><img src={ShowMoreImg} alt="" /><p>Show More</p></a>
        <hr />
      </div>
      <div className="Subscribed-list">
        <h3>Subscribed</h3>
        <a href="/"><img src={MrBeastImg} alt="" /><p>Mr Beast</p></a>
        <a href="/"><img src={WWEImg} alt="" /><p>WWE</p></a>
        <a href="/"><img src={WaqarzakaImg} alt="" /><p>Waqar Zaka</p></a>
        <a href="/"><img src={BitcoinImg} alt="" /><p>Bitcoin</p></a>
        <a href="/"><img src={Siuuu} alt="" /><p>Siuuuu</p></a>
      </div>
    </div>
  )
}
