import React, { useState } from 'react';
import './TabSwitch.css';

const TabSwitch = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="tab-switch">
      <div className="tab-buttons">
        <button
          className={activeTab === 1 ? 'active' : ''}
          onClick={() => handleTabClick(1)}
        >
          Dashboard
        </button>
        
      </div>
      
    </div>
  );
};

export default TabSwitch;
