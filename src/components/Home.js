import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Home = () => (
  <div className="home">
    <h1 className="home__title">Welcome to Solution-Tech</h1>
    <p className="home__description">
      We offer industry-leading software training programs in various technologies.
    </p>

    {/* Smaller "Why Choose Us?" Section */}
    <div className="home__content compact">
      <h2 className="home__subtitle compact-title">Why Choose Us?</h2>
      <ul className="home__list compact-list">
        <li>✅ Expert instructors with real-world experience</li>
        <li>✅ Hands-on projects and practical learning</li>
        <li>✅ Flexible learning schedules (online & offline)</li>
        <li>✅ Job assistance and career guidance</li>
      </ul>
    </div>

    <Link to="/courses">
      <button className="home__btn">View All Courses</button>
    </Link>
  </div>
);

export default Home;


