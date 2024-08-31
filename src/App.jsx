// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Profile from './pages/Profile';
import OpenPageButton2 from './pages/OpenPageButton.2';
import OpenPageButton3 from './pages/OpenPageButton.3'; 
import OpenPageButton4 from './pages/OpenPageButton.4';
import OpenPageButton5 from './pages/OpenPageButton.5';
import Slider from 'react-slick';


function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/about" element={<AboutPage />} />
    //     <Route path="/profile" element={<Profile />} />
    //     <Route path="/openpagebutton2" element={<OpenPageButton2 />} />
    //     <Route path="/openpagebutton3" element={<OpenPageButton3 />} />
    //     <Route path="/openpagebutton4" element={<OpenPageButton4 />} />
    //     <Route path="/openpagebutton5" element={<OpenPageButton5 />} />
    //     <Route path="/slide" element={<Slider />} />
        
    //   </Routes>
    // </Router>
    <h1>Testing my app on netlify</h1>
  );
}

export default App;
