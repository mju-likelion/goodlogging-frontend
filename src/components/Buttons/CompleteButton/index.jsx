import styles from './completeButton.module.scss'

const CompleteButton = ({ onClick }) => {
  return (
    <button className={styles.completeButton} onClick={() => onClick()}>
      완료
    </button>
  )
}

export default CompleteButton
