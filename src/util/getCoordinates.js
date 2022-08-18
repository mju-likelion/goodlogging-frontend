import geojson from '../assets/json/korea.json'

const { features: coorinates } = geojson

export const getCoordinates = (locationName) => {
  console.log(locationName)
  const place = coorinates.find((location) =>
    location.properties.adm_nm.includes(locationName),
  )

  console.log(
    coorinates.find((location) =>
      location.properties.adm_nm.includes('구월1동'),
    ),
  )

  return place.geometry.coordinates.flat(2)
}
