import { useState,useEffect} from 'react';
import BarChart from './componenets/Charts/BarChart';
import PieChart from './componenets/Charts/PieChart';
import RadarChart from './componenets/Charts/RadarChart';
import DoughnutChart from './componenets/Charts/DoughnutChart';
import LineChart from './componenets/Charts/LineChart';
// import { UserData } from './componenets/Data';
import Dropdown from './componenets/dropdown/Dropdown';
import './App.css'
//import Dataux from './componenets/Dataux';

function App() {



  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:5000/apis');
      const data = await res.json();

      const colors = ['aqua', 'gold', 'red', 'white', 'blue', 'rgba(255, 159, 64, 0.6)'];

      const chartData = {
        labels: data.map((item) => item.year),
        datasets: [
          {
            label:"Users Gained",
            data: data.map((item) => item.userGain),
          // backgroundColor: data.map((item,i) => colors[i % colors.length]),
            borderWidth: 1,
            borderColor:"blue",
           backgroundColor:"blue",
            pointBorderColor: "#ff6384", 
      pointRadius: 6,
      pointHoverRadius: 7
          },
      //     {
      //       label:"Users Lost",
      //       data: data.map((item) => item.userLosts),
      //       backgroundColor:"red",
      //       //backgroundColor: data.map((item,i) => colors[i % colors.length]),
      //       borderColor: "red",
      //       pointBorderColor: "#ff6384", 
      // pointRadius: 6,
      // pointHoverRadius: 7,

      //     }
        ],
      };
     

//       const gradient = canvasRef.current.getContext("2d").createLinearGradient(0, 0, 0, 400);
// gradient.addColorStop(0, "rgba(255, 99, 132, 0.6)");
// gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

      setChartData(chartData);
    };

    fetchData();
  }, []);


  // useEffect(() => {
  //   fetch('http://localhost:5000/apis')
  //     .then(response => response.json())
  //     .then(data => setData(data))
  //     .catch(error => console.error(error));
  // }, []);

  // console.log(data)

  // const [data,setData] = useState({
  //   labels: data.map((item) => item.year),
  //   datasets:[{
  //     label:"Users Gained",
  //     data: data.map((item) => item.userGain)
  //   },]
  // });



  // const API = "http://localhost:5000/apis"

  //http://localhost:5000/apis
 
const [lineChart,setLineChart] = useState(false)
const [barChart,setBarChart] = useState(false)
const [doughnutchart,setDoughnutChart] = useState(false)
const [piechart,setPieChart] = useState(false)
const [radarchart,setRadarChart] = useState(false)
  
const handleCharts = (chartType) =>{
  if (chartType === "line"){
    setLineChart(!lineChart);
    setBarChart(false);
    setDoughnutChart(false);
    setPieChart(false);
    setRadarChart(false);
  }else if (chartType === "bar"){
    setBarChart(!barChart);
    setLineChart(false);
    setDoughnutChart(false);
    setPieChart(false);
    setRadarChart(false);
  }else if (chartType === "doughnut"){
    setDoughnutChart(!doughnutchart);
    setLineChart(false);
    setBarChart(false);
    setPieChart(false);
    setRadarChart(false);
  }
  else if (chartType === "pie"){
    setPieChart(!piechart);
    setDoughnutChart(false);
    setLineChart(false);
    setBarChart(false);
    setRadarChart(false)
  }
  else if (chartType === "radar"){
    setDoughnutChart(false);
    setLineChart(false);
    setBarChart(false);
    setPieChart(false);
    setRadarChart(!radarchart)
  }
  
}

  return (
    <div className="App">
    <div className='container'>
    <Dropdown handleCharts={handleCharts}/>
    {lineChart && <LineChart lineChartData={chartData}/>}
     { doughnutchart && <DoughnutChart lineChartData={chartData}/>}
    {barChart && <BarChart lineChartData={chartData}/>}
    {piechart && <PieChart lineChartData={chartData}/>}
    {radarchart && <RadarChart lineChartData={chartData}/>}
    </div>
    </div>
  );
}

export default App;
