import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file

function ContactUs() {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendEmail = () => {
    const emailAddress = 'tomandj519@gmail.com'; // Replace with your email address
    const subject = 'Message from Contact Form';
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  
    // Open the mailto link in a new window with specific dimensions
    const windowOptions = 'toolbar=0,status=0,resizable=1,width=600,height=400';
    window.open(mailtoLink, '_blank', windowOptions);
  };
  
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-details">
        <p>Email: tomandj519@gmail.com</p>
        <p>Phone: 9343648368</p>
        <p>Address: abc colony, chennai, India</p>
      </div>
      <textarea
        className="message-input"
        placeholder="Type your message here..."
        value={message}
        onChange={handleChange}
      />
      <button className="send-button" onClick={handleSendEmail}>Send Message</button>
    </div>
  );
}

export default ContactUs;




