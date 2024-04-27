import React, { useState, useEffect } from 'react';

const Library = () => {
  const [personalization, setPersonalization] = useState('');
  const isLoggedIn = localStorage.getItem('email') !== null;

  useEffect(() => {
    if (isLoggedIn) {
      fetchPersonalization();
    }
  }, [isLoggedIn]);

  const fetchPersonalization = async () => {
    try {
      const email = localStorage.getItem('email');
      const response = await fetch(`http://localhost/YT_Backend/getPersonalization.php?email=${email}`);
      const data = await response.json();
      setPersonalization(data.personalization);
    } catch (error) {
      console.error('Error fetching personalization:', error);
    }
  };

  if (!isLoggedIn) {
    return <div style={styles.library}>Please login first.</div>;
  }

  const personalizationArray = personalization.split(',').map(item => item.trim());

  return (
    <div style={styles.library}>
      <h2>Library</h2>
      <div style={styles.personalization}>
        <h3>Your Selected Categories are;</h3>
        <div style={styles.table}>
          {personalizationArray.map((item, index) => (
            <div key={index} style={styles.cell}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  library: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingLeft: '250px',
    paddingTop: '60px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center'
    // height: '70vh',
  },
  personalization: {
    marginTop: '20px',
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  table: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    padding:'10px',
    gridGap: '10px',
  },
  cell: {
    padding: '15px',
    backgroundColor: '#888903',
    borderRadius: '10px',

  },
};

export default Library;
