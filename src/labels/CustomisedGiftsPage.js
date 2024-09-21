import React from 'react';
import '../labels/MarraigePage.css'; // Import the CSS file

// Import images
import gift1 from '../assets/gift1.jpg';
import gift2 from '../assets/gift2.jpg';
import gift3 from '../assets/gift3.jpeg';

function CustomisedGiftsPage() {
  // Define images for the "Personalised Gifts" category
  const images = [
    gift1,
    gift2,
    gift3,
  ];

  return (
    <div className="marriage-page"> {/* Apply marriage-page class */}
      <h1>Personalised Gifts</h1>
      <div className="image-container"> {/* Apply image-container class */}
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default CustomisedGiftsPage;
