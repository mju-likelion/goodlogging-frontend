import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'

import cheers from '../../assets/pngs/cheers.png'
import plant from '../../assets/pngs/plant.png'
import medal from '../../assets/pngs/medal.png'

import styles from './completePage.module.scss'

const cx = classNames.bind(styles)

const CompletePage = () => {
  const [mounted, isMounted] = useState(false)

  useEffect(() => {
    isMounted(true)
  }, [])

  return (
    <div className={cx('completePage')}>
      <h1>플로깅 완료</h1>
      <div className={cx('content', { isMounted: mounted })}>
        <div className={cx('bedges')}>
          <img src={medal} alt="medal" />
          <img src={medal} alt="medal" />
          <img src={medal} alt="medal" />
        </div>
        <p className={cx('description')}>
          <mark>94개</mark> 줍기 달성!
        </p>
        <div className={cx('time')}>
          <img src={plant} alt="plant" />
          <p>01H 06M</p>
          <img src={plant} alt="plant" />
        </div>
        <p className={cx('guide')}>주운 쓰레기는 꼭 분리수거 해주세요!</p>
        <p className={cx('nextStep')}>화면 클릭시 피드화면으로 넘어갑니다.</p>
      </div>
      <div className={cx('box1')} />
      <div className={cx('box2')} />
      <div className={cx('box3')} />
      <div className={cx('box4')} />
      <div className={cx('box5')} />
      <div className={cx('box6')} />
      <div className={cx('box7')} />
      <div className={cx('box8')} />
      <div className={cx('box9')} />
      <div className={cx('box10')} />
      <img src={cheers} alt="cheers" className={cx('cheers')} />
    </div>
  )
}

export default CompletePage
