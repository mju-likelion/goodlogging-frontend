import { Route, Routes } from 'react-router-dom'

import './routes.module.scss'
import LoginPage from './routes/LoginPage'
import MyChallengePage from './routes/MyChallengePage'
import SignupPage from './routes/SignupPage'

function App() {
  return (
    <div className="routes.module.scss">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/mychallenge" element={<MyChallengePage />} />
      </Routes>
    </div>
  )
}

export default App
