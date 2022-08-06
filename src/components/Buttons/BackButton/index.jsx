import { BackIcon } from '../../../assets/svgs'

import styles from './backButton.module.scss'

const BackButton = () => {
  return (
    <button className={styles.backButton}>
      <BackIcon />
    </button>
  )
}

export default BackButton
