import React, { useState, useEffect } from 'react';

const YTShorts = ({searchQuery}) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const API_KEY = 'AIzaSyA9xvdUbWJRQXge_35dET-oON-KIUBvtzs'; 
        var query = searchQuery || 'Good things';
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&q=${query}&maxResults=9`
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
  }, [searchQuery]); 

  return (
    <div className='yt-shorts'>
      <div className="yt-shorts-list">
        {videos.map((video) => (
          <div key={video.id.videoId} className="yt-shorts-item">
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
            <p>{video.snippet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YTShorts;
