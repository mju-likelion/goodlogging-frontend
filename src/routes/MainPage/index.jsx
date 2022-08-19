import { useEffect, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Goodlogging from '../../service/goodlogging'
import plog from '../../assets/pngs/flogging.png'
import hash from '../../assets/pngs/hashtag.png'
import menu from '../../assets/pngs/menu.png'
import ToggleButton from '../../components/Buttons/ToggleButton'
import { start } from '../../redux/ploggingSlice'

import Slider from './Slider'
import Chart from './Chart'
import styles from './mainPage.module.scss'

const MainPage = ({ percent, time, person }) => {
  const [view, setView] = useState('week')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [data, setData] = useState(null)
  const arr = [
    `월간 목표 ${percent || 77}% 달성 중!`,
    `지난 달 보다 ${time || 3}시간 더 했어요!`,
    `${person || 23}명의 굿로거가 달리는 중!`,
  ]

  const sortByDay = (arr) => {
    return arr.reduce((acc, cur) => {
      const date = `${cur.date.year}-${cur.date.month}-${cur.date.day}`
      if (acc.find((item) => item.name === date)) {
        return acc.map((item) => {
          if (item.name === date) {
            return {
              name: date,
              trash: item.trash + cur.number,
            }
          }
          return item
        })
      }
      return [
        ...acc,
        {
          name: date,
          trash: cur.number,
        },
      ]
    }, [])
  }

  const getPloggingData = useCallback(async () => {
    const { data } = await Goodlogging.getPloggingInfo()

    const sortedData = data.result.map((ploggingItem) => {
      const date = new Date(ploggingItem.plogging.createdAt)
      return {
        date: {
          year: date.getFullYear(),
          month: date.getMonth(),
          day: date.getDay(),
        },
        number: ploggingItem.trashes.length,
      }
    })

    const sortedByDayData = sortByDay(sortedData)

    switch (view) {
      case 'week':
        if (sortedByDayData.length > 7) {
          setData(sortedByDayData.slice(-7))
          break
        }
        for (let i = 0, length = sortedByDayData.length; i < 7 - length; i++) {
          sortedByDayData.push({})
        }
        setData(sortedByDayData)
        break
      case 'month':
        if (sortedByDayData.length > 30) {
          setData(sortedByDayData.slice(-30))
          break
        }
        for (let i = 0, length = sortedByDayData.length; i < 30 - length; i++) {
          sortedByDayData.push({})
        }
        setData(sortedByDayData)
        break
      case 'year':
        if (sortedByDayData.length > 365) {
          setData(sortedByDayData.slice(-365))
          break
        }
        for (
          let i = 0, length = sortedByDayData.length;
          i < 365 - length;
          i++
        ) {
          sortedByDayData.push({})
        }
        setData(sortedByDayData)
        break
      default:
        break
    }
  }, [view])

  useEffect(() => {
    getPloggingData()
  }, [getPloggingData])

  return (
    <div className={styles.mainPage}>
      <div className={styles.headPopUp}>
        <Slider sliderData={arr} />
      </div>
      <div className={styles.start}>
        <button
          className={styles.startBtn}
          onClick={async () => {
            dispatch(start())
            navigate('/plogging')
          }}
        >
          START
        </button>
      </div>
      <div className={styles.overview}>
        <h1 className={styles.smallTitle}>Overview</h1>
        <div className={styles.back}>
          <div className={styles.button}>
            <ToggleButton view={view} setView={setView} />
          </div>
          <div className={styles.chart}>
            <Chart data={data} />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <button onClick={() => navigate('/menu')} className={styles.menuBtn}>
          <img src={menu} alt="menu" />
        </button>
        <button onClick={() => navigate('/feed')} className={styles.plogBtn}>
          <img src={plog} alt="feed" />
        </button>
        <button className={styles.hashBtn} onClick={() => navigate('/myinfo')}>
          <img src={hash} alt="myinfo" />
        </button>
      </div>
    </div>
  )
}

export default MainPage
