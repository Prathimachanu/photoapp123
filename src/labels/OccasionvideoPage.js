import React from 'react';
import '../labels/OccasionvideoPage.css'; // Import the CSS file

// Import videos
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';

function OccasionvideoPage() {
  // Define videos for the "Photoshoot" category
  const videos = [
    video1,
    video2,
    video3,
  ];

  return (
    <div className="photoshoot-page"> {/* Apply photoshoot-page class */}
      <h1>Videos</h1>
      <div className="video-container"> {/* Apply video-container class */}
        {videos.map((video, index) => (
          <video key={index} controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
    </div>
  );
}

export default OccasionvideoPage;
