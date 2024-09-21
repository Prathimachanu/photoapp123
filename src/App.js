import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import TopBar from "./components/topbar/TopBar";
import Homepage from "./pages/homepage/Homepage";
import Write from "./pages/write/Write";
import MarriagePage from './labels/MarraigePage'; // Correct import path
import BirthdayPage from './labels/BirthdayPage'; // Correct import path
import AnniversaryPage from './labels/AnniversaryPage';

import PhotoshootPage from './labels/PhotoshootPage';
import OccasionvideoPage from './labels/OccasionvideoPage';
import CustomizedGiftsPage from './labels/CustomisedGiftsPage';
import About from "./pages/About/About";

import Contact from "./pages/Contact/Contact";
import Register from './components/Register';

import Login from './components/Login';


function App() {
  const currentUser = false;
  
  return (
    <Router>
      <div>
        <TopBar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/posts" element={<Homepage />} />
          <Route path="/write" element={currentUser ? <Homepage /> : <Write />} />
          {/* Include the MarriagePage route */}
          <Route path="/marriage" element={<MarriagePage />} />
          <Route path="/birthday" element={<BirthdayPage />} />
          <Route path="/CustomisedGifts" element={<CustomizedGiftsPage />} />
          <Route path="/anniversary" element={<AnniversaryPage />} />
          <Route path="/photoShoots" element={<PhotoshootPage />} />
          <Route path="/Occasionvideos" element={<OccasionvideoPage />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
