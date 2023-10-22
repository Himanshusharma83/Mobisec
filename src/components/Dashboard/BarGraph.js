import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './BarGraph.css';
import { BsXCircle, BsArrowRepeat, BsQuestionCircle } from 'react-icons/bs';

import LifeTable from './liftable';


const BarGraph = () => {
  const chartOptions = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    yaxis: {
        min: 0,           
        max: 103000 ,          
        tickAmount: 200,    
      },
    
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '200%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2, 
      colors: ["transparent"], 
    },
    xaxis: {
      categories: [''],
    },
    yaxis: {
      min: 0,
      max: 40,
      tickAmount: 8,
    },
    fill: {
      opacity: 0.7, 
    },
    colors: [], 
    grid: {
      borderColor: "#000000",
    },
    legend: {
        markers: {
          fillColors: ["#800000", "#AAFF00", "orange",'pink'], 
        },
      },
  };

  const series = [
    {
      name: "Extremely Critical",
      data: [10],
      color: "#FF5733", 
    },
    {
      name: "Less Critical",
      data: [5],
      color: "#900C3F", 
    },
    {
      name: "Highly Critical",
      data: [5],
      color: "#FFC0CB", 
    },
    {
      name: "Not Critical",
      data: [40, 90],
      color: "#FF5733", 
    },
    {
      name: "Moderately Critical",
      data: [200],
      color: "#33FF33", 
    },
  ];
  
  
  return (
    <div className="card my-card">
      <div className="card-header" style={{ display: 'flex', gap: '0rem' }}>
        <h5 className="card-title bartext" style={{ display: 'flex' }}>
          Criticality overview-Threat Profile of vulnerabilities
        </h5>

        <BsArrowRepeat
          style={{ marginTop: '-4%', fontSize: '1.3rem', display: 'flex', marginLeft: '10%', fontWeight: 'bold', cursor: 'pointer', color: '#aca8a8' }}
          className="card-icon"
        />
        <BsQuestionCircle
          style={{ marginTop: '-3.5%', fontSize: '1rem', marginLeft: '2%', fontWeight: 'bold', cursor: 'pointer', color: '#aca8a8' }}
          className="card-icon"
        />
        <BsXCircle
          style={{ marginTop: '-3.5%', fontSize: '1rem', marginLeft: '2%', fontWeight: 'bold', cursor: 'pointer', color: '#aca8a8' }}
          className="card-icon"
        />
      </div>
      <div className="card-body card-content">
        <p className="card-content">
          Extracting components might seem like grunt work at first, but having a palette of reusable components pays off in larger apps. A good rule of thumb is that if a part of your UI is used several times (Button, Panel, Avatar), or is
        </p>
        <ReactApexChart
          type="bar"
          height={270}
          width={310}
          options={chartOptions}
          series={series}
        />
      </div>
      <LifeTable />
    </div>
  );
};

export default BarGraph;
