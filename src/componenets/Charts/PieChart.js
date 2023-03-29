import {Pie} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
import'./Charts.css'


const PieChart = ({lineChartData}) => {
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
    <div className='pie_chart'>
    <Pie data={lineChartData} options={options}/>
    </div>
    
    </div>
  )
}

export default PieChart