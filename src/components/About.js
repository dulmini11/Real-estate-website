import React from "react";
import { Link } from "react-router-dom";  // Add this line
import "./About.css"; 
import Logo from "../components/images/logo.png";
import login from "../components/images/login.png";
import ProfilePic from "../components/images/dulmini.jpg"; 


const About = () => {
  const handleFilterChange = (filter) => {
    console.log(`Filtering by: ${filter}`);
  };

  return (
    <div className="about-page">
      <header className="header">
              <a href="/" className="logo-link">
                <img src={Logo} alt="Logo" className="logo" />
              </a>
              <nav className="navbar">
                <ul className="navbar-items">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                </ul>
              </nav>
              <Link to="/LoginRegister">
                <img src={login} alt="Login" className="login" />
              </Link>
            </header>

      {/* Unified Container */}
      
        {/* About the App Section */}
        <div id="about-app" className="about-section">
        <div className="about-container">
          <h2>Welcome to Quick Space</h2>
          <img src={Logo} alt="Logo" className="profile-pic" />
          <p>
            Our application provides a user-friendly way to search for properties based on multiple criteria 
            such as property type, price, number of bedrooms, and more. The goal of this app is to give users an easy 
            and effective way to find their ideal property without needing to visit numerous websites.
          </p>
          <div className="row-container">
            <div className="features">
              <h3>Features</h3>
              <ul>
                <li>Search properties based on type, price, bedrooms, and other criteria.</li>
                <li>Responsive design for both desktop and mobile users.</li>
                <li>View property images, floor plans, and maps.</li>
                <li>Save your favorite properties for later viewing.</li>
              </ul>
            </div>
            <div className="tech-stack">
              <h3>Technology Stack</h3>
              <ul>
                <li>React JS for dynamic front-end interaction.</li>
                <li>CSS3 for styling and responsive design.</li>
                <li>JSON for property data storage.</li>
                <li>Local storage for saving favorites.</li>
              </ul>
            </div>
          </div>
          </div>
        </div>

        {/* About Me Section */}
        <div id="about-me" className="about-section">
        <div className="about-container">
          <h2>About Me - Dulmini Wanigasekara</h2>
          <img src={ProfilePic} alt="Dulmini Wanigasekara" className="profile-pic" />
          <p>
            Hello, I am Dulmini Wanigasekara, a Computer Science student at the University of Westminster. 
            I am passionate about coding, technology, and creating user-friendly web applications.
          </p>
          <div className="row-container">
            <div className="My-Background">
              <h3>My Background</h3>
              <ul>
                <li>Currently studying at the University of Westminster.</li>
                <li>Completed my secondary education at St. Thomas Girls High School in Matara.</li>
                <li>Part of various sports teams and have a keen interest in sports like rugby, karate, and athletics.</li>
              </ul>
            </div>
            <div className="Skills-Interests">
              <h3>Skills & Interests</h3>
              <ul>
                <li>Software Development: OOP Java, Python</li>
                <li>Web Development: HTML5, CSS3, JavaScript, React.js</li>
                <li>Game Development</li>
              </ul>
            </div>
          </div>
          <p>
            As a student learning web development, I wanted to apply my knowledge in a practical project that could help others.
            The goal of this real estate application is to provide a tool for easy property searching while learning about React.js and modern web application techniques.
          </p>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2024 My Website. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default About;
