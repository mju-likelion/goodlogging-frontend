import styles from './overviewBar.module.scss'

const OverviewBar = ({ done }) => {
  return (
    <div className={styles.progress}>
      <div className={styles.progressDone} style={{ height: `${done}%` }} />
    </div>
  )
}

export default OverviewBar
