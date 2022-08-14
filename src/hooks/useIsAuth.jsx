import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import { logout } from '../redux/authSlice'

const { localStorage } = window

const useIsAuth = () => {
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  console.log(localStorage.getItem('token'))

  useEffect(() => {
    if (
      !auth.isAuthenticated ||
      !auth.token ||
      !localStorage.getItem('token')
    ) {
      dispatch(logout())
      navigate('/login')
    }

    if (location.pathname === '/login') {
      if (auth.isAuthenticated && auth.token) {
        navigate('/')
      }
    }
  }, [auth, dispatch, location.pathname, navigate])
}

export default useIsAuth
