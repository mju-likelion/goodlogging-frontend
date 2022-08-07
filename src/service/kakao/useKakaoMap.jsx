import { useEffect } from 'react'

const { kakao } = window

export default function useKakaoMap() {
  console.log(kakao)
  useEffect(() => {
    const container = document.getElementById('map')
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    }
    // eslint-disable-next-line no-new
    new kakao.maps.Map(container, options)
  }, [])
}
