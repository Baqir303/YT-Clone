import React from 'react'
import menuImage from '../Images/menu.png';
import logoImage from  '../Images/logo.png'
import uploadImage from '../Images/upload.png'
import notificationImage from '../Images/notification.png';
import userImage from '../Images/user.png'
//  import moreImage from '../Images/more.png'
import SearchImage from '../Images/Search.png'
import MicImage from '../Images/mic Icon.png'


export default function Navbar({ handleMenuClick }) {
  return (
    <div className='Navbar-complete'>
      
      <nav className='flex-div'>
        <div className="nav-left">
        <img src={menuImage} alt="" className='menulogo' onClick={handleMenuClick}  />
        <img src={logoImage} alt="logo" className='logoImg' />

        </div>
        <div className="nav-middle flex-div">
          <div className="search-box">
          <input type="text" placeholder='Search' name="" id="" />
          <img src={SearchImage} alt="" className='searchicon'/>
          
          </div>
          <img src={MicImage} alt="" className='micicon' />
        </div>
        <div className="nav-right flex-div">
          <img src={uploadImage} alt="" className='uploadImg' />
          {/* <img src={moreImage} alt="" className='moreImg'/> */}
          <img src={notificationImage} alt="" className='notiImg' />
          <img src={userImage} alt="" className='UsrImg'/>
        </div>
      </nav>
    </div>
  )
}
