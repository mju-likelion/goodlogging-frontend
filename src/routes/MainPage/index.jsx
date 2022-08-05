import styles from './mainPage.module.scss'

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
          <div className={styles.buttonDiv}>
            <button className={styles.dayVeiw}>Day</button>
            <button className={styles.weekVeiw}>Week</button>
            <button className={styles.monthVeiw}>Month</button>
          </div>
        </div>
      </div>
      <div className={styles.footerDiv}>
        <button className={styles.menuBtn}>
          <img src="..\..\src\assets\pngs\menu.png" alt="menu" />
        </button>
        <button className={styles.flogBtn}>
          <img src="src\assets\pngs\flogging.png" alt="flog" />
        </button>
        <button className={styles.hashBtn}>
          <img src="src\assets\pngs\hashtag.png" alt="hash" />
        </button>
      </div>
    </div>
  )
}

export default MainPage
