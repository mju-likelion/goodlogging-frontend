import { Route, Routes } from 'react-router-dom'

import MyChallengePage from './routes/MyChallengePage'
import SettingPage from './routes/SettingPage'
import LoginPage from './routes/LoginPage'
import SignupPage from './routes/SignupPage'
import styles from './routes.module.scss'
import MenuPage from './routes/MenuPage'

function App() {
  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route path="/mychallenge" element={<MyChallengePage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </div>
  )
}

export default App
