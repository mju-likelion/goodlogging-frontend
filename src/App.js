import { Route, Routes } from 'react-router-dom'

import MyChallengePage from './routes/MyChallengePage'
import styles from './routes.module.scss'

function App() {
  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route path="/mychallenge" element={<MyChallengePage />} />
      </Routes>
    </div>
  )
}

export default App
