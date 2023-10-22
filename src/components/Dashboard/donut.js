import React from 'react';
import ReactApexChart from 'react-apexcharts';

const DonutChart = () => {
  const chartData = {
    series: [44, 55, 13, 33],
    options: {
      chart: {
        type: 'donut',
        width: 200, 
        height: 300, 
      },
      labels: ['Apples', 'Bananas', 'Cherries', 'Dates'],
      legend: {
        show: false,
      },
    }
}
    
    const donutStyle = {
      margin: '10% auto', 
      width: chartData.options.chart.width + 'px', 
      height: chartData.options.chart.height + 'px', 
    };

    const cardStyle = {
        marginTop:'5%',
        marginLeft:'-5%',
      width: '250px',  
      height: '200px', 
      
    };

    return (
      <div className="card my-card" style={cardStyle}>
        <div className="card-header" style={{ display: 'flex', gap: '0rem' }}>
          <h5 className="card-title bartext" style={{ display: 'flex' }}>
            Site Overview - Average System Score
          </h5>
        </div>
        <div className="card-body card-content">
          <div className="donut-chart" style={donutStyle}>
            <ReactApexChart options={chartData.options} series={chartData.series} type="donut" />
          </div>
        </div>
      </div>
    );
  };
  
  export default DonutChart;
