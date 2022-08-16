// import newbie from '../../../assets/pngs/newbie.png'
import EachBadge from '../EachBadge'

import styles from './modal.module.scss'

const dummyBadge = [
  {
    id: '1',
    title: 'newbie',
    description:
      '굿로거가 되신 것을 환영합니다! <br />지구를 위해 힘차게 달려주세요.',
    condition: '첫 로그인을 통해 뱃지를 얻었습니다',
  },
  {
    id: '1',
    title: 'newbie',
    description:
      '굿로거가 되신 것을 환영합니다! <br />지구를 위해 힘차게 달려주세요.',
    condition: '첫 로그인을 통해 뱃지를 얻었습니다',
  },
  {
    id: '1',
    title: 'newbie',
    description:
      '굿로거가 되신 것을 환영합니다! <br />지구를 위해 힘차게 달려주세요.',
    condition: '첫 로그인을 통해 뱃지를 얻었습니다',
  },
]

const Modal = ({ handleModal }) => {
  const closeModalClick = () => {
    handleModal(false)
  }

  return (
    <div id="root">
      <button className={styles.modalBackGround} onClick={closeModalClick} />
      {/* <div className={styles.modalBox}>
        <img src={newbie} alt="test" />
        <div className={styles.modalName}>굿로거</div>
        <div className={styles.modalContent}>
          굿로거가 되신 것을 환영합니다! <br />
          지구를 위해 힘차게 달려주세요.
        </div>
        <div className={styles.modalCondition}>
          첫 로그인을 통해 뱃지를 얻었습니다
        </div>
      </div> */}
      {dummyBadge.map((item) => (
        <EachBadge
          key={item.id}
          title={item.title}
          description={item.description}
          condition={item.condition}
        />
      ))}
    </div>
  )
}

export default Modal
