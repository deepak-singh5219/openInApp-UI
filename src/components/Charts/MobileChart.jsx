import React from 'react';
import { Bar } from 'react-chartjs-2';
import { HorizontalBar } from 'react-chartjs-2';
import { Chart, registerables} from 'chart.js';
Chart.register(...registerables);

const MobileChart = ({ data }) => {
  const years = data.map(entry => entry.year);
  const newRecruits = data.map(entry => entry.new_recruits);
  const resignations = data.map(entry => entry.resignations);
  const barThickness = [40, 10];

  const chartData = {
    labels: years,
    datasets: [
      {
        label: 'New Recruits',
        data: newRecruits,
        backgroundColor: '#98D89E',
        borderColor: '#98D89E',
        borderWidth: 1,
        barThickness: 10, 
      },
      {
        label: 'Resignations',
        data: resignations,
        backgroundColor: '#EE8484',
        borderColor: '#EE8484',
        borderWidth: 1,
        barThickness: 10, 
      }
    ],
  };
  

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Employees',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Year',
        },
      },
    },
  };

  return (
    <div className="chart-container flex items-center justify-center w-full md:max-w-screen-lg mx-auto h-full">
      <Bar data={chartData} options={chartOptions} />

    </div>
  );
};

export default MobileChart;
