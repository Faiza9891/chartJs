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

export const wavyLinePlugin = {
  afterDatasetsDraw: function(chart) {
    const ctx = chart.ctx;
    const datasets = chart.data.datasets;
    const datasetCount = datasets.length;

    // Iterate over each dataset
    for (let i = 0; i < datasetCount; i++) {
      const dataset = datasets[i];
      const data = dataset.data;
      const pointCount = data.length;

      // Skip datasets that don't have at least 3 points
      if (pointCount < 3) continue;

      // Calculate the distance between each point
      const spacing = chart.width / (pointCount - 1);

      // Define a curve intensity parameter
      const intensity = 0.2;

      // Begin a new path
      ctx.beginPath();

      // Move to the first point
      ctx.moveTo(chart.scales.x.getPixelForValue(0), chart.scales.y.getPixelForValue(data[0]));

      // Iterate over each point
      for (let j = 1; j < pointCount; j++) {
        // Calculate the control points for the current point
        const x1 = chart.scales.x.getPixelForValue(j - 1);
        const x2 = chart.scales.x.getPixelForValue(j);
        const y1 = chart.scales.y.getPixelForValue(data[j - 1]);
        const y2 = chart.scales.y.getPixelForValue(data[j]);
        const dx = x2 - x1;
        const dy = y2 - y1;
        const cp1x = x1 + dx * intensity;
        const cp1y = y1 + dy * intensity;
        const cp2x = x2 - dx * intensity;
        const cp2y = y2 - dy * intensity;

        // Draw a curve segment from the previous point to the current point
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x2, y2);
      }

      // Set the line style
      ctx.lineWidth = dataset.borderWidth || 2;
      ctx.strokeStyle = dataset.borderColor || 'rgba(0, 0, 0, 1)';

      // Stroke the path
      ctx.stroke();
    }
  }
};

export default LineChart