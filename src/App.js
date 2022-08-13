import { Route, Routes } from 'react-router-dom'

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

function App() {
  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route path="/mychallenge" element={<MyChallengePage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/plogging" element={<PloggingDoingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/complete" element={<CompletePage />} />
      </Routes>
    </div>
  )
}

export default App
