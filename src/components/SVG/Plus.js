import * as React from 'react'

function Plus(props) {
  const { fill } = props
  return (
    <svg width="1em" height="1em" viewBox="0 0 21 21" fill="none" {...props}>
      <path
        d="M11.48 9.154V.317H8.955v8.837H.12v2.525h8.836v8.836h2.525V11.68h8.837V9.154H11.48z"
        fill={fill}
      />
    </svg>
  )
}

export default Plus
