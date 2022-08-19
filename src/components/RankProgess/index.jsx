import styles from './rankProgress.module.scss'

const RankProgress = ({ ratio, count, plogging, name }) => {
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
      {count >= 0 ? (
        <p className={styles.rankCount}>{count}개</p>
      ) : (
        <p className={styles.rankCount}>{plogging}초</p>
      )}
    </div>
  )
}

export default RankProgress
