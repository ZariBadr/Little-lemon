import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/nav" element={<Nav />} />
        <Route path="/main" element={<Main />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/" element={<Main />} /> 
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
