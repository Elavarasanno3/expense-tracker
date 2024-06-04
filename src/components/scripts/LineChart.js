import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import '../styles/lineChart.css'; // Import the CSS file

// Register the required components
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [300, 50, 100, 49],
        backgroundColor: '#FF6384',
        borderColor: '#FF6384',
        fill: false,
        tension: 0.1,
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
    <div className="line-chart-container">
      <div className="line-chart-wrapper">
        <div className="line-chart">
          <h2 className='heading'>Line Chart Example</h2>
          <Line data={data} options={options} />
        </div>
        <div className="legend">
          {data.labels.map((label, index) => (
            <div key={index}>
              <span
                style={{
                  display: 'inline-block',
                  width: '12px',
                  height: '12px',
                  backgroundColor: data.datasets[0].backgroundColor,
                  marginRight: '8px',
                }}
              ></span>
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LineChart;
