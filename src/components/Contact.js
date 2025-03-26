import React from 'react';
import '../styles.css';

const Contact = () => (
  <div className="contact">
    {/* Contact Info Section */}
    <div className="contact__container">
      <div className="contact__info">
        <h2 className="contact__title">Contact Us</h2>
        <p className="contact__item"><strong>📞 Phone:</strong> +91 8978493237</p>
        <p className="contact__item"><strong>📧 Email:</strong> info@solutiontech.com</p>
        <p className="contact__item"><strong>📍 Address:</strong> 123 Tech Street, Hyderabad, India</p>

        {/* Social Media Icons */}
        <div className="contact__socials">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="contact__icon" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="contact__icon" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" className="contact__icon" />
          </a>
        </div>
      </div>
    </div>

    {/* Smaller Contact Form Section */}
    <div className="contact__form-container small">
      <h2 className="contact__title small-title">Get in Touch</h2>
      <form className="contact__form">
        <input type="text" placeholder="Your Name" className="contact__input" required />
        <input type="email" placeholder="Your Email" className="contact__input" required />
        <textarea placeholder="Your Message" className="contact__textarea" rows="4" required></textarea>
        <button type="submit" className="contact__btn">Send Message</button>
      </form>
    </div>
  </div>
);

export default Contact;


