
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Courses = () => (
  <div className="courses">
    <h2 className="courses__title">Our Courses:</h2>
    <div className="courses__container">
      <div className="course-card">
        <Link to="/python" className="course-link">Python Full Stack Development</Link>
      </div>
      <div className="course-card">
        <Link to="/java" className="course-link">Java Full Stack Development</Link>
      </div>
      <div className="course-card">
        <Link to="/mern" className="course-link">MERN Stack Development</Link>
      </div>
      <div className="course-card">
        <Link to="/data-science" className="course-link">Data Science & Machine Learning</Link>
      </div>
      <div className="course-card">
        <Link to="/DA" className="course-link">Data Analytics</Link>
      </div>
      <div className="course-card">
        <Link to="/AI&ML" className="course-link">Artificial Intelligence and Machine Learning</Link>
      </div>
    </div>
  </div>
);

export default Courses;

