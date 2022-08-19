import { useNavigate } from 'react-router-dom'

import { BackIcon } from '../../../assets/svgs'

import styles from './backButton.module.scss'

const BackButton = () => {
  const navigate = useNavigate()

  return (
    <button className={styles.backButton} onClick={() => navigate(-1)}>
      <BackIcon />
    </button>
  )
}

export default BackButton
