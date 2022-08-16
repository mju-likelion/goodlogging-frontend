import { useEffect, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Goodlogging from '../../service/goodlogging'
import plog from '../../assets/pngs/flogging.png'
import hash from '../../assets/pngs/hashtag.png'
import menu from '../../assets/pngs/menu.png'
import ToggleButton from '../../components/Buttons/ToggleButton'
import { start } from '../../redux/ploggingSlice'

import Chart from './Chart'
import styles from './mainPage.module.scss'

const MainPage = ({ percent }) => {
  const text1 = `월간 목표 ${percent || 77}% 달성 중!`
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [data, setData] = useState(null)

  const sortByDay = (arr) => {
    return arr.reduce((acc, cur) => {
      const date = `${cur.date.year}-${cur.date.month}-${cur.date.day}`
      if (acc.find((item) => item[date])) {
        return acc.map((item) => {
          if (Object.keys(item)[0] === date) {
            return {
              [date]: item[date] + cur.number,
            }
          }
          return item
        })
      }
      return [
        ...acc,
        {
          [date]: cur.number,
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
    setData(sortByDay(sortedData))
  }, [setData])

  useEffect(() => {
    getPloggingData()
  }, [getPloggingData])

  console.log(data)
  return (
    <div className={styles.mainPage}>
      <div className={styles.headPopUp}>{text1}</div>
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
            <ToggleButton />
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
        <button onClick={() => navigate('/myinfo')} className={styles.plogBtn}>
          <img src={plog} alt="plog" />
        </button>
        <button className={styles.hashBtn} onClick={() => navigate('/feed')}>
          <img src={hash} alt="hash" />
        </button>
      </div>
    </div>
  )
}

export default MainPage
