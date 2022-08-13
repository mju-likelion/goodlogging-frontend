import { useState } from 'react'

import styles from './overViewBar.module.scss'

const OverviewBar = ({ done }) => {
  const [style, setStyle] = useState({})

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      height: `${done}%`,
    }

    setStyle(newStyle)
  }, 1000)

  return (
    <div className={styles.progress}>
      <div className={styles.progressDone} style={style} />
    </div>
  )
}

export default OverviewBar
