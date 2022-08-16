import { Route, Routes } from 'react-router-dom'

import useIsAuth from './hooks/useIsAuth'
import MyChallengePage from './routes/MyChallengePage'
import SettingPage from './routes/SettingPage'
import LoginPage from './routes/LoginPage'
import SignupPage from './routes/SignupPage'
import MenuPage from './routes/MenuPage'
import FeedPage from './routes/FeedPage'
import MainPage from './routes/MainPage'
import CompletePage from './routes/CompletePage'
import PloggingDoingPage from './routes/PloggingDoingPage'
import styles from './routes.module.scss'
import MyinfoPage from './routes/MyinfoPage'

function App() {
  useIsAuth()
  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mychallenge" element={<MyChallengePage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/plogging" element={<PloggingDoingPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/complete" element={<CompletePage />} />
        <Route path="/myinfo" element={<MyinfoPage />} />
      </Routes>
    </div>
  )
}

export default App
