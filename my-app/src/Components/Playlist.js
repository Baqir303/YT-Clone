import React from 'react';

const getRandomVideoName = () => {
  const adjectives = ['Amazing', 'Fantastic', 'Incredible', 'Awesome', 'Terrific', 'Wonderful'];
  const nouns = ['Adventure', 'Journey', 'Experience', 'Discovery', 'Excursion', 'Voyage'];
  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  return `${randomAdjective} ${randomNoun}`;
};

const videos = Array.from({ length: 5 }, (_, index) => ({
  id: index + 1,
  title: getRandomVideoName(),
  duration: `${Math.floor(Math.random() * 10)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
}));

export default function Playlist() {
  return (
    <div style={{
    marginLeft:'230px',
      marginTop:'30px',
      textAlign: 'center',
      fontFamily: 'Times New Roman',
    }}>
      <h2 style={{
        fontSize: '24px',
      }}>Playlist</h2>
      <ul style={{
        listStyleType: 'none',
        padding: 0,
      }}>
        {videos.map((video) => (
          <li key={video.id} style={{
            marginBottom: '10px',
            borderBottom: '1px solid #ddd',
            paddingBottom: '10px',
          }}>
            <h3 style={{
              marginBottom: '5px',
              fontSize: '18px',
            }}>{video.title}</h3>
            <p style={{
              fontSize: '14px',
              color: '#888',
              marginLeft: '5px',
            }}>{video.duration}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
