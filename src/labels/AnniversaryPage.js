import React from 'react';
import '../labels/MarraigePage.css'; // Import the CSS file

// Import images
import anni1 from '../assets/anni1.jpeg';
import anni2 from '../assets/anni2.jpeg';
import anni3 from '../assets/anni3.jpeg';

function AnniversaryPage() {
  // Define images for the "Anniversary" category
  const images = [
    anni1,
    anni2,
    anni3,
  ];

  return (
    <div className="marriage-page"> {/* Apply marriage-page class */}
      <h1>Anniversary</h1>
      <div className="image-container"> {/* Apply image-container class */}
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default AnniversaryPage;
