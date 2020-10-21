import React from 'react'
import { useSelector } from 'react-redux'
import LastSevenDays from '../../components/LastSevenDays/LastSevenDays'
import News from '../../components/News/News'
import TodaysProgress from '../../components/TodaysProgress/TodaysProgress'
import './Main.scss'

const Main = () => {
  const { theme } = useSelector((state) => state.theme)
  return (
    <div className={`${theme} main p-3`} data-testid="Main">
      <div className="row no-gutters justify-content-between">
        <News />
        <TodaysProgress />
        <LastSevenDays />
      </div>
    </div>
  )
}
export default Main
