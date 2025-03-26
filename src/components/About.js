import React from 'react';
import '../styles.css';

const About = () => (
  <div className="about">
    {/* Section 1: Introduction */}
    <div className="about__content">
      <div className="about__text">
        <h2 className="about__title">About Solution-Tech</h2>
        <p className="about__description">
          Solution-Tech is a leading software training institute that empowers students and professionals 
          with expert-led courses in modern technologies. Our mission is to bridge the gap between academic learning 
          and industry demands by offering practical, hands-on training.
        </p>
        <ul className="about__list">
          <li>✅ Industry-expert instructors</li>
          <li>✅ Hands-on project experience</li>
          <li>✅ Placement assistance with top companies</li>
        </ul>
      </div>

      <div className="about__image-container">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITVWLlbrT7kDsG1M3GhJIWkkeybNWcyixmCVwS-aNAvb-wRJPtVkwSm71br4S1IWU1Pw&usqp=CAU" 
          alt="Training Session" 
          className="about__image" 
        />
      </div>
    </div>

    {/* Section 2: Our Mission */}
    <div className="about__section about__section--gray">
      <div className="about__content reverse">
        <div className="about__image-container">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgsPSOI8l9bAz5ZWDN4fVhfPunZPtPWVDQ4g&s" 
            alt="Mission Image" 
            className="about__image" 
          />
        </div>
        <div className="about__text">
          <h2 className="about__title">Our Mission</h2>
          <p className="about__description">
            Our mission is to provide accessible and affordable software training with real-world applications. 
            We strive to create industry-ready professionals by delivering high-quality education in trending 
            technologies like AI, Web Development, Data Science, and more.
          </p>
        </div>
      </div>
    </div>

    {/* Section 3: Why Choose Us */}
    <div className="about__section">
      <div className="about__content">
        <div className="about__text">
          <h2 className="about__title">Why Choose Solution-Tech?</h2>
          <ul className="about__list">
            <li>📚 <strong>Comprehensive Curriculum:</strong> Our courses are designed by industry experts.</li>
            <li>💡 <strong>Hands-On Projects:</strong> Gain practical experience with real-world projects.</li>
            <li>🚀 <strong>Career Support:</strong> Get resume building and interview preparation assistance.</li>
            <li>🌍 <strong>Global Community:</strong> Connect with learners and experts worldwide.</li>
          </ul>
        </div>

        <div className="about__image-container">
          <img 
            src="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg" 
            alt="Technology Learning" 
            className="about__image" 
          />
        </div>
      </div>
    </div>
  </div>
);

export default About;

