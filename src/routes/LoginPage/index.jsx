import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import { useEffect } from 'react'

import Button from '../../components/Buttons/Button'
import { login } from '../../redux/authSlice'
import logo from '../../assets/pngs/darkblue.png'

import styles from './loginPage.module.scss'
import 'react-toastify/dist/ReactToastify.css'

const LoginPage = () => {
  const dispatch = useDispatch()
  const { error } = useSelector((state) => state.auth)
  const navigate = useNavigate()

  const { register, handleSubmit, formState } = useForm({
    mode: 'onChange',
  })

  const onSubmit = async (userInput) => {
    dispatch(login({ email: userInput.email, password: userInput.password }))
  }

  useEffect(() => {
    error &&
      toast.warn('이메일 혹은 비밀번호가 틀립니다', {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
  }, [error])

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form className={styles.loginPage} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputWrapper}>
          <img className={styles.logo} src={logo} alt="logo" />
          <input
            className={styles.loginInput}
            placeholder="이메일"
            {...register('email', {
              required: true,
              // eslint-disable-next-line no-useless-escape
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
            })}
          />
          <input
            className={styles.loginInput}
            type="password"
            placeholder="비밀번호"
            {...register('password', { required: true, minLength: 4 })}
          />
        </div>
        <Button
          text="로그인"
          width="large"
          height="tall"
          textColor="textWhite"
          backColor="backBlue"
          textSize="textLarge"
          type="submit"
          disabled={!formState.isValid}
        />
        <button
          className={styles.signupButton}
          onClick={() => {
            navigate('/signup')
          }}
        >
          회원가입
        </button>
      </form>
    </>
  )
}

export default LoginPage
