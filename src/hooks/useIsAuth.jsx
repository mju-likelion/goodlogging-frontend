import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import { refresh } from '../redux/authSlice'

const { localStorage } = window

const useIsAuth = () => {
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const storedToken = localStorage.getItem('token')
    if (storedToken && !auth.isAuthenticated) {
      dispatch(refresh(storedToken))
    }

    if (location.pathname === '/signup') {
      if (auth.isAuthenticated && auth.token) {
        navigate('/')
      }
      return
    }

    if (location.pathname === '/login') {
      if (auth.isAuthenticated && auth.token) {
        navigate('/')
      }
    }
  }, [auth, dispatch, location.pathname, navigate])
}

export default useIsAuth
