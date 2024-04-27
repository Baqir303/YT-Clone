import React, { useState } from 'react';
import NotificationImg from '../Images/notification.png';

const notificationMessages = [
  'New video uploaded: "React Tutorial"',
  'You have a new subscriber!',
  'The video "React State Management" is trending!',
];

export default function Notification() {
    
  const [messageIndex, setMessageIndex] = useState(0);

  const notificationStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
    marginLeft:'250px',
    marginTop:'40px',
  };

  const iconStyle = {
    width: '70px',
    height: '70px',
    marginBottom: '20px',
    transition: 'transform 0.1s linear',
    animation: 'ring 0.5s infinite',
  };

  const showNextNotification = () => {
    setMessageIndex((prevIndex) => (prevIndex + 1) % notificationMessages.length);
    const randomTime = Math.floor(Math.random() * 5000) + 1000; 
    setTimeout(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % notificationMessages.length);
    }, randomTime);
  };

  return (
    
    <div style={notificationStyle} onClick={showNextNotification}>
      <img
        src={NotificationImg}
        alt="Notification"
        style={iconStyle}
      />
      <h3>{notificationMessages[messageIndex]}</h3>
      <style>
        {`
        @keyframes ring {
          0% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(-10deg);
          }
          100% {
            transform: rotate(10deg);
          }
        }
        `}
      </style>
    </div>
  );
}
