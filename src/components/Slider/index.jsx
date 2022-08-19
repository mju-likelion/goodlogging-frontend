import { useState, useEffect } from 'react'

import styles from './slider.module.scss'

const Slider = ({ onChange }) => {
  const [level, setLevel] = useState('0')

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (level === '0') {
      setProgress(0)
    } else if (level === '1') {
      setProgress(50)
    } else {
      setProgress(100)
    }
  }, [level, progress])
  const onChangeLevel = (event) => {
    setLevel(event.target.value)
  }

  useEffect(() => {
    const textLevel = {
      0: '초급',
      1: '중급',
      2: '상급',
    }[level]
    onChange(textLevel)
  }, [level, onChange])
  return (
    <div className={styles.container}>
      <div className={styles.range}>
        <input
          className={styles.slider}
          type="range"
          min="0"
          max="2"
          steps="1"
          value={level}
          onChange={onChangeLevel}
          list="levelList"
          style={{
            background: `linear-gradient(to right, #3f96ff 0%, #3f96ff  ${progress}%, #d5d4d3  ${progress}%, #d5d4d3 100%)`,
          }}
        />
        <div className={styles.dots}>
          <div
            className={styles.dotsDot}
            style={{ backgroundColor: '#3f96ff' }}
          />
          <div
            className={styles.dotsDot}
            style={{
              backgroundColor: `${progress >= 50 ? '#3f96ff' : '#d5d4d3'}`,
            }}
          />
          <div
            className={styles.dotsDot}
            style={{
              backgroundColor: `${progress >= 100 ? '#3f96ff' : '#d5d4d3'}`,
            }}
          />
        </div>
      </div>
      <datalist id="levelList" className={styles.rangeLabels}>
        <option value={0} label="초급" onClick={onChangeLevel} />
        <option value={1} label="중급" onClick={onChangeLevel} />
        <option value={2} label="고급" onClick={onChangeLevel} />
      </datalist>
    </div>
  )
}

export default Slider
