import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import '../styles/donutChart.css'; // Import the CSS file

const DonutChart = () => {
  const transactions = useSelector(state => state.transaction.transactions);

  // Calculate total expenses
  const totalExpenses = transactions.reduce((total, transaction) => {
    if (transaction.type === 'expense') {
      return total + transaction.amount;
    }
    return total;
  }, 0);

  // Calculate expenses by category and their percentage
  const categoryExpenses = transactions.reduce((categories, transaction) => {
    if (transaction.type === 'expense') {
      categories[transaction.category] = (categories[transaction.category] || 0) + transaction.amount;
    }
    return categories;
  }, {});

  // Function to generate random colors
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const data = {
    labels: Object.keys(categoryExpenses),
    datasets: [
      {
        data: Object.values(categoryExpenses),
        backgroundColor: Object.keys(categoryExpenses).map(() => getRandomColor()), // Random colors
        hoverBackgroundColor: Object.keys(categoryExpenses).map(() => getRandomColor()), // Random hover colors
      },
    ],
  };

  const options = {
    cutout: '60%', // This creates the inner gap
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
                {label} - {((categoryExpenses[label] / totalExpenses) * 100).toFixed(2)}% {/* Calculate and display percentage */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
