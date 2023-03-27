import React,{useState} from 'react'
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
import'./Charts.css'
import Dropdown from '../dropdown/Dropdown'

const BarChart = ({lineChartData}) => {


    const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };


  return (
    <div className='barchart'>
    <div className='charts_container'>
        <Bar data={lineChartData} options={options}/>
        </div>
    </div>
  )
}

export default BarChart