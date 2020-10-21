import React from 'react'
// import ProgressIcon from '../../assets/icons/circle-chart.svg'
import CircleProgress from '../CircleProgress/CircleProgress'
import PieProgress from '../PieProgress/PieProgress'
import CircleChart from '../SVG/CircleChart'
import './TodaysProgress.scss'

const TodaysProgress = () => (
  <div className="todaysProgress col-12 col-lg-12 col-xl-3" data-testid="TodaysProgress">
    <div className="reusable-heading col-12">
      <CircleChart fill="#d1d3d4" /> <h2>Today progress</h2>

    </div>
    <div
      className="row"
      style={{
        height: '100%',
      }}
    >
      <PieProgress />
      <CircleProgress />

    </div>
  </div>
)

export default TodaysProgress
