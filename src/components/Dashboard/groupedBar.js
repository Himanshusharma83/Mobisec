import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { BsArrowRepeat, BsQuestionCircle, BsXCircle } from 'react-icons/bs';

const LifeTable = () => {


    const [chartData, setChartData] = useState({
        series: [],
        options: {
          chart: {
            type: 'bar',
            height: 290,
          },
          plotOptions: {
            bar: {
              horizontal: true,
              dataLabels: {
                position: 'top',
                enabled: false,
              },
            },
          },
          dataLabels: {
            enabled: true,
            offsetX: -6,
            style: {
              fontSize: '12px',
              colors: ['#FF3131','#FFC0CB'],
            },
          },
          stroke: {
            show: true,
            width: 1,
            colors: ['#fff'],
          },
          xaxis: {
            categories: [],
          },
          colors: ['#FF3131', '#FFC0CB'], // Light red and pink bar colors
        },
      });
    
      useEffect(() => {
        const fetchData = () => {
          const fetchedData = {
            series: [
              {
                name: 'Registred',
                data: [44, 55],
              },
              {
                name: 'Not Registred',
                data: [53, 32],
              },
            ],
            categories: ['Registred', 'Not Registred'],
          };
    
          setChartData((prevData) => ({
            ...prevData,
            series: fetchedData.series,
            options: {
              ...prevData.options,
              xaxis: {
                categories: fetchedData.categories,
              },
            },
          }));
        };
    
        fetchData();
      }, []);



  

  const evenRowStyle = {
    backgroundColor: '#dddddd',
  };

  const cardStyle = {
    height: '50vh',
    marginLeft: '-22%',
    width:'300px',
    marginTop:'9%'
    

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
       Site Overview - Average System Score
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
      <select style={dropdownStyle}>
        <option value="option1">All Host</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <div className="card-body card-content">
        <div >
        <div className="grouped-bar-chart">
      <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={chartData.options.chart.height} />
    </div>
        </div>
      </div>
    </div>
  );
};

export default LifeTable;
