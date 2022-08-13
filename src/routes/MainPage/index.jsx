import { useNavigate } from 'react-router-dom'

import plog from '../../assets/pngs/flogging.png'
import hash from '../../assets/pngs/hashtag.png'
import menu from '../../assets/pngs/menu.png'

import Chart from './Chart'
import styles from './mainPage.module.scss'

const data = [
  {
    name: 'DAY_1',
    cnt: 58,
  },
  {
    name: 'DAY_2',
    cnt: 62,
  },
  {
    name: 'DAY_3',
    cnt: 45,
  },
  {
    name: 'DAY_4',
    cnt: 12,
  },
  {
    name: 'DAY_5',
    cnt: 38,
  },
]

const MainPage = ({ percent }) => {
  const text1 = `월간 목표 ${percent || 77}% 달성 중!`
  const navigate = useNavigate()

  return (
    <div className={styles.mainPage}>
      <div className={styles.headPopUp}>{text1}</div>
      <div className={styles.start}>
        <button className={styles.startBtn}>START</button>
      </div>
      <div className={styles.overview}>
        <h1 className={styles.smallTitle}>Overview</h1>
        <div className={styles.back}>
          <div className={styles.button}>토글스위치</div>
          <div className={styles.chart}>
            <Chart data={data} />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <button
          onClick={() => {
            navigate('/menu')
          }}
          className={styles.menuBtn}
        >
          <img src={menu} alt="menu" />
        </button>
        <button
          onClick={() => {
            navigate('/plogging')
          }}
          className={styles.plogBtn}
        >
          <img src={plog} alt="plog" />
        </button>
        <button
          className={styles.hashBtn}
          onClick={() => {
            navigate('/feed')
          }}
        >
          <img src={hash} alt="hash" />
        </button>
      </div>
    </div>
  )
}

export default MainPage
