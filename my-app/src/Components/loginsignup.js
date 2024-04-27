import React, { useState } from 'react';
import logoImg from '../Images/logo.png';
import bgImg from '../Images/bg-v3.jpg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const styles = {
  mainDiv: {
    width: '120vw',
    height: '108vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${bgImg})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  container: {
    backgroundColor: '#fff',
    padding: '30px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '400px',
    width: '100%',
    boxSizing: 'border-box',
    borderRadius: '35px',
  },
  logo: {
    width: '100px',
    marginBottom: '20px',
  },
  header: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  inputGroup: {
    marginBottom: '15px',
    textAlign: 'left',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#333',
  },
  input: {
    width: 'calc(100% - 20px)',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '3px',
    boxSizing: 'border-box',
  },
  button: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
  buttonHover: {
    backgroundColor: '#222',
  },
  link: {
    color: '#333',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
  },
  linkHover: {
    color: '#000',
  }
};
function LoginSignup() {
  const navigate = useNavigate();
  const [isLoginVisible, setIsLoginVisible] = useState(true);
  const [message, setMessage] = useState('');

  const toggleVisibility = () => {
    setIsLoginVisible(!isLoginVisible);
    setMessage('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post('http://localhost/YT_Backend/login.php', { email, password });
      if (response.data === 'Logged in') {
        localStorage.setItem('email',email);
        navigate('/');
      } else {
        setMessage(response.data);
      }
    } catch (error) {
      console.error('Login error:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirm-password');
    
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('http://localhost/YT_Backend/signup.php', { name, email, password });
      if (response.data !== 'Invalid request method') {
        localStorage.setItem('email',response.data);
        navigate('/Personalization');
      } else {
        setMessage(response.data);
      }
    } catch (error) {
      console.error('Signup error:', error);
      setMessage('An error occurred. Please try again.');
    }
    

  };
  
  return (
    <div style={styles.mainDiv}>
      {isLoginVisible ? (
        <div style={styles.container}>
          <img src={logoImg} alt="App Logo" style={styles.logo} />
          <h1 style={styles.header}>Login to Your Account</h1>
          {message && <p style={{ color: 'red' }}>{message}</p>}
          <form onSubmit={handleLogin}>
            <div style={styles.inputGroup}>
              <label htmlFor="login-email" style={styles.label}>Email</label>
              <input type="email" id="login-email" name="email" required style={styles.input} />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="login-password" style={styles.label}>Password</label>
              <input type="password" id="login-password" name="password" required style={styles.input} />
            </div>
            <button type="submit" style={styles.button}>Login</button>
          </form>
          <p>Don't have an account yet? <Link to=""  onClick={toggleVisibility} style={styles.link}>Sign Up</Link></p>
        </div>
      ) : (
        <div style={styles.container}>
          
          <img src={logoImg} alt="App Logo" style={styles.logo} />
          <h1 style={styles.header}>Create Your Account</h1>
          {message && <p style={{ color: 'red' }}>{message}</p>}
          <form onSubmit={handleSignup}>
            <div style={styles.inputGroup}>
              <label htmlFor="signup-name" style={styles.label}>Full Name</label>
              <input type="text" id="signup-name" name="name" required style={styles.input} />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="signup-email" style={styles.label}>Email</label>
              <input type="email" id="signup-email" name="email" required style={styles.input} />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="signup-password" style={styles.label}>Password</label>
              <input type="password" id="signup-password" name="password" required style={styles.input} />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="signup-confirm-password" style={styles.label}>Confirm Password</label>
              <input type="password" id="signup-confirm-password" name="confirm-password" required style={styles.input} />
            </div>
            <button type="submit" style={styles.button}>Sign Up</button>
          </form>
          <p>Already have an account? <Link to="" onClick={toggleVisibility} style={styles.link}>Login</Link></p>
        </div>
      )}
    </div>
  );
}

export default LoginSignup;
