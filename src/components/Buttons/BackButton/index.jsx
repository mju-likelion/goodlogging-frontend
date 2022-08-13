import { BackIcon } from '../../../assets/svgs'

import styles from './backButton.module.scss'

const BackButton = ({ onClick }) => {
  return (
    <button className={styles.backButton} onClick={() => onClick()}>
      <BackIcon />
    </button>
  )
}

export default BackButton
