import { useState } from 'react'

import Button from '../../components/Button'
import useInput from '../../hooks/useInput'

import styles from './signupPage.module.scss'

const LOCAL_NAMES = [
  '서울',
  '부산',
  '인천',
  '대구',
  '광주',
  '대전',
  '울산',
  '경기',
  '강원',
  '충북',
  '충남',
  '전북',
  '전남',
  '경북',
  '경남',
  '제주',
  '세종',
]

const SignupPage = () => {
  const [local, setLocal] = useState(null)

  const {
    handleInputChange: handleEmailChange,
    handleBlur: handleEmailBlur,
    isValid: isEmailValid,
    // isTouched: isEmailTouched,
  } = useInput('email')

  const {
    handleInputChange: handlePasswordChange,
    handleBlur: handlePasswordBlur,
    isValid: isPasswordValid,
    // isTouched: isPasswordTouched,
  } = useInput('password')

  const {
    handleInputChange: handleUsernameChange,
    handleBlur: handleUsernameBlur,
    isValid: isUsernameValid,
    // isTouched: isUsernameTouched,
  } = useInput('username')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isEmailValid && isUsernameValid && isPasswordValid) {
      console.log('전송')
    }
  }

  return (
    <div className={styles.signupPage}>
      <h1>회원 가입</h1>
      <form className={styles.signupForm} onSubmit={handleSubmit}>
        <input
          className={styles.textInput}
          type="email"
          placeholder="example@domain.com"
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
        />
        <input
          className={styles.textInput}
          placeholder="password"
          type="text"
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
        />
        <input
          className={styles.textInput}
          placeholder="username"
          type="text"
          onChange={handleUsernameChange}
          onBlur={handleUsernameBlur}
        />
        <p className={styles.label}>지역</p>
        <div className={styles.selector}>
          {LOCAL_NAMES.map((item) => (
            <Button
              key={item}
              text={item}
              width="small"
              textColor="textBlack"
              backColor="backGrey"
              onClick={setLocal}
              isSelected={item === local}
              type="button"
            />
          ))}
        </div>
        <Button
          text="회원가입 완료"
          width="large"
          height="tall"
          textColor="textWhite"
          backColor="backBlue"
          textSize="textLarge"
          type="submit"
        />
      </form>
    </div>
  )
}

export default SignupPage
