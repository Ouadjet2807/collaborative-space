import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJs,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    ArcElement
  } from 'chart.js/auto'

function BarChart({ options, data, width }) {

ChartJs.register(ArcElement);


  return (
    <div className="chart">
      <Bar  
        options={{
          maintainAspectRatio: false,
          responsive: true,
          indexAxis: 'x',
          scales: {
            y: {
              ticks: {
                color: "#fff",
                fontFamily: 'Outfit',
              },
              grid: {
                color: "#ffffff1f"
              }
            },
            x: {
              ticks: {
                color: "#fff",
                fontFamily: 'Outfit',
              },
              grid: {
                color: "#ffffff1f"
              }
            }
          },
          plugins: {
            legend: {
              display: false,
            },           
          }
      }}     
      data={data} />
    </div>
  )
}

export default BarChart;