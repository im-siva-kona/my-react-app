// src/App.js

import React from 'react';
import Services from './comps/Services';
import Navbar from './comps/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './comps/Login';
import Registration from './comps/Regstration';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
        
      </Routes>
    </Router>
  );
}

export default App;
