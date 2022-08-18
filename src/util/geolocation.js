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

const getHotplaceKakaoCoord = async (latitude, longitude) => {
  const geocoder = new kakao.maps.LatLng(latitude, longitude)
  return geocoder
}

const coord2Address = (lng, lat) => {
  console.log('coor2Address', lng, lat)
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

const getHotplaceInfo = async (latitude, longitude) => {
  const kakaoCoord = await getHotplaceKakaoCoord(latitude, longitude)
  const response = await coord2Address(kakaoCoord.getLng(), kakaoCoord.getLat())
  return response[0].address.region_3depth_name
}

export const getHottestLocation = async (placeArr) => {
  const coordinate = placeArr.reduce(
    (acc, current, currentIndex, arr) => {
      if (currentIndex === arr.length - 1) {
        return {
          latitude: (
            (acc.latitude + Number(current.latitude)) /
            arr.length
          ).toFixed(6),
          longitude: (
            (acc.longitude + Number(current.longitude)) /
            arr.length
          ).toFixed(6),
        }
      }

      return {
        latitude: acc.latitude + Number(current.latitude),
        longitude: acc.longitude + Number(current.longitude),
      }
    },
    {
      latitude: 0,
      longitude: 0,
    },
  )

  const region = await getHotplaceInfo(
    coordinate.latitude,
    coordinate.longitude,
  )
  return region
}
