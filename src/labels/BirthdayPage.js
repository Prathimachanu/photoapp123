import React from 'react';
import '../labels/MarraigePage.css'; // Import the CSS file

// Import images
import birth1 from '../assets/birth1.jpeg';
import birth2 from '../assets/birth2.jpeg';

function BirthdayPage() {
  // Define images for the "Birthday" category
  const images = [
    birth1,
    birth2,
  ];

  return (
    <div className="marriage-page"> {/* Apply marriage-page class */}
      <h1>Birthday</h1>
      <div className="image-container"> {/* Apply image-container class */}
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default BirthdayPage;
