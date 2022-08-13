import { useState, useEffect } from 'react'

import styles from './slider.module.scss'

const Slider = ({ sliderData }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideLength = sliderData.length
  const autoScroll = true
  const intervalTime = 5000

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
  }

  let slideInterval
  const auto = () => {
    slideInterval = setInterval(nextSlide, intervalTime)
  }

  useEffect(() => {
    if (autoScroll) {
      auto()
    }
  }, [currentSlide])
  return (
    <div className={styles.slider}>
      {sliderData.map((slide, index) => {
        return (
          <div
            className={
              index === currentSlide ? 'styles.slideCurrent' : 'styles.slide'
            }
            key={index}
          >
            {index === currentSlide && (
              <div className={styles.contents}>
                <p>{slide}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Slider
