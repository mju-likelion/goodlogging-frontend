import styles from './gnb.module.scss'

const Gnb = ({ children }) => {
  return <nav className={styles.nav}>{children}</nav>
}

export default Gnb
