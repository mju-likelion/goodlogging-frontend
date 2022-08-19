import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Goodlogging from '../../service/goodlogging'
import Gnb from '../../components/Gnb'
import Button from '../../components/Buttons/Button'
import BackButton from '../../components/Buttons/BackButton'
import CompleteButton from '../../components/Buttons/CompleteButton'

import styles from './settingPage.module.scss'

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

const SettingPage = () => {
  const navigate = useNavigate()
  const [local, setLocal] = useState(null)
  const [level, setLevel] = useState(null)

  const handleSubmit = async () => {
    if (!local || !level) {
      return
    }
    await Goodlogging.user(level, local)
    navigate('/')
  }

  return (
    <div className={styles.settingPage}>
      <Gnb>
        <BackButton />
        <CompleteButton onClick={handleSubmit} />
      </Gnb>
      <section className={styles.content}>
        <h1>플로깅 난이도</h1>
        <div className={styles.selector}>
          {LEVEL_NAME.map((item) => (
            <Button
              key={item}
              text={item}
              width="small"
              textColor="textBlack"
              backColor="backGrey"
              onClick={setLevel}
              isSelected={item === local}
            />
          ))}
          <h1>플로깅을 시작할 때 반영되는 개수가 달라집니다.</h1>
        </div>
        <h1>내 동네</h1>
        <div className={styles.selector}>
          {LOCAL_NAMES.map((item) => (
            <Button
              key={item}
              text={item}
              width="small"
              textColor="textBlack"
              backColor="backGrey"
              onClick={setLocal}
              isSelected={item === level}
            />
          ))}
          <h1>
            메인 화면에 뜨는 동네와 사람들의 순위가 설정에 따라 반영됩니다.
          </h1>
        </div>
      </section>
    </div>
  )
}

export default SettingPage
