import { useState } from 'react'

import styles from './ploggingDoingPage.module.scss'
import ProgressBar from './progressBar'

const PloggingDoingPage = () => {
  const [count, setCount] = useState(0)
  const level = 30 // 초급 중급 고급에 따라 바뀌어야 됨
  const state = {
    size: 300,
    count,
    level,
    progress: (count / level) * 100,
    strokeWidth: 15,
    circleOneStroke: '#EFEFEF',
    circleTwoStroke: '#3F97FF',
  }
  function addCount() {
    if (count === level) {
      setCount(0)
    } else {
      setCount(count + 1)
    }
  }
  const clickMenu = () => {
    // console.log('clicked menu')
  }

  let timerId
  let time = 0
  const stopwatch = document.getElementById('stopwatch')
  let hour, min, sec

  function printTime() {
    time++
    stopwatch.innerText = getTimeFormatString()
  }

  // 시계 시작 - 재귀호출로 반복실행
  // eslint-disable-next-line no-unused-vars
  function startClock() {
    printTime()
    stopClock()
    timerId = setTimeout(startClock, 1000)
  }

  // 시계 중지
  function stopClock() {
    if (timerId != null) {
      clearTimeout(timerId)
    }
  }

  // 시간(int)을 시, 분, 초 문자열로 변환
  function getTimeFormatString() {
    hour = parseInt(String(time / (60 * 60)))
    min = parseInt(String((time - hour * 60 * 60) / 60))
    sec = time % 60

    return (
      String(hour).padStart(2, '0') +
      ':' +
      String(min).padStart(2, '0') +
      ':' +
      String(sec).padStart(2, '0')
    )
  }

  return (
    <div className={styles.ploggingWrap}>
      <div>
        <div className={styles.menu}>
          <button onClick={clickMenu}>
            <img alt="menu" src="img/menubar.png" />
          </button>
        </div>
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
              <button className={styles.finishButton} onClick="stopClock()">
                끝내기
              </button>
              <div className={styles.stopwatchWrap}>
                <h1 className={styles.stopwatch}>00:00:00</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PloggingDoingPage
