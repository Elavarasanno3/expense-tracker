import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import '../styles/barChart.css'; // Import the CSS file

// Register the required components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green'],
    datasets: [
      {
        label: 'Expense',
        data: [300, 50, 100, 49],
        backgroundColor: '#FF6384',
        hoverBackgroundColor: '#FF6384',
      },
      {
        label: 'Income',
        data: [400, 150, 200, 99],
        backgroundColor: '#36A2EB',
        hoverBackgroundColor: '#36A2EB',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Disable the default legend
      },
    },
  };

  return (
    <div className="bar-chart-container">
      <div className="bar-chart-wrapper">
        <div className="bar-chart">
          <h2 className='heading'>Income-Expence</h2>
          <Bar data={data} options={options} />
        </div>
        <div className="legend">
          {data.datasets.map((dataset, index) => (
            <div key={index}>
              <span
                style={{
                  display: 'inline-block',
                  width: '12px',
                  height: '12px',
                  backgroundColor: dataset.backgroundColor,
                  marginRight: '8px',
                }}
              ></span>
              {dataset.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BarChart;
