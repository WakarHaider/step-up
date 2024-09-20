import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import './index.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import LandingPage from './components/pages/landingPage/LandingPage';
import Layout from './components/layout/Layout';
import Login from './components/pages/onboarding/Login';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;