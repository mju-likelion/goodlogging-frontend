import { BackIcon } from '../../assets/svgs'

import styles from './myChallengePage.module.scss'

const MyChallengePage = () => {
  return (
    <div className={styles.myChallengePage}>
      <nav>
        <button type="button">
          <BackIcon className={styles.backIcon} />
        </button>
      </nav>
      <section className={styles.content}>
        <h1>6월 Challenge</h1>
        <div className={styles.hero}>76%</div>
        <div className={styles.progress}>
          <p>38H 16M / 50H</p>
          <div className={styles.progressBar} />
          <p>12일 남았습니다.</p>
        </div>
      </section>
    </div>
  )
}

export default MyChallengePage
