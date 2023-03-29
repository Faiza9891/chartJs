import React from 'react'
import './Charts.css'
import {Radar} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

const RadarChart = ({lineChartData}) => {
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
    <div>
    <div className='radar_chart'>
    <Radar data={lineChartData} options={options}/>
    </div>
    
    </div>
  )
}

export default RadarChart