
import React from 'react';
import '../styles.css';

const Career = () => (
  <div className="career">
    <h2 className="career__title">Career Opportunities</h2>
    <p className="career__description">
      Get placed in top companies after completing our industry-leading courses.
    </p>

    <div className="career__grid">
      <div className="career__card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="career__image" />
        <h3>Google</h3>
        <p>Join the innovators driving the future of AI, cloud, and technology.</p>
      </div>

      <div className="career__card">
        <img src="https://cdn-icons-png.flaticon.com/512/732/732221.png" alt="Microsoft" className="career__image" />
        <h3>Microsoft</h3>
        <p>Contribute to cutting-edge software and cloud platforms worldwide.</p>
      </div>

      <div className="career__card">
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968896.png" alt="Amazon" className="career__image" />
        <h3>Amazon</h3>
        <p>Work with a global e-commerce and cloud services leader.</p>
      </div>

      <div className="career__card">
        <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="career__image" />
        <h3>Meta (Facebook)</h3>
        <p>Build the future of social connections and the metaverse.</p>
      </div>
    </div>
  </div>
);

export default Career;
