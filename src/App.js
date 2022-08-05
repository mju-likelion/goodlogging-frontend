import { Route, Routes } from 'react-router-dom'

import MyChallengePage from './routes/MyChallengePage'
import SettingPage from './routes/SettingPage'
import LoginPage from './routes/LoginPage'
import SignupPage from './routes/SignupPage'
import styles from './routes.module.scss'
import MenuPage from './routes/MenuPage'
import FeedPage from './routes/FeedPage'
import MainPage from './routes/MainPage'

function App() {
  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route path="/mychallenge" element={<MyChallengePage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  )
}

export default App
