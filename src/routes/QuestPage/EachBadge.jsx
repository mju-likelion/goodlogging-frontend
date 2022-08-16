// import lock from '../../assets/pngs/lock.png'
// import newbie from '../../assets/pngs/newbie.png'
// import start from '../../assets/pngs/start.png'
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

const EachBadge = ({ title, description, condition }) => {
  return (
    <div>
      <div className="badgeTitle">뱃지 이름 : {title}</div>
      <div className="badgeDescription">뱃지 설명 : {description}</div>
      <div className="badgeCondition">획득 조건 : {condition}</div>
    </div>
  )
}

export default EachBadge
