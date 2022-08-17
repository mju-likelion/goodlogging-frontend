import defaultImg from '../../assets/pngs/logImg.png'
import titleBtn from '../../assets/pngs/pencil.png'
import userImg from '../../assets/pngs/user2.png'
import check from '../../assets/pngs/check.png'

import styles from './logPage.module.scss'

const LogPage = () => {
  return (
    <form>
      <div className={styles.contents}>
        <div className={styles.head}>
          <button className={styles.check}>
            <img src={check} alt="check" />
          </button>
          <div className={styles.date}>7월 4일</div>
          <div className={styles.title}>
            <input
              className={styles.titleInput}
              type="text"
              placeholder="제목을 입력하세요" // title버튼을 눌러야 수정할 수 있도록...
            />
            <button>
              <img src={titleBtn} alt="post" />
            </button>
          </div>
        </div>
        <div className={styles.logContents}>
          <div className={styles.time}>
            <h1>1H 06M</h1>
            <h2>times</h2>
          </div>
          <div className={styles.trash}>
            <h1>38</h1>
            <h2>trashes</h2>
          </div>
          <div className={styles.map} />
          <div className={styles.userPic}>
            <img src={defaultImg} alt="defaultImg" style={{ width: '100%' }} />
          </div>
          <div className={styles.post}>
            <div className={styles.userInfo}>
              <img src={userImg} alt="user" className={styles.tempImg} />
              <p>exampleid</p>
            </div>
            <textarea
              className={styles.text}
              placeholder="여기를 눌러 입력하세요"
            />
          </div>
        </div>
      </div>
    </form>
  )
}

export default LogPage
