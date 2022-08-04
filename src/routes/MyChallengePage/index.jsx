import { BackIcon } from '../../assets/svgs'
import Progress from '../../components/Progress'

import styles from './myChallengePage.module.scss'

const MyChallengePage = () => {
  const now = new Date()
  const todayMonth = now.getMonth() + 1
  const todayYear = now.getFullYear()
  const todayDate = now.getDate()

  const lastDay = new Date(todayYear, todayMonth + 1, 0)
  const lastDate = lastDay.getDate()
  const leftDate = lastDate - todayDate

  const challengeHour = 50
  const myHour = 38
  const myMin = 30
  const myMinTohour = myMin / 60
  const leftTime = challengeHour - myHour - myMinTohour

  const ratio = 100 - (leftTime / challengeHour) * 100

  return (
    <div className={styles.myChallengePage}>
      <nav>
        <button type="button">
          <BackIcon className={styles.backIcon} />
        </button>
      </nav>
      <section className={styles.content}>
        <h1>{todayMonth}월 Challenge</h1>
        <div
          className={styles.hero}
          style={{ backgroundImage: 'url(/assets/challenge.jpg)' }}
        >
          {ratio}%
        </div>
        <div className={styles.progress}>
          <p className={styles.leftHour}>
            {myHour}H {myMin}M / {challengeHour}H
          </p>
          <Progress ratio={ratio} />
          <p className={styles.leftDay}>{leftDate}일 남았습니다.</p>
        </div>
      </section>
    </div>
  )
}

export default MyChallengePage
