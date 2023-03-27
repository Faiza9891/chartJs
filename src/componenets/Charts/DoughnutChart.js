import React from 'react'
import {Doughnut} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
import'./Charts.css'

const DoughnutChart = ({lineChartData}) => {
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
    <div className='doughnut_chart'>
        <Doughnut data={lineChartData} options={options}/>
        </div>
    </div>
  )
}

export default DoughnutChart