import * as React from 'react'

function Settings(props) {
  const { fill } = props
  return (
    <svg width={33} height={33} viewBox="0 0 33 33" fill="none" {...props}>
      <path
        d="M32.592 13.992l-3.689-1.1a12.806 12.806 0 00-1.046-2.563l1.806-3.377a.67.67 0 00-.121-.792L26.91 3.52a.672.672 0 00-.793-.12L22.76 5.191a12.8 12.8 0 00-2.598-1.1L19.06.452A.67.67 0 0018.41 0h-3.722a.672.672 0 00-.638.473l-1.101 3.63a12.81 12.81 0 00-2.62 1.1L7.024 3.421a.672.672 0 00-.793.121L3.556 6.15a.67.67 0 00-.12.792l1.783 3.3c-.462.826-.832 1.7-1.101 2.607l-3.645 1.1a.672.672 0 00-.473.638v3.718a.67.67 0 00.473.638l3.667 1.1c.272.892.642 1.751 1.101 2.563L3.435 26.06a.67.67 0 00.121.792l2.632 2.629a.672.672 0 00.793.121l3.402-1.815c.805.434 1.654.78 2.533 1.034l1.1 3.707a.67.67 0 00.64.473h3.721a.672.672 0 00.639-.473l1.1-3.718a12.812 12.812 0 002.511-1.034l3.425 1.826a.672.672 0 00.792-.121l2.632-2.629a.67.67 0 00.12-.792l-1.827-3.41c.438-.8.788-1.644 1.046-2.519l3.71-1.1a.672.672 0 00.474-.638v-3.75a.67.67 0 00-.407-.65zM16.549 22.55a6.06 6.06 0 01-5.595-3.735 6.045 6.045 0 011.313-6.593A6.057 6.057 0 0122.605 16.5a6.047 6.047 0 01-1.774 4.278 6.06 6.06 0 01-4.282 1.772z"
        fill={fill}
      />
    </svg>
  )
}

export default Settings