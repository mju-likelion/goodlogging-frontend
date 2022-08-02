import React from 'react'

import styles from './progressStyle.module.scss'

const Progress = ({ done }) => {
  const [style, setStyle] = React.useState({})

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    }

    setStyle(newStyle)
  }, 1000)

  return (
    <div className={styles.progress}>
      <div className={styles.progressDone} style={style} />
    </div>
  )
}

export default Progress
