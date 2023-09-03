import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, registerables} from 'chart.js';
Chart.register(...registerables);

const DoughnutChart = ({ data }) => {
  const chartData = {
    labels: [
      'Frontend',
      'Backend',
      'ML Engineers ',
    ],
    datasets: [
      {
        data: [
          data.frontend_developers,
          data.backend_developers,
          data.machine_learning_engineers,
        ],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 205, 86, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 205, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '80%', // Adjust doughnut thickness
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
        },
      },
    },
    layout: {
      padding: 10, // Adjust label spacing
    },
    scales: {
      yAxis: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart-container flex flex-col items-start justify-center w-full h-[70%]">
      <Doughnut data={chartData} options={chartOptions} />
    </div>
  );
};

export default DoughnutChart;
