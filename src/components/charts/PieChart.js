import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJs,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    ArcElement,
    defaults
  } from 'chart.js/auto'

function VisitorPie({ options, data }) {

ChartJs.register(ArcElement);

defaults.plugins.legend.labels.color = "white"
defaults.plugins.legend.labels.textAlign = "left"



  return (
    <div className="chart">
      <Doughnut 
       options={{
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            align: 'center',
            labels :{
              maxHeight: 10,
              color: "white",
              boxWidth : 10,
              boxHeight : 10,
              font: {
                family: 'Outfit',
                lineHeight: 0.5
              }
            }
          }
        }                 
     }} 
     data={data} />
    </div>
  )
}

export default VisitorPie;