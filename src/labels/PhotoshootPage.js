import React from 'react';
import '../labels/MarraigePage.css'; // Import the CSS file

// Import images
import photo1 from '../assets/photo1.jpeg';
import photo2 from '../assets/photo2.jpeg';

function PhotoshootPage() {
  // Define images for the "Photoshoot" category
  const images = [
    photo1,
    photo2,
  ];

  return (
    <div className="marriage-page"> {/* Apply marriage-page class */}
      <h1>Photoshoot</h1>
      <div className="image-container"> {/* Apply image-container class */}
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default PhotoshootPage;
