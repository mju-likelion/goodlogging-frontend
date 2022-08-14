import { useState, useEffect } from 'react'

import BackButton from '../../components/Buttons/BackButton'
import Gnb from '../../components/Gnb'

import styles from './ploggingDoingPage.module.scss'
import ProgressBar from './ProgressBar'

const PloggingDoingPage = () => {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(0)
  const [timerOn, setTimeOn] = useState(true)
  // const [color, setColor] = useState('#3F97FF')

  const level = 30 // 초급 중급 고급에 따라 바뀌어야 됨
  const myprogress = (count / level) * 100
  let state = {
    size: 300,
    progress: myprogress,
    strokeWidth: 15,
    circleOneStroke: '#3F97FF',
    circleTwoStroke: '#EFEFEF',
  }
  if (myprogress >= 100) {
    state = {
      size: 300,
      progress: myprogress,
      strokeWidth: 15,
      circleOneStroke: '#3F97FF',
      circleTwoStroke: '#4D377B',
    }
  }

  function addCount() {
    setCount(count + 1)
  }

  useEffect(() => {
    let interval = null

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 10)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [timerOn])

  return (
    <div className={styles.ploggingWrap}>
      <div>
        <Gnb>
          <BackButton />
        </Gnb>
        <div>
          <div className={styles.progressOutWrap}>
            <ProgressBar className={styles.progressWrap} {...state} />
            <div className={styles.numberWrap}>
              <button className={styles.trashCounter} onClick={addCount}>
                {count}
              </button>
              <div className={styles.goal}>
                {count}/{level}
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className={styles.stopwatchWrap}>
                <button
                  className={styles.finishButton}
                  onClick={() => setTimeOn(false)}
                >
                  끝내기
                </button>
                <div className={styles.stopwatch}>
                  <span>
                    {('0' + Math.floor((time / 3600000) % 60)).slice(-2)}:
                  </span>
                  <span>
                    {('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
                  </span>
                  <span>
                    {('0' + Math.floor((time / 1000) % 60)).slice(-2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PloggingDoingPage
