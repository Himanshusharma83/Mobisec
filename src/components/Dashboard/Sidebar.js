import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [scanningOpen, setScanningOpen] = useState(false);
  const [resultsOpen, setResultsOpen] = useState(false);
  const [reportingOpen, setReportingOpen] = useState(false);
  const [patchingOpen, setPatchingOpen] = useState(false);
  const [administrationOpen, setAdministrationOpen] = useState(false);
  const [configurationOpen, setConfigurationOpen] = useState(false);

  const toggleDashboard = () => {
    closeAll();
    setDashboardOpen(!dashboardOpen);
  };

  const toggleScanning = () => {
    closeAll();
    setScanningOpen(!scanningOpen);
  };

  const toggleResults = () => {
    closeAll();
    setResultsOpen(!resultsOpen);
  };

  const toggleReporting = () => {
    closeAll();
    setReportingOpen(!reportingOpen);
  };

  const togglePatching = () => {
    closeAll();
    setPatchingOpen(!patchingOpen);
  };

  const toggleAdministration = () => {
    closeAll();
    setAdministrationOpen(!administrationOpen);
  };

  const toggleConfiguration = () => {
    closeAll();
    setConfigurationOpen(!configurationOpen);
  };

  const closeAll = () => {
    setDashboardOpen(false);
    setScanningOpen(false);
    setResultsOpen(false);
    setReportingOpen(false);
    setPatchingOpen(false);
    setAdministrationOpen(false);
    setConfigurationOpen(false);
  };

  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        <li onClick={toggleDashboard}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/scanning" style={{ textDecoration: 'none', color: 'white' }}>
            <i className="fas fa-search"></i> Scanning
            <button className="dropdown-buttonscan" onClick={toggleScanning}>
              {scanningOpen ? '▼' : '▶'}
            </button>
            {scanningOpen && (
              <ul className="dropdown-menu">
                <li>Scanning A</li>
                <li>Scanning B</li>
              </ul>
            )}
          </Link>
        </li>
        <li>
          <Link to="/results" style={{ textDecoration: 'none', color: 'white' }}>
            <i className="fas fa-sleigh"></i> Results
            <button className="dropdown-buttonresult" onClick={toggleResults}>
              {resultsOpen ? '▼' : '▶'}
            </button>
            {resultsOpen && (
              <ul className="dropdown-menu">
                <li>Results X</li>
                <li>Result Y</li>
              </ul>
            )}
          </Link>
        </li>
        <li>
          <Link to="/reporting" style={{ textDecoration: 'none', color: 'white' }}>
            <i className="fas fa-paste"></i> Reporting
            <button className="dropdown-buttonreport" onClick={toggleReporting}>
              {reportingOpen ? '▼' : '▶'}
            </button>
            {reportingOpen && (
              <ul className="dropdown-menu">
                <li>Reporting X</li>
                <li>Reporting Y</li>
              </ul>
            )}
          </Link>
        </li>
        <li>
          <Link to="/patching" style={{ textDecoration: 'none', color: 'white' }}>
            <i className="fas fa-puzzle-piece"></i> Patching
            <button className="dropdown-buttonpatch" onClick={togglePatching}>
              {patchingOpen ? '▼' : '▶'}
            </button>
            {patchingOpen && (
              <ul className="dropdown-menu">
                <li>Flexera Package System</li>
                <li>Patch Template</li>
                <li>Vendor Patch Module</li>
                <li>Patch Deployment Status</li>
              </ul>
            )}
          </Link>
        </li>
        <li>
          <Link to="/administration" style={{ textDecoration: 'none', color: 'white' }}>
            <i className="fas fa-user"></i> Administration
            <button className="dropdown-buttonadmin" onClick={toggleAdministration}>
              {administrationOpen ? '▼' : '▶'}
            </button>
            {administrationOpen && (
              <ul className="dropdown-menu">
                <li>Administration A</li>
                <li>Administration Template</li>
                <li>Administration Patch Module</li>
                <li>Administration Deployment Status</li>
              </ul>
            )}
          </Link>
        </li>
        <li>
          <Link to="/configuration" style={{ textDecoration: 'none', color: 'white' }}>
            <i className="fa">&#xf013;</i> Configuration
            <button className="dropdown-buttonconfig" onClick={toggleConfiguration}>
              {configurationOpen ? '▼' : '▶'}
            </button>
            {configurationOpen && (
              <ul className="dropdown-menu">
                <li>Configuration A</li>
                <li>Configuration Template</li>
                <li>Configuration Patch Module</li>
                <li>Configuration Deployment Status</li>
              </ul>
            )}
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
