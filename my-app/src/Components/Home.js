// Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make request to your backend to exchange authorization code for access token
        const response = await axios.post('/api/exchange-code', { code: 'AUTHORIZATION_CODE' });
        const accessToken = response.data.access_token;

        // Make authorized request to YouTube Data API
        const youtubeResponse = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });

        setVideos(youtubeResponse.data.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Videos</h2>
      <ul>
        {videos.map(video => (
          <li key={video.id}>{video.snippet.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
