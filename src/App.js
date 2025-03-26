import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Courses from './components/Courses';
import Career from './components/Career';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Python from './components/Python';
import Java from './components/Java';
import Mern from './components/Mern';
import DataScience from './components/DataScience';
import Data from './components/Data';
import Ai from './components/Ai';
import './styles.css';



function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/career" element={<Career />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/python" element={<Python />} />
            <Route path="/java" element={<Java />} />
            <Route path="/mern" element={<Mern />} />
            <Route path="/data-science" element={<DataScience />} />
            <Route path="/da" element={<Data />} />
            <Route path="/AI&ML" element={<Ai />} />
          </Routes>
          <Footer />
            
          
        </div>
      </Router>
    </div>
  )
}

export default App

