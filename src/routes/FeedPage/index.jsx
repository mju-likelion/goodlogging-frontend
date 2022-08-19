import HotPlace from '../../service/kakao/HotPlace'
import BackButton from '../../components/Buttons/BackButton'
import Gnb from '../../components/Gnb'
import RankProgress from '../../components/RankProgess'

import styles from './feedPage.module.scss'
import { instance } from '../../util/axios'
import { useEffect, useState } from 'react'

const RANK_1 = 200
const RANK_2 = 100
const RANK_3 = 50
const RANK_4 = 40
const RANK_5 = 30
const RANK_6 = 20

const NAME_1 = '박은서'
const NAME_2 = '이유정'
const NAME_3 = '김보현'
const NAME_4 = '최현준'
const NAME_5 = '강현욱'
const NAME_6 = '배한조'

const RANK_1_RATIO = 100
const RANK_2_RATIO = (RANK_2 / RANK_1) * 100
const RANK_3_RATIO = (RANK_3 / RANK_1) * 100
const RANK_4_RATIO = (RANK_4 / RANK_1) * 100
const RANK_5_RATIO = (RANK_5 / RANK_1) * 100
const RANK_6_RATIO = (RANK_6 / RANK_1) * 100

const FeedPage = () => {
  const [sortType, setSortType] = useState('time')

  useEffect(() => {
    console.log('현재 타입은', sortType)
  }, [sortType])

  return (
    <div className={styles.contents}>
      <Gnb>
        <BackButton />
      </Gnb>
      <div className={styles.hotPlace}>
        <p className={styles.titleSmall}>HOT PLACE</p>
        <HotPlace location="구월1동" />
      </div>
      <div className={styles.rank}>
        <div className={styles.title}>
          <p className={styles.titleSmall}>RANK</p>
          <div className={styles.buttonWrapper}>
            <button
              className={styles.viewTime}
              onClick={() => setSortType('time')}
            >
              시간
            </button>
            <p className={styles.divider}>|</p>
            <button
              className={styles.viewCount}
              onClick={() => setSortType('count')}
            >
              개수
            </button>
          </div>
        </div>
        <RankProgress count={RANK_1} ratio={RANK_1_RATIO} name={NAME_1} />
        <RankProgress count={RANK_2} ratio={RANK_2_RATIO} name={NAME_2} />
        <RankProgress count={RANK_3} ratio={RANK_3_RATIO} name={NAME_3} />
        <RankProgress count={RANK_4} ratio={RANK_4_RATIO} name={NAME_4} />
        <RankProgress count={RANK_5} ratio={RANK_5_RATIO} name={NAME_5} />
        <RankProgress count={RANK_6} ratio={RANK_6_RATIO} name={NAME_6} />
      </div>
    </div>
  )
}

export default FeedPage
