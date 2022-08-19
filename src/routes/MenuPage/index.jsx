import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { logout } from '../../redux/authSlice'
import Gnb from '../../components/Gnb'
import BackButton from '../../components/Buttons/BackButton'

import styles from './menuPage.module.scss'

const MenuPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }

  return (
    <div className={styles.menuPage}>
      <Gnb>
        <BackButton />
      </Gnb>
      <section className={styles.content}>
        <button className={styles.logout} onClick={handleLogout}>
          로그아웃
        </button>
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
