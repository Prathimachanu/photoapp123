import React from 'react';
import '../write/write.css'; // Import the CSS file

// Import images
import anni1 from '../../assets/anni1.jpeg';
import anni2 from '../../assets/anni2.jpeg';
import anni3 from '../../assets/anni3.jpeg';
import birth1 from '../../assets/birth1.jpeg';
import birth2 from '../../assets/birth2.jpeg';
import marraige1 from '../../assets/marraige1.jpg';
import marraige2 from '../../assets/marraige3.jpg';
import gift1 from '../../assets/gift1.jpg';
import gift2 from '../../assets/gift2.jpg';
import gift3 from '../../assets/gift3.jpeg';
import photo1 from '../../assets/photo1.jpeg';
import photo2 from '../../assets/photo2.jpeg';

function Photos() {
  // Define images for the "Marriage" category
  const images = [
    anni1,
    anni2,
    anni3,
    birth1,
    birth2,
    marraige1,
    marraige2,
    gift1,
    gift2,
    gift3,
    photo1,
    photo2,
    // Add more image imports as needed
  ];

  return (
    <div className="marriage-page"> {/* Apply marriage-page class */}
      <h1>ALL PHOTOS</h1>
      <div className="image-container"> {/* Apply image-container class */}
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default Photos;
