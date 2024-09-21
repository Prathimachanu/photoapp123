import React from 'react';
import './follow.css'; // Corrected import statement

const Follow = () => {
  return (
    <div className="footer">
      <p>Follow us on:</p>
      <div className="social-icons">
        <a href="https://www.instagram.com/_.steve_harrington__" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram-square"></i>
        </a>
        <a href="#your-facebook-url" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-square"></i>
        </a>
        {/* <a href="#your-pinterest-url" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-pinterest-square"></i>
        </a> */}
        <a href="#your-twitter-url" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter-square"></i>
        </a>
      </div>
    </div>
  );
}

export default Follow;


