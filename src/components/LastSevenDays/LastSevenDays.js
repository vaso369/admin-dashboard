import React from 'react'
import LastSevenDaysBarChart from '../LastSevenDaysBarChart/LastSevenDaysBarChart'
import Bars from '../SVG/Bars'
import './LastSevenDays.scss'

const LastSevenDays = () => (
  <div className="lastSevenDays col-12 col-lg-12 col-xl-12 mt-3" data-testid="LastSevenDays">
    <div className=" reusable-heading col-12">
      <Bars fill="#d1d3d4" /> <h2>Last 7 days</h2>
    </div>
    <LastSevenDaysBarChart />
  </div>
)

export default LastSevenDays
