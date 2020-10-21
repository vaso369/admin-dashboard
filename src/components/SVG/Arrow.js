import * as React from 'react'

function ArrowIcon(props) {
  const { fill } = props
  return (
    <svg width="1em" height="1em" viewBox="0 0 7 12" fill="none" {...props}>
      <path
        d="M.246 9.652l3.703-3.703L.246 2.246.986.765 6.17 5.949.986 11.133l-.74-1.481z"
        fill={fill}
      />
    </svg>
  )
}

export default ArrowIcon
