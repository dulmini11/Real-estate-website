import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginRegister from './components/LoginRegister';
import PropertyPage from './components/PropertyPage';
import About from './components/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LoginRegister" element={<LoginRegister />} />
        <Route path="/property/:id" element={<PropertyPage />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
