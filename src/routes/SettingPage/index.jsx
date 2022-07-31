import { BackIcon } from '../../assets/svgs'

import styles from './settingPage.module.scss'

const settingPage = () => {
  return (
    <div className={styles.settingPage}>
      <nav>
        <button type="button">
          <BackIcon className={styles.backIcon} />
        </button>
        <button className={styles.doneIcon} type="button">
          완료
        </button>
      </nav>
      <section className={styles.content}>
        <h1>플로깅 난이도</h1>
        <div className={styles.buttonDiv}>
          <button className={styles.levelBtn} type="button">
            초급
          </button>
          <button className={styles.levelBtn} type="button">
            중급
          </button>
          <button className={styles.levelBtn} type="button">
            고급
          </button>
          <h1>플로깅을 시작할 때 반영되는 개수가 달라집니다.</h1>
        </div>
        <h1>내 동네</h1>
        <div className={styles.buttonDiv}>
          <button className={styles.regionBtn} type="button">
            서울
          </button>
          <button className={styles.regionBtn} type="button">
            부산
          </button>
          <button className={styles.regionBtn} type="button">
            인천
          </button>
          <button className={styles.regionBtn} type="button">
            대구
          </button>
        </div>
        <div className={styles.buttonDiv}>
          <button className={styles.regionBtn} type="button">
            광주
          </button>
          <button className={styles.regionBtn} type="button">
            대전
          </button>
          <button className={styles.regionBtn} type="button">
            울산
          </button>
          <button className={styles.regionBtn} type="button">
            경기
          </button>
        </div>
        <div className={styles.buttonDiv}>
          <button className={styles.regionBtn} type="button">
            강원
          </button>
          <button className={styles.regionBtn} type="button">
            충북
          </button>
          <button className={styles.regionBtn} type="button">
            충남
          </button>
          <button className={styles.regionBtn} type="button">
            전북
          </button>
        </div>
        <div className={styles.buttonDiv}>
          <button className={styles.regionBtn} type="button">
            전남
          </button>
          <button className={styles.regionBtn} type="button">
            경북
          </button>
          <button className={styles.regionBtn} type="button">
            경남
          </button>
          <button className={styles.regionBtn} type="button">
            제주
          </button>
        </div>
        <div className={styles.lastButtonDiv}>
          <button className={styles.regionBtn} type="button">
            세종
          </button>
          <h1>플로깅을 시작할 때 반영되는 개수가 달라집니다.</h1>
        </div>
      </section>
    </div>
  )
}

export default settingPage
