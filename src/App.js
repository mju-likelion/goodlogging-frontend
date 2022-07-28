import { Route, Routes } from 'react-router-dom'

import styles from './routes.module.scss'
import LoginPage from './routes/LoginPage'

function App() {
  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  )
}

export default App
