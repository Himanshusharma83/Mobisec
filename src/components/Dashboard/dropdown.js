import React from 'react';
import { BsXCircle, BsArrowRepeat, BsQuestionCircle } from 'react-icons/bs';

const Drop = () => {
  const dropdownStyle = {
    fontSize: '0.8rem',
    padding: '3px',
    width: '30%',
    marginBottom: '-15%',
    color: '#797373',
    marginTop: '2%',
    border: '1px solid #dddddd',
    marginLeft: '-6px',
  };

  const dropdownStyle2 = {
    fontSize: '0.8rem',
    padding: '3px',
    width: '30%',
    marginBottom: '-15%',
    color: '#797373',
    marginTop: '2%',
    border: '1px solid #dddddd',
    marginLeft: '5px',
  };

  const buttonStyle = {
    color: '#000',
    padding: '5px 8px',
    margin: '5px',
    fontSize: '0.9rem',
    border: '0.1rem solid #797373',
    cursor: 'pointer',
  };

  const setDefaultButtonStyle = {
    ...buttonStyle,
    
    color: '#797373', 
    border:'1px solid #797373',
    cursor: 'not-allowed',  
  };

  return (
    <div>
      <select style={dropdownStyle}>
        <option value="option1">Select Dashboard element to insert</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      <select style={dropdownStyle2}>
        <option value="option1">Default Profile (default)</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <button style={buttonStyle}>Save</button>
      <button style={setDefaultButtonStyle} disabled>
        Set Default
      </button>
      <button style={buttonStyle}>Delete</button>
      <button style={buttonStyle}>New</button>
      <button style={buttonStyle}>Reload</button>
    </div>
  );
};

export default Drop;
