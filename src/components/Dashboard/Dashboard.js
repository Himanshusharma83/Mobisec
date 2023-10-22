import React from 'react';
import BarGraph from './BarGraph';
import StyledTable from './TableChart';
import Criticaltable from './CriticalTable';
import LifeTable from './liftable';
import TabSwitch from './Tab';
import Drop from './dropdown';

const dashboardStyle = {
  display: 'flex',
  justifyContent: 'flex', 
  padding: '20px',
};

function Dashboard() {
  return (
    <div>
        <TabSwitch />
        <Drop />
    <div style={dashboardStyle}>
      <BarGraph />
      <Criticaltable />
      <StyledTable />
      
    </div>
    </div>
  );
}

export default Dashboard;
