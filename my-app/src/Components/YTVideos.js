import React, { useState, useEffect } from 'react';

const YTVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const API_KEY = 'AIzaSyCp4I2cKYK9CdMnZCYHpIg6pGEoU7jSrnI';
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&q=university&type=video&videoDuration=medium&maxResults=20`
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
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3>{video.snippet.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YTVideos;
