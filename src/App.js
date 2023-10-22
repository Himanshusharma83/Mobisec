import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/SharedComponent/Nav';
import Sidebar from './components/Dashboard/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';
import Scanning from './components/Scanning';
import Footer from './components/SharedComponent/Footer';
import Result from './components/Result';
import Report from './components/Report';
import Patch from './components/Patch';
import Administration from './components/administration';
import Configuration from './components/configuration';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="container">
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/scanning" element={<Scanning />} />
              <Route path="/results" element={<Result />} />
              <Route path="/reporting" element={<Report />} />
              <Route path="/patching" element={<Patch />} />
              <Route path="/administration" element={<Administration />} />
              <Route path="/configuration" element={<Configuration />} />  
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
