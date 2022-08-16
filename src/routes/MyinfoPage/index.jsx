import { useState } from 'react'
import { Calendar } from 'react-calendar'
import { useNavigate } from 'react-router-dom'

import BackButton from '../../components/Buttons/BackButton'
import Gnb from '../../components/Gnb'
import Progress from '../../components/Progress'

import styles from './myInfoPage.module.scss'

import 'react-calendar/dist/Calendar.css'

const MyinfoPage = () => {
  const navigate = useNavigate()
  const [value, onChange] = useState(new Date())

  return (
    <div className={styles.myinfoPage}>
      <Gnb>
        <BackButton />
      </Gnb>
      <section className={styles.challengeProgress}>
        <div className={styles.title}>
          <h2>챌린지</h2>
          <button onClick={() => navigate('/mychallenge')}>더보기</button>
        </div>
        <Progress ratio={80} />
        <p>80% 달성! 조금만 더 힘내봐요!</p>
      </section>
      <section className={styles.myMedal}>
        <div className={styles.title}>
          <h2>내 업적</h2>
          <button>더보기</button>
        </div>
      </section>
      <section className={styles.calendarWrapper}>
        <h2>달력</h2>
        <Calendar
          onChange={onChange}
          value={value}
          className={styles.calendar}
        />
      </section>
    </div>
  )
}

export default MyinfoPage
