import React from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
import'./Charts.css'

const LineChart = ({lineChartData}) => {
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
        <Line data={lineChartData} options={options}/>
        </div>
    </div>
  )
}

export default LineChart