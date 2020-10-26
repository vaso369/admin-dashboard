import React, { PureComponent } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: '1.01.2020', тим1: 4000, тим2: 2400, amt: 2400,
  },
  {
    name: '1.01.2020', тим1: 3000, тим2: 1398, amt: 2210,
  },
  {
    name: '1.01.2020', тим1: 2000, тим2: 9800, amt: 2290,
  },
  {
    name: '1.01.2020', тим1: 2780, тим2: 3908, amt: 2000,
  },
  {
    name: '1.01.2020', тим1: 1890, тим2: 4800, amt: 2181,
  },
  {
    name: '1.01.2020', тим1: 2390, тим2: 3800, amt: 2500,
  },
  {
    name: '1.01.2020', тим1: 3490, тим2: 4300, amt: 2100,
  },
]

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (
      <div style={{
        width: '100%',
        height: '35vh',

      }}
      >
        <ResponsiveContainer>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 15, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
            />
            <XAxis
              dataKey="name"
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="тим1"
              fill="#1c5b7b"
            />
            <Bar
              dataKey="тим2"
              fill="#ffb275"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
