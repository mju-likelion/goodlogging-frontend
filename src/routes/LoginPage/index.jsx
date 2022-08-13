import { useState } from 'react'

import logo from '../../assets/pngs/darkblue.png'

import styles from './loginPage.module.scss'

const LoginPage = () => {
  const [inputId, setInputId] = useState('')
  const [inputPw, setInputPw] = useState('')

  const handleInputId = (e) => {
    setInputId(e.target.value)
  }

  const handleInputPw = (e) => {
    setInputPw(e.target.value)
  }

  const onClickLogin = () => {
    // console.log('click login')
  }

  return (
    <div className={styles.loginPage}>
      <div className={styles.inputWrapper}>
        <img className={styles.logo} src={logo} alt="logo" />
        <input
          className={styles.loginInput}
          name="id"
          value={inputId}
          onChange={handleInputId}
          placeholder="이메일"
        />
        <input
          className={styles.loginInput}
          type="password"
          name="pw"
          value={inputPw}
          onChange={handleInputPw}
          placeholder="비밀번호"
        />
      </div>
      <button className={styles.loginButton} onClick={onClickLogin}>
        로그인
      </button>
      <button className={styles.signupButton}>회원가입</button>
    </div>
  )
}

export default LoginPage
