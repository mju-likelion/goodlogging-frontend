import { useState } from 'react'
import { useForm } from 'react-hook-form'

import Button from '../../components/Buttons/Button'

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
  const { register, handleSubmit, formState } = useForm({
    mode: 'onChange',
  })
  const [local, setLocal] = useState(null)

  const onSubmit = (data) => {
    console.log(data)
    console.log('isValid:', formState.isValid)
  }

  return (
    <div className={styles.signupPage}>
      <h1>회원 가입</h1>
      <form className={styles.signupForm} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.textInput}
          type="email"
          placeholder="example@domain.com"
          {...register('email', {
            required: true,
            // eslint-disable-next-line no-useless-escape
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
          })}
        />
        <input
          className={styles.textInput}
          placeholder="password"
          type="password"
          {...register('password', { required: true, minLength: 8 })}
        />
        <input
          className={styles.textInput}
          placeholder="username"
          type="text"
          {...register('username', { required: true, minLength: 2 })}
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
          disabled={!formState.isValid || !local}
        />
      </form>
    </div>
  )
}

export default SignupPage
