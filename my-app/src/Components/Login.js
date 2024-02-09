// Login.js
import React from 'react';

function Login() {
  const handleLogin = () => {
    var clientId="695875143735-89vpvtj5csss7bb3tejqj3m1utj3ukc8.apps.googleusercontent.com";
    const redirectUri = 'http://localhost:3000/auth/callback';
    const scopes = 'profile email openid https://www.googleapis.com/auth/youtube.readonly';
    
    window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${encodeURIComponent(scopes)}`;

  };

  return (
    <div className='Login'>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
}

export default Login;
