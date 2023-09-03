import React from 'react'
import { useDataApi } from '../../context/ApiContext'


const BarChart = () => {
  // const { data, loading, error } = useDataApi();
  
  const data = [
    { "year": 2010, "new_recruits": 120, "resignations": 30 },
    { "year": 2011, "new_recruits": 140, "resignations": 25 },
    { "year": 2012, "new_recruits": 110, "resignations": 35 },
    { "year": 2013, "new_recruits": 160, "resignations": 40 },
    { "year": 2014, "new_recruits": 180, "resignations": 38 },
    { "year": 2015, "new_recruits": 200, "resignations": 45 },
    { "year": 2016, "new_recruits": 220, "resignations": 50 },
    { "year": 2017, "new_recruits": 250, "resignations": 55 },
    { "year": 2018, "new_recruits": 280, "resignations": 60 },
    { "year": 2019, "new_recruits": 300, "resignations": 65 },
    { "year": 2020, "new_recruits": 320, "resignations": 70 },
    { "year": 2021, "new_recruits": 350, "resignations": 75 },
    { "year": 2022, "new_recruits": 380, "resignations": 80 }
  ];

  const years = data.map(entry => entry.year);
  const newRecruits = data.map(entry => entry.new_recruits);
  const resignations = data.map(entry => entry.resignations);

  const chartData = {
    labels: years,
    datasets: [
      {
        label: 'New Recruits',
        data: newRecruits,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Resignations',
        data: resignations,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };
  
  return (
    <div>
      Hello
    </div>
  )
}

export default BarChart;
