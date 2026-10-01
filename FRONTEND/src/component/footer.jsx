import React from 'react';
 // Import the CSS file for footer

function Footer() {
  return (
    <footer className="footer">
      {/* Left Section: Map */}
      <div className="footer-map">
      <a href="https://maps.app.goo.gl/9q2SszYWSbAwKmyG7" target="_blank" rel="noopener noreferrer"
      >
  <img
    src="map 2.jpg"  // Replace with your map image URL
    alt="Map of San Francisco"  // Replace with your location name
    className="footer-map-image" // Add class for styling

  />
</a>

       
       </div>

      {/* Right Section: Social Media and Contact */}
      <div className="footer-contact">
        <div className="social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="instagram.png" />
            </a>
            <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
              <img src="whatsapp.png"  />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="facebook.png"  />
            </a>
            <a href="https://www.threads.net" target="_blank" rel="noopener noreferrer">
              <img src="thread.png"  />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="youtube (1).png" />
            </a>
          </div>
        </div>

        <div className="contact-info">
          <h3>Contact Us</h3>
          <div className="contact-details">
            <p><img src="/path/to/address-icon.png" alt="Address" /> 123 Main Street, City, Country</p>
            <p><img src="/path/to/phone-icon.png" alt="Phone" /> +123 456 789</p>
            <p><img src="/path/to/email-icon.png" alt="Email" /> example@example.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer