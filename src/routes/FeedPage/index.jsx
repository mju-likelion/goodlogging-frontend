import { useCallback, useEffect, useRef, useState } from 'react'

import HotPlace from '../../service/kakao/HotPlace'
import BackButton from '../../components/Buttons/BackButton'
import Gnb from '../../components/Gnb'
import RankProgress from '../../components/RankProgess'
import HomeButton from '../../components/Buttons/HomeButton'
import Goodlogging from '../../service/goodlogging'

import styles from './feedPage.module.scss'

const FeedPage = () => {
  const [sortType, setSortType] = useState('time')
  const [userRank, setUserRank] = useState([])
  const maxValue = useRef(0)

  const findMaxTarget = useCallback(
    (users) => {
      // max 값 구하기
      for (const i of users) {
        if (sortType === 'time') {
          maxValue.current = Math.max(maxValue.current, i.plogging)
        } else {
          maxValue.current = Math.max(maxValue.current, i.trash)
        }
      }

      // ratio 구하기
      for (const i of users) {
        if (sortType === 'time') {
          if (i.plogging === maxValue.current) {
            Object.assign(i, { ratio: 100 })
          } else {
            Object.assign(i, { ratio: (i.plogging / maxValue.current) * 100 })
          }
        } else {
          if (i.trash === maxValue.current) {
            Object.assign(i, { ratio: 100 })
          } else {
            Object.assign(i, { ratio: (i.trash / maxValue.current) * 100 })
          }
        }
      }
    },
    [sortType],
  )

  const fetchRank = useCallback(async () => {
    const { data } = await Goodlogging.inquireFeed(sortType)
    const { users } = data
    setUserRank(users)
    findMaxTarget(users)
    console.log(users)
    return data
  }, [findMaxTarget, sortType])

  useEffect(() => {
    fetchRank()
  }, [fetchRank])

  return (
    <div className={styles.contents}>
      <Gnb>
        <BackButton />
        <HomeButton />
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
        {userRank &&
          userRank.map((user) => (
            <RankProgress
              key={user.username}
              name={user.username}
              plogging={user.plogging}
              count={user.trash}
              ratio={user.ratio}
            />
          ))}
      </div>
    </div>
  )
}

export default FeedPage
