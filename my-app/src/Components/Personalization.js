import React, { useState } from 'react';
import PersonalizationPNG from '../Images/Personalization.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const styles = {
    body: {
        fontFamily: 'Georgia, serif',
        margin: 0,
        padding: 0,
        backgroundImage: `url(${PersonalizationPNG})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',  // Centers the background image
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '107vh',  // Full viewport height
        width: '112vw'    // Full viewport width, adjust as necessary
      },
  container: {
    maxWidth: '600px',
    padding: '20px',
    backgroundColor: 'rgba(235, 230, 230, 0.6)',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
  },
  suggestion: {
    display: 'inline-block',
    padding: '8px 16px',
    margin: '5px',
    backgroundColor: '#ccdbe8',
    border: '1px solid #e2d7d7',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    color: '#333',
    textTransform: 'capitalize'
  },
  suggestionHover: {
    backgroundColor: '#e9ecef'
  },
  suggestionSelected: {
    backgroundColor: '#007bff',
    color: '#fff'
  },
  button: {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginTop: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer'
  },
  buttonHover: {
    backgroundColor: '#0056b3'
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: '5px',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '0 3px 0 3px',
    cursor: 'pointer'
  },
  closeButtonHover: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  }
};

const initialSuggestions = ['Sports', 'Education', 'Art', 'Books', 'Gaming', 'Photography', 'Podcasts', 'Entertainment', 'News', 'Music', 'Technologies', 'Movies'];

function Personalization() {
    const [suggestions, setSuggestions] = useState(initialSuggestions);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const navigate = useNavigate();

    const toggleCategory = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(cat => cat !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        try {
            // Send a POST request to the backend to save selected categories
            const response = await axios.post('http://localhost/YT_Backend/save-categories.php', { categories: selectedCategories,email: localStorage.getItem('email') });
            localStorage.setItem('categories',selectedCategories);
            
            if (response.data === 'Categories saved successfully') {
                navigate('/AccountCreated');
            } else {
                // Handle error
                console.error('Error saving categories:', response.data);
            }
        } catch (error) {
            // Handle network error
            console.error('Error saving categories:', error.message);
        }
    };

    const handleAddMore = () => {
        const newSuggestion = prompt('Enter a new suggestion:');
        if (newSuggestion) {
            setSuggestions([...suggestions, newSuggestion]);
        }
    };

    return (
        <div style={styles.body}>
            <div style={styles.container}>
                <h1>Personalization Page</h1>
                <b>Select your preferred video categories, tags, and channels:</b>
                <div id="suggestions">
                    {suggestions.map((suggestion, index) => (
                        <div
                            key={index}
                            className="suggestion"
                            style={{
                                ...styles.suggestion,
                                ...(selectedCategories.includes(suggestion) ? styles.suggestionSelected : {})
                            }}
                            onClick={() => toggleCategory(suggestion)}
                        >
                            {suggestion}
                        </div>
                    ))}
                </div>
                <button style={styles.button} onClick={handleAddMore}>
                    Add More
                </button>
                <form id="personalizationForm" onSubmit={handleSubmit}>
                    <br />
                    <label>Selected Categories:</label>
                    <div id="selectedCategories">
                        {selectedCategories.map((category, index) => (
                            <div key={index} style={{
                                ...styles.suggestion,
                                ...styles.suggestionSelected,
                                position: 'relative',
                                padding: '5px 30px 5px 10px'
                            }}>
                                {category}
                                <span
                                    style={styles.closeButton}
                                    onClick={() => setSelectedCategories(selectedCategories.filter(cat => cat !== category))}
                                >&times;</span>
                            </div>
                        ))}
                    </div>
                    <button type="submit" style={styles.button}>Next</button>
                </form>
            </div>
        </div>
    );
}

export default Personalization;