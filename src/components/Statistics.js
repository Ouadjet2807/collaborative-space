import React from 'react'
import PieChart from './charts/PieChart'
import BarChart from './charts/BarChart'

export default function Statistics() {

  const doughnutChartData = {

    labels: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
    datasets: [
    {
    label: 'Age',
    data: [2, 5, 28, 80],
    backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(255, 159, 64, 0.7)',
    ],
    borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 2,
        
    },
    ],
    options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
        labels: {
            font: {
            color: "white",
            size: 40
            }
        }
        }
    }
    }
  }

  const barChartData =  {
            
    labels: ['Mauvaise', "Moyenne", "Bonne"],
    datasets: [
      {
    label: "",
    data: [50, 25, 25],
    indexAxis: 'x',
    backgroundColor: [
      'rgb(255 129 129 / 70%)',
      'rgb(255 188 107 / 70%)',
      'rgb(129 255 150 / 70%)',
    ],
    borderColor: [
      'rgb(255 73 0 / 70%)',
      'rgb(255 132 0 / 70%)',
      'rgb(22 129 70 / 70%)',
    ],
      borderWidth: 2,
      borderRadius: 10
    },
  ],
  options: {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
        legend: {
        display: false
        }
    }
    },
  }


  return (
    <div className='statistics'>
      <h1>Statistics</h1>
      <div className="charts">
        <BarChart   
              data={barChartData}
              />
        <PieChart   
              data={doughnutChartData}
              />
      </div>
    </div>
  )
}
