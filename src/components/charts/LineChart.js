import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJs,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    ArcElement
  } from 'chart.js/auto'

function LineChart({ options, data }) {

ChartJs.register(ArcElement);


  return (
    <div className="chart">
      <Line   
      options={{
        maintainAspectRatio: false,
        responsive: true,
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
        elements: {
           line: {
            tension: 0.5,
           },
        },
        plugins: {
          legend: {
          display: false,
          labels: {
            font: {
              color: "#ffffff1f"
            },
          }
        },           
      }
       }}  
       data={data} />
    </div>
  )
}

export default LineChart;