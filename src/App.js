import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './components/pages/Projects';
import Experience from './components/pages/Experience';
import Home from './components/pages/Home';
import './App.css';
import Navbar from './components/molecules/NavBar/Navbar';
import Footer from './components/molecules/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="experience" element={<Experience />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
