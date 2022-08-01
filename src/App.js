import { Route, Routes } from 'react-router-dom'

import MyChallengePage from './routes/MyChallengePage'
import LoginPage from './routes/LoginPage'
import styles from './routes.module.scss'
import PloggingDoingPage from './routes/PloggingDoingPage'

function App() {
  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route path="/mychallenge" element={<MyChallengePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/plogging" element={<PloggingDoingPage />} />
      </Routes>
    </div>
  )
}

export default App
