import React from 'react';
import '../labels/MarraigePage.css'; // Import the CSS file

// Import images
import marriage1 from '../assets/marraige1.jpg';
import marriage3 from '../assets/marraige3.jpg';

function MarriagePage() {
  // Define images for the "Marriage" category
  const images = [
    marriage1,
    marriage3,
  ];

  return (
    <div className="marriage-page"> {/* Apply marriage-page class */}
      <h1>Marriage</h1>
      <div className="image-container"> {/* Apply image-container class */}
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default MarriagePage;
