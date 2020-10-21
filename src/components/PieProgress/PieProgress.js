import React, { PureComponent } from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'

const data = [
  {
    name: 'Group A', value: 400,
  },
  {
    name: 'Group B', value: 300,
  },
  {
    name: 'Group C', value: 300,
  },
  {
    name: 'Group D', value: 200,
  },
]

const COLORS = ['#1c5b7b', '#1c5b7b', ' #ffb275', '#1c5b7b']

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';

  render() {
    return (
      <ResponsiveContainer height="50%" width="100%">
        <PieChart
          width="100%"
          height="100%"
        >
          <Pie
            className="nesto"
            data={data}
            cx={this.props.width / 2}
            cy={this.props.width / 2}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            style={{
              height: 900,

            }}
          >
            {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    )
  }
}
