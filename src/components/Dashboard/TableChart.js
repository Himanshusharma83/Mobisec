import React, { useState, useEffect } from 'react';
import { BsXCircle, BsArrowRepeat, BsQuestionCircle } from 'react-icons/bs';
import DonutChart from './donut';

const StyledTable = () => {
 

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    
    fetch('https://6534f3e9e1b6f4c590471201.mockapi.io/Software')
      .then((response) => response.json())
      .then((data) => setTableData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

//   console.log(tableData)

  const tableStyle = {
    fontFamily: 'arial, sans-serif',
    borderCollapse: 'collapse',
    width: '100%',
    height:'70vh'
  };

  const cellStyle = {
    border: '1px solid #dddddd',
    textAlign: 'left',
    padding: '8px',
    fontSize: '0.8rem',
    color: '#797373',
  };

  const evenRowStyle = {
    backgroundColor: '#dddddd',
  };

  const cardStyle = {
    height: '78vh',
    marginLeft: '-12%',
    width:'255px'

  };

  const scrollableTableStyle = {
    maxHeight: '70vh',
    overflowY: 'auto',
  };

  const dropdownStyle = {
    fontSize: '0.8rem',
    padding: '3px',
    width: '60%',
    marginBottom: '5%',
    color: '#797373',
    border: '1px solid #dddddd',
    marginLeft: '-6px',
  };

  return (
    <div style={cardStyle} className="card my-card">
      <div className="card-header" style={{ display: 'flex', gap: '0rem' }}>
        <h5 className="card-title bartext" style={{ display: 'flex' }}>
          Most Critical Advisories Affecting Your Security
        </h5>
        <BsArrowRepeat
          style={{
            marginTop: '-4%',
            fontSize: '1.3rem',
            display: 'flex',
            marginLeft: '10%',
            fontWeight: 'bold',
            cursor: 'pointer',
            color: '#aca8a8',
          }}
          className="card-icon"
        />
        <BsQuestionCircle
          style={{
            marginTop: '-3.5%',
            fontSize: '1rem',
            marginLeft: '2%',
            fontWeight: 'bold',
            cursor: 'pointer',
            color: '#aca8a8',
          }}
          className="card-icon"
        />
        <BsXCircle
          style={{
            marginTop: '-3.5%',
            fontSize: '1rem',
            marginLeft: '2%',
            fontWeight: 'bold',
            cursor: 'pointer',
            color: '#aca8a8',
          }}
          className="card-icon"
        />
      </div>
      <select style={dropdownStyle}>
        <option value="option1">All Products</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <div className="card-body card-content">
        <div style={scrollableTableStyle}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <td style={cellStyle}>#</td>
                <td style={cellStyle}>Advisory</td>
                <td style={cellStyle}>In..</td>
                <td style={cellStyle}>Threat Security</td>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(tableData) && tableData.length > 0 ? (
                tableData.map((item, index) => (
                  <tr key={index} style={index % 2 === 0 ? evenRowStyle : {}}>
                    <td style={cellStyle}>{item.id}</td>
                    <td style={cellStyle}>{item.Advisory}</td>
                    <td style={cellStyle}>{item.Insight}</td>
                    <td style={cellStyle}>{item.ThreatSecurity}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td style={cellStyle} colSpan="4">
                    Loading data...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <DonutChart />
      </div>
    </div>
  );
};

export default StyledTable;
