import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import Goodlogging from '../../service/goodlogging'
import Button from '../../components/Buttons/Button'
import Slider from '../../components/Slider'

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

const LEVEL_NAME = ['초급', '중급', '고급']

const SignupPage = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState } = useForm({
    mode: 'onChange',
  })
  const [local, setLocal] = useState(null)
  const [level, setLevel] = useState(null)

  const onSubmit = async (userInput) => {
    await Goodlogging.createUser(
      userInput.username,
      userInput.email,
      userInput.password,
      level,
      local,
    )
    navigate('/login')
  }

  return (
    <div className={styles.signupPage}>
      <h1>회원가입</h1>
      <form className={styles.signupForm} onSubmit={handleSubmit(onSubmit)}>
        <p className={styles.label}>이메일</p>
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
        <p className={styles.label}>ID</p>
        <input
          className={styles.textInput}
          placeholder="password"
          type="password"
          {...register('password', { required: true, minLength: 8 })}
        />
        <p className={styles.label}>비밀번호</p>
        <input
          className={styles.textInput}
          placeholder="username"
          type="text"
          {...register('username', { required: true, minLength: 2 })}
        />
        <p className={styles.label}>지역</p>
        <div className={styles.localSelector}>
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
        <p className={styles.label}>나의 플로깅 실력</p>
        <Slider />
        <Button
          text="회원가입 완료"
          width="large"
          height="tall"
          textColor="textWhite"
          backColor="backBlue"
          textSize="textLarge"
          type="submit"
          disabled={!formState.isValid || !local || !level}
        />
      </form>
    </div>
  )
}

export default SignupPage
