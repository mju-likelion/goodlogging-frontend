// import geojson from '../../assets/json/korea.json'
import { useEffect } from 'react'

import { getCoordinates } from '../../util/getCoordinates'

const { kakao } = window
const geocoder = new kakao.maps.services.Geocoder()

const HotPlace = ({ location }) => {
  useEffect(() => {
    const container = document.getElementById('map')

    const coordinates = getCoordinates(location)
    const linePath = coordinates.map(
      (coordinate) => new kakao.maps.LatLng(coordinate[1], coordinate[0]),
    )

    const polyline = new kakao.maps.Polyline({
      path: linePath,
      strokeWeight: 5,
      strokeCOlor: '#FFAE00',
      storkeOpacity: 0.7,
      strokeStyle: 'solid',
    })

    geocoder.addressSearch(location, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const { x: longitude, y: latitude } = result[0]
        const option = {
          center: new kakao.maps.LatLng(latitude, longitude),
          level: 6,
        }
        // eslint-disable-next-line no-new
        const map = new kakao.maps.Map(container, option)
        map.setZoomable(false)
        polyline.setMap(map)
      }
    })
  }, [location])

  return (
    <div
      id="map"
      style={{ width: '333px', height: '289px', borderRadius: '10px' }}
    />
  )
}

export default HotPlace
