import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Axios from 'axios'; // Import Axios
import './BarGraph.css';
import { BsXCircle, BsArrowRepeat, BsQuestionCircle } from 'react-icons/bs';
import LifeTable from './liftable';

const BarGraph = () => {
  const [apiData, setApiData] = useState([]);
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
        columnWidth: '120%',
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

  const fetchDataFromAPI = async () => {
    try {
      const response = await Axios.get('https://6534f3e9e1b6f4c590471201.mockapi.io/Critcialdata'); // Replace with your API endpoint
      setApiData(response.data); // Set the API data in state
    } catch (error) {
      console.error('Error fetching data from API:', error);
    }
  };

  useEffect(() => {
    fetchDataFromAPI(); // Fetch data when the component mounts
  }, []);

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
          width={290}
          options={chartOptions}
          series={apiData} // Use the API data here
        />
      </div>
      <LifeTable />
    </div>
  );
};

export default BarGraph;
