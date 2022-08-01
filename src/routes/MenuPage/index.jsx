import { useNavigate } from 'react-router-dom'

import { BackIcon } from '../../assets/svgs'

import styles from './menuPage.module.scss'

const MenuPage = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.menuPage}>
      <nav>
        <button type="button">
          <BackIcon className={styles.backIcon} />
        </button>
      </nav>
      <section className={styles.content}>
        <button className={styles.logout}>로그아웃</button>
        <div className={styles.line} />
        <button
          onClick={() => {
            navigate('/setting')
          }}
          className={styles.setting}
        >
          설정
        </button>
      </section>
    </div>
  )
}

export default MenuPage
