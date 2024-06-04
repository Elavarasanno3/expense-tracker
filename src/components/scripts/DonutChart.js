import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import '../styles/donutChart.css'; // Import the CSS file

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green'],
    datasets: [
      {
        data: [100, 100, 100, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  const options = {
    cutout: '70%', // This creates the inner gap
    plugins: {
      legend: {
        display: false, // Hide the default legend
      },
    },
  };

  return (
    <div className="chart-container">
      <div className="chart-wrapper">
        <div className="doughnut-chart">
          <h2 className="heading">Total expense</h2>
          <Doughnut data={data} options={options} />
        </div>
        <div className="legend-container">
          <div className="legend">
            {data.labels.map((label, index) => (
              <div key={index}>
                <span
                  style={{
                    display: 'inline-block',
                    width: '12px',
                    height: '12px',
                    backgroundColor: data.datasets[0].backgroundColor[index],
                    marginRight: '8px',
                  }}
                ></span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
