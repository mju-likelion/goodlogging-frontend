import styles from './rankProgress.module.scss'

const RankProgress = ({ ratio, count, name }) => {
  return (
    <div className={styles.progressDiv}>
      <div className={styles.rankProgress}>
        <div
          className={styles.rankProgressCount}
          style={{
            opacity: 1,
            width: `${ratio}%`,
          }}
        />
        <p className={styles.userName}>{name}</p>
      </div>
      <p className={styles.rankCount}>{count}개</p>
    </div>
  )
}

export default RankProgress
