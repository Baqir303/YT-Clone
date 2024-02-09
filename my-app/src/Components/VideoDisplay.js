import React, { useState, useEffect } from 'react';

const YTShorts = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const API_KEY = 'AIzaSyAyweQ-40PK3jo5xNZ-ZzOLc1H0TjnzRNQ';
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&q=university&maxResults=99`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }

        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        console.error('Error fetching videos:', error.message);
      }
    };

    fetchVideos();
  }, []); 

  return (
    <div className='video-display'>
      <div className="video-list">
        {videos.map((video) => (
          <div key={video.id.videoId} className="video-item">
            <iframe
              title={video.snippet.title}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <h3>{video.snippet.title}</h3>
            <p>{video.snippet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YTShorts;
