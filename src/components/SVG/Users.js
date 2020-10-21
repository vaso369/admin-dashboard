import * as React from 'react'

function Users(props) {
  const { fill } = props
  return (
    <svg width="1em" height="1em" viewBox="0 0 21 21" fill="none" {...props}>
      <g clipPath="url(#prefix__clip0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.955 18.197s-1.262 0-1.262-1.262 1.262-5.05 6.312-5.05c5.05 0 6.312 3.788 6.312 5.05s-1.263 1.262-1.263 1.262H8.955zm5.05-7.574a3.787 3.787 0 100-7.574 3.787 3.787 0 000 7.574zm-7.302 7.574a2.825 2.825 0 01-.272-1.262c0-1.71.858-3.472 2.443-4.696a7.984 7.984 0 00-2.443-.354c-5.05 0-6.312 3.788-6.312 5.05s1.262 1.262 1.262 1.262h5.322zM5.8 10.623a3.156 3.156 0 100-6.312 3.156 3.156 0 000 6.312z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path
            fill={fill}
            transform="translate(.119 .524)"
            d="M0 0h20.198v20.198H0z"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Users
