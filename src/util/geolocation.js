const { kakao } = window
const geocoder = new kakao.maps.services.Geocoder()

export const getCoordinate = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}

export const getKakaoCoord = async () => {
  const {
    coords: { latitude, longitude },
  } = await getCoordinate()
  const geocoder = new kakao.maps.LatLng(latitude, longitude)
  return geocoder
}

const coord2Address = (lng, lat) => {
  return new Promise((resolve) => {
    geocoder.coord2Address(lng, lat, resolve)
  })
}

export const getCoordInfo = async () => {
  const coords = await getKakaoCoord()
  const response = await coord2Address(coords.getLng(), coords.getLat())

  return {
    region: response[0].address.region_1depth_name,
    latitude: coords.Ma,
    longitude: coords.La,
  }
}
