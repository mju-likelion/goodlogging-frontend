import { useEffect, useState } from 'react'

import styles from './progress.module.scss'

const Progress = ({ ratio }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setProgress(ratio)
  }, [ratio])

  return (
    <div className={styles.progress}>
      <div
        className={styles.progressDone}
        style={{ width: `${progress}%`, opacity: 1 }}
      />
    </div>
  )
}

export default Progress
