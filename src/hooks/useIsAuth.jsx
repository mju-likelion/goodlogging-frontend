import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

const useIsAuth = () => {
  const auth = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const location = useLocation()

  console.log(location)

  useEffect(() => {
    if (!auth.isAuthenticated || !auth.token) {
      navigate('/login')
    }

    if (location.pathname === '/login') {
      if (auth.isAuthenticated && auth.token) {
        navigate('/')
      }
    }
  }, [auth, location.pathname, navigate])
}

export default useIsAuth
