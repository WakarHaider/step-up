import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import LandingPage from './pages/landingPage/LandingPage';
import Layout from './layout/Layout';
import Login from './pages/onboarding/Login';

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