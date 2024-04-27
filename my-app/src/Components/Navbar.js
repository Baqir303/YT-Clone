import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import menuImage from '../Images/menu.png';
import logoImage from '../Images/logo.png';
import notificationImage from '../Images/notification.png';
import userImage from '../Images/user.png';
import SearchImage from '../Images/Search.png';
import UserInfo from './UserInfo';

export default function Navbar({ handleMenuClick, handleSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isUserInfoOpen, setIsUserInfoOpen] = useState(false);
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  const toggleUserInfo = () => {
    setIsUserInfoOpen(!isUserInfoOpen);
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch(searchQuery);
    }
  };

  const handleNotiClick =()=>{
    navigate('/notification');
  }
  const handleSearchClick = () => {
    handleSearch(searchQuery);
    localStorage.setItem('history',','+history);
    setHistory(prevHistory => [...prevHistory,searchQuery]);
    
  };

  return (
    <div className='Navbar-complete'>
      <nav className='flex-div'>
        <div className="nav-left">
          <img src={menuImage} alt="" className='menulogo' onClick={handleMenuClick} />
          <img src={logoImage} alt="logo" className='logoImg' />
        </div>
        <div className="nav-middle flex-div">
          <div className="search-box">
            <input type="text" placeholder='Search' name="" id="" value={searchQuery} onChange={handleChange} onKeyPress={handleKeyPress} />
            <img src={SearchImage} alt="" className='searchicon' onClick={handleSearchClick} />
          </div>
        </div>
        <div className="nav-right flex-div">
          <img src={notificationImage} alt="" className='notiImg' onClick={handleNotiClick} />
          <Link to="/"><img src={userImage} alt="" className='UsrImg' onClick={toggleUserInfo} /></Link>
      {isUserInfoOpen && <UserInfo />}
        </div>
      </nav>
    </div>
  );
}
