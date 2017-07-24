import supercluster from 'points-cluster'
import { compute } from 'cerebral'
import { state } from 'cerebral/tags'

const computedClusters = compute(
  state`gmap.mapProps`,
  state`gmap.markers`,
  state`gmap.clusterOptions`,
  (mapProps, dataMarkers, {minZoom, maxZoom, radius}) => {
    if (!mapProps.bounds) return []

    const getCluster = supercluster(
      dataMarkers,
      {
        minZoom,
        maxZoom,
        radius,
      }
    )

    const clusters = getCluster(mapProps).map(({wx, wy, numPoints, points}) => ({
      lat: wy,
      lng: wx,
      numPoints,
      points,
      id: `${numPoints}_${points[0].id}`,
    }))
    return clusters
  },
)

export default computedClusters
