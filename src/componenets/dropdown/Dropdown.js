import React from 'react'
import './Dropdown.css'

const Dropdown = ({handleCharts}) => {
  return (
    <div>
    <div className="dropdown">
  <span>Charts</span>
  <div className="dropdown-content">
    <p onClick= { () => handleCharts("line")}> Line Chart</p>
    <p onClick={ () => handleCharts("bar")}>Bar Chart</p>
    <p onClick={ () => handleCharts("doughnut")}>Doughnut Chart</p>
    <p onClick={ () => handleCharts("pie")}>Pie Chart</p>
    <p onClick={ () => handleCharts("radar")}>Radar Chart</p>
  </div>
</div>
    </div>
  )
}

export default Dropdown