import { useState } from 'react';
import BarChart from './componenets/Charts/BarChart';
import DoughnutChart from './componenets/Charts/DoughnutChart';
import LineChart from './componenets/Charts/LineChart';
import { UserData } from './componenets/Data';
import Dropdown from './componenets/dropdown/Dropdown';
import './App.css'

function App() {
  const [userData,setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets:[{
      label:"Users Gained",
      data: UserData.map((data) => data.userGain)
    },],
  });
 
const [lineChart,setLineChart] = useState(false)
const [barChart,setBarChart] = useState(false)
const [doughnuchart,seDoughnutChart] = useState(false)
  
const handleCharts = (chartType) =>{
  if (chartType === "line"){
    setLineChart(!lineChart);
    setBarChart(false);
    seDoughnutChart(false)
  }else if (chartType === "bar"){
    setBarChart(!barChart);
    setLineChart(false);
    seDoughnutChart(false);
  }else if (chartType === "doughnut"){
    seDoughnutChart(!doughnuchart);
    setLineChart(false);
    setBarChart(false);
  }
  
}

  return (
    <div className="App">
    <div className='container'>
    <Dropdown handleCharts={handleCharts}/>
    {lineChart && <LineChart lineChartData={userData}/> }
     { doughnuchart && <DoughnutChart lineChartData={userData}/>}
    {barChart && <BarChart lineChartData={userData}/>}
    </div>
    </div>
  );
}

export default App;
