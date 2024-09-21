import React from 'react';
import './about.css'; // Import the CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>Welcome to XYZ Photography, your one-stop destination for capturing special moments and creating lasting memories.</p>
      <p>At XYZ Photography, we offer a wide range of services tailored to meet your needs:</p>
      <ul>
        <li>Professional photography services for various occasions including weddings, birthdays, anniversaries, and more.</li>
        <li>Photoshoot sessions with experienced photographers to capture your best moments in stunning visuals.</li>
        <li>Album creation services to preserve your memories in beautiful, customized albums.</li>
        <li>Customized gifts creation for personalized and unique presents for your loved ones.</li>
      </ul>
      <p>Our team of dedicated professionals is committed to providing you with top-notch services and ensuring that every moment is captured with perfection.</p>
      <p>Contact us today to schedule your next photoshoot or to inquire about our services!</p>
    </div>
  );
}

export default About;
