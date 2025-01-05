import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import propertiesData from '../data/properties.json';
import Logo from "../components/images/logo.png";
import bedroomIcon from "../components/images/bed.png"; 
import bathroomIcon from "../components/images/bath.png";
import login from "../components/images/login.png";
import './PropertyPage.css';

const PropertyPage = () => {
  const { id } = useParams();
  const property = propertiesData.properties.find((prop) => String(prop.id) === id);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!property) {
    return <h2>Property not found</h2>;
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % property.picture.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + property.picture.length) % property.picture.length);
  };

  return (
    <div className="property-page-container">
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
              <a href="/LoginRegister" className="login-link">
        <img src={login} alt="Login/Register" className="login" />
        
        </a>
            </header>

      {/* Main Content: Property Details */}
      <main className="property-page-main">
        <h2>
            <strong></strong> {property.location}
        </h2>
        <h3>{property.type}</h3>
        <p>Status: {property.status}</p>

        {/* Image Carousel */}
        <div className="image-carousel">
          <div className="main-image-container">
            <button className="prev-button" onClick={handlePrevImage}>{"<"}</button>
            <img
              src={process.env.PUBLIC_URL + property.picture[currentImageIndex]}
              alt={`Property Image ${currentImageIndex + 1}`}
              className="property-page-image main-image"
            />
            <button className="next-button" onClick={handleNextImage}>{">"}</button>
          </div>

          {/* Small images and remaining count */}
          <div className="thumbnail-container">
            {property.picture.map((img, index) => {
              if (index !== currentImageIndex) {
                return (
                  <div key={index} className="thumbnail">
                    <img
                      src={process.env.PUBLIC_URL + img}
                      alt={`Thumbnail ${index + 1}`}
                      className="thumbnail-image"
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
        <div className='prperty-outline'>
        <div className="p-property-details">
          <p>
          <img src={bedroomIcon} alt="Bedroom icon" className="icon" />
          <strong>Bedrooms:</strong> 
          {property.bedrooms}
          </p>
          <p>
          <img src={bathroomIcon} alt="Bathroom icon" className="icon" />
          <strong>Bathrooms:</strong> 
          {property.bathrooms}
          </p>
          <p><strong>Price:</strong> ${property.price}</p>
          <p><strong>Status:</strong> {property.status}</p>
          <p><strong>Description:</strong> {property.description || "No description available"}</p>
        </div>
        <div className='location-side'>
        <div dangerouslySetInnerHTML={{ __html: property.map }}></div>
        </div>
      
        </div>
        <div className="contact-details">
        <a href=" " class="contact-button">Call Us</a>
        <a href=" " class="contact-button">Email Us</a>
        </div>

      </main>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 My Website. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default PropertyPage;

