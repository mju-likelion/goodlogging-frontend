import { useEffect } from 'react'

const { kakao } = window

const KakaoMap = () => {
  useEffect(() => {
    const container = document.getElementById('map')
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    }
    // eslint-disable-next-line no-new
    new kakao.maps.Map(container, options)
  }, [])

  return (
    <div
      id="map"
      style={{ width: '333px', height: '289px', borderRadius: '10px' }}
    />
  )
}

export default KakaoMap
