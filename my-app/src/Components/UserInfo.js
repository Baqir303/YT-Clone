import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserInfo = () => {
  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate('/login');
  };

  return (
    <div style={{
      position: 'fixed',
      right: 0,
      top: 0,
      width: '300px',
      height: '100%',
      backgroundColor: '#f4f4f4',
      boxShadow: '-2px 0 5px rgba(0,0,0,0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <p>Please log in to explore.</p>
      <button onClick={redirectToLogin} style={{
        margin: '20px auto',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>Login</button>
    </div>
  );
};

export default UserInfo;
