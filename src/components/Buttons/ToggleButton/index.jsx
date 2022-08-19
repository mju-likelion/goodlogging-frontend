import classNames from 'classnames/bind'

import styles from './toggleButton.module.scss'

const cx = classNames.bind(styles)

const ToggleButton = ({ view, setView }) => {
  const handleSelectItem = (e) => {
    setView(e.target.innerText.toLowerCase())
  }

  return (
    <div className={cx('wrapper')}>
      <button className={cx('button')} onClick={handleSelectItem}>
        Week
      </button>
      <button className={cx('button')} onClick={handleSelectItem}>
        Month
      </button>
      <button className={cx('button')} onClick={handleSelectItem}>
        Year
      </button>
      <div className={cx('selector', view)} />
    </div>
  )
}

export default ToggleButton
