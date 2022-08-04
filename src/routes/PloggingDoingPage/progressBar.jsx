import { useEffect, useState, useRef } from 'react'

import styles from './ploggingDoingPage.module.scss'

const ProgressBar = ({
  size,
  progress,
  strokeWidth,
  circleOneStroke,
  circleTwoStroke,
}) => {
  const [offset, setOffset] = useState(0)
  const circleRef = useRef(null)

  const center = size / 2
  const radius = size / 2 - strokeWidth / 2
  const circumference = 2 * Math.PI * radius

  setTimeout(() => {
    circleRef.current.style = 'transition: stroke-dashoffset 300ms ease-out'
  }, 500)

  useEffect(() => {
    const progressOffset = (100 - progress / 100) * circumference

    setOffset(progressOffset)
  }, [setOffset, progress, circumference, offset])

  return (
    <div>
      <svg width={size} height={size}>
        <circle
          stroke={circleOneStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth - 0.5}
          fill="none"
        />
        <circle
          className={styles.inCircle}
          ref={circleRef}
          stroke={circleTwoStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          fill="none"
        />
      </svg>
    </div>
  )
}

export default ProgressBar
