import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { login } from '../../redux/authSlice'
import Button from '../../components/Buttons/Button'

import styles from './loginPage.module.scss'

const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit, formState } = useForm({
    mode: 'onChange',
  })

  const onSubmit = async (userInput) => {
    console.log(userInput)
    dispatch(login({ email: userInput.email, password: userInput.password }))
  }

  return (
    <form className={styles.loginPage} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputWrapper}>
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
  )
}

export default LoginPage
