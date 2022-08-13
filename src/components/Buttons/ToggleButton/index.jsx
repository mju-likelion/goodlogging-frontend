import { useState } from 'react'
import classNames from 'classnames/bind'

import styles from './toggleButton.module.scss'

const cx = classNames.bind(styles)

const ToggleButton = () => {
  const [item, setItem] = useState(null)

  const handleSelectItem = (e) => {
    setItem(e.target.innerText)
  }

  return (
    <div className={cx('wrapper')}>
      <button className={cx('button')} onClick={handleSelectItem}>
        Day
      </button>
      <button className={cx('button')} onClick={handleSelectItem}>
        Week
      </button>
      <button className={cx('button')} onClick={handleSelectItem}>
        Month
      </button>
      <div className={cx('selector', item)} />
    </div>
  )
}

export default ToggleButton
