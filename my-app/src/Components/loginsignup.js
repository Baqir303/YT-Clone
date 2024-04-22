import React, { useState } from 'react';
import logoImg from '../Images/logo.png';
import bgImg from '../Images/bg-v3.jpg';

const styles = {
  mainDiv: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${bgImg})`, 
  },
  container: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '5px',
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
  const [isLoginVisible, setIsLoginVisible] = useState(true);

  const toggleVisibility = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  return (
    <div style={styles.mainDiv}>
      {isLoginVisible ? (
        <div style={styles.container}>
           <img src={logoImg} alt="App Logo" style={styles.logo} />
          <h1 style={styles.header}>Login to Your Account</h1>
          <form>
            <div style={styles.inputGroup}>
              <label htmlFor="login-email" style={styles.label}>Email</label>
              <input type="email" id="login-email" name="email" required style={styles.input} />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="login-password" style={styles.label}>Password</label>
              <input type="password" id="login-password" name="password" required style={styles.input} />
            </div>
            <button type="submit" style={styles.button} onMouseOver={e => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor} onMouseOut={e => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}>Login</button>
          </form>
          <p>Don't have an account yet? <a href="#" onClick={toggleVisibility} style={styles.link}>Sign Up</a></p>
        </div>
      ) : (
        <div style={styles.container}>
          <img src={logoImg} alt="App Logo" style={styles.logo} />
          <h1 style={styles.header}>Create Your Account</h1>
          <form>
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
            <button type="submit" style={styles.button} onMouseOver={e => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor} onMouseOut={e => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}>Sign Up</button>
          </form>
          <p>Already have an account? <a href="#" onClick={toggleVisibility} style={styles.link}>Login</a></p>
        </div>
      )}
    </div>
  );
}

export default LoginSignup;
