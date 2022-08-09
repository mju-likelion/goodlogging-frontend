import flog from '../../assets/pngs/flogging.png'
import hash from '../../assets/pngs/hashtag.png'
import menu from '../../assets/pngs/menu.png'
import OverviewBar from '../../components/OverviewBar'

import styles from './mainPage.module.scss'

const DATA_1 = 50
const DATA_2 = 60
const DATA_3 = 80
const DATA_4 = 20
const DATA_5 = 40

const MainPage = ({ percent }) => {
  const text1 = `월간 목표 ${percent || 77}% 달성 중!`

  // const text2 = `지난 달 보다 ${time || 77}시간 더 했어요!`
  // const text3 = `${flooger || 56}명의 플로거가 달리는 중!`

  return (
    <div className={styles.mainPage}>
      <div className={styles.headPopUp}>{text1}</div>
      <div className={styles.startDiv}>
        <button className={styles.startBtn}>START</button>
      </div>
      <div className={styles.overviewDiv}>
        <h1 className={styles.smallTitle}>Overview</h1>
        <div className={styles.backDiv}>
          <div className={styles.buttonDiv}>토글스위치</div>
          <div className={styles.chartDiv}>
            <OverviewBar done={DATA_1} />
            <OverviewBar done={DATA_2} />
            <OverviewBar done={DATA_3} />
            <OverviewBar done={DATA_4} />
            <OverviewBar done={DATA_5} />
          </div>
        </div>
      </div>
      <div className={styles.footerDiv}>
        <button className={styles.menuBtn}>
          <img src={menu} alt="menu" />
        </button>
        <button className={styles.flogBtn}>
          <img src={flog} alt="flog" />
        </button>
        <button className={styles.hashBtn}>
          <img src={hash} alt="hash" />
        </button>
      </div>
    </div>
  )
}

export default MainPage

/*
            <button className={styles.dayVeiw}>Day</button>
            <button className={styles.weekVeiw}>Week</button>
            <button className={styles.monthVeiw}>Month</button>
            */
