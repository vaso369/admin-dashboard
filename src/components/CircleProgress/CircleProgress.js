import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import ChangingProgressProvider from './ChangingProgressProvider'
import './CircleProgress.scss'

const arrayValues = []
for (let i = 0; i <= 82; i++) {
  arrayValues.push(i)
}
const CircleProgress = () => (
  <div className="CircleProgress" data-testid="CircleProgress">
    <ChangingProgressProvider values={arrayValues}>
      {(value) => (
        <CircularProgressbar
          value={value}
          text={`${value}%`}
          circleRatio={1}
          styles={buildStyles({
            rotation: 1 / 4,
            strokeLinecap: 'butt',
            trailColor: '#ffb275',

          })}
          style={{
            stroke: '#1c5b7b !important',
          }}
        />
      )}
    </ChangingProgressProvider>
  </div>
)

CircleProgress.propTypes = {
}

CircleProgress.defaultProps = {
}

export default CircleProgress
