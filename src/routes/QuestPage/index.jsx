import { useState } from 'react'

import Gnb from '../../components/Gnb'
import BackButton from '../../components/Buttons/BackButton'
import lock from '../../assets/pngs/lock.png'
import newbie from '../../assets/pngs/newbie.png'
import start from '../../assets/pngs/start.png'
// import park from '../../assets/pngs/park.png'
// import bronze from '../../assets/pngs/bronze.png'
// import silver from '../../assets/pngs/silver.png'
// import gold from '../../assets/pngs/gold.png'
// import challenger from '../../assets/pngs/challenger.png'
// import boss from '../../assets/pngs/boss.png'
// import mvp from '../../assets/pngs/mvp.png'
// import platinum from '../../assets/pngs/platinum.png'
// import everyday from '../../assets/pngs/everyday.png'
// import together from '../../assets/pngs/together.png'

import styles from './questPage.module.scss'
import Modal from './Modal'

const QuestPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const ModalHandler = () => {
    setIsModalOpen(true)
  }
  return (
    <div className={styles.questPage}>
      <Gnb>
        <BackButton />
      </Gnb>
      <div className={styles.badgeName}>Badge</div>
      <div className={styles.badgeContent}>
        퀘스트를 달성하고 뱃지를 모아보세요!
      </div>
      <div className={styles.badgeList}>
        <button onClick={ModalHandler}>
          <img src={newbie} alt="test" />
        </button>
        <button onClick={ModalHandler}>
          <img src={start} alt="test" />
        </button>
        <button onClick={ModalHandler}>
          <img src={lock} alt="test" />
        </button>
        <button onClick={ModalHandler}>
          <img src={lock} alt="test" />
        </button>
        <button onClick={ModalHandler}>
          <img src={lock} alt="test" />
        </button>
        <button onClick={ModalHandler}>
          <img src={lock} alt="test" />
        </button>
        <button onClick={ModalHandler}>
          <img src={lock} alt="test" />
        </button>
        <button onClick={ModalHandler}>
          <img src={lock} alt="test" />
        </button>
        <button onClick={ModalHandler}>
          <img src={lock} alt="test" />
        </button>
        <button onClick={ModalHandler}>
          <img src={lock} alt="test" />
        </button>
        <button onClick={ModalHandler}>
          <img src={lock} alt="test" />
        </button>
        <button onClick={ModalHandler}>
          <img src={lock} alt="test" />
        </button>
        <button onClick={ModalHandler}>
          <img src={lock} alt="test" />
        </button>
        <button onClick={ModalHandler}>
          <img src={lock} alt="test" />
        </button>
        <button onClick={ModalHandler}>
          <img src={lock} alt="test" />
        </button>
        {isModalOpen && <Modal handleModal={setIsModalOpen} />}
      </div>
      <Modal />
    </div>
  )
}

export default QuestPage
