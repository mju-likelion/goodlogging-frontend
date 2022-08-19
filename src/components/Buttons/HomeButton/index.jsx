import { useNavigate } from 'react-router-dom'

import { HomeIcon } from '../../../assets/svgs'

import styles from './homeButton.module.scss'

const HomeButton = () => {
  const navigate = useNavigate()

  return (
    <button className={styles.homeButton} onClick={() => navigate('/')}>
      <HomeIcon />
    </button>
  )
}

export default HomeButton
