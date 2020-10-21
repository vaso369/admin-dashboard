import * as React from 'react'

function SvgComponent(props) {
  const { fill } = props
  return (
    <svg width={34} height={33} viewBox="0 0 34 33" fill="none" {...props}>
      <g clipPath="url(#prefix__clip0)">
        <path
          d="M17.45.515C8.334.515.95 7.669.95 16.499s7.385 15.984 16.5 15.984c9.114 0 16.5-7.154 16.5-15.984S26.563.515 17.45.515zm0 6.187c3.233 0 5.854 2.54 5.854 5.672 0 3.132-2.621 5.672-5.855 5.672-3.233 0-5.854-2.54-5.854-5.672 0-3.132 2.621-5.672 5.854-5.672zm0 22.172a12.918 12.918 0 01-9.747-4.396 7.45 7.45 0 016.553-3.854c.16 0 .32.026.472.07.865.272 1.77.446 2.721.446.952 0 1.863-.174 2.721-.445.154-.045.313-.071.473-.071a7.45 7.45 0 016.553 3.854 12.918 12.918 0 01-9.747 4.396z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill={fill} transform="translate(.95)" d="M0 0h33v33H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SvgComponent
