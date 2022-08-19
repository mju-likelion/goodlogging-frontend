import { useState, useRef, useEffect } from 'react'

import styles from './slider.module.scss'

const colors = ['transparent', 'transparent', 'transparent']
const delay = 2500

function Slide({ sliderData }) {
  const [index, setIndex] = useState(0)
  const timeoutRef = useRef(null)

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1,
        ),
      delay,
    )

    return () => {
      resetTimeout()
    }
  }, [index])

  return (
    <div className={styles.slideshow}>
      <div
        className={styles.slideshowSlider}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {sliderData.map((data, index) => (
          <div
            className={styles.slide}
            key={index}
            style={{ backgroundColor: 'transparent' }}
          >
            {data}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slide
