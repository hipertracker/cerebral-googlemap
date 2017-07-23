import supercluster from 'points-cluster'
import { compute } from 'cerebral'
import { state } from 'cerebral/tags'

const computedClusters = compute(
  state`gmap.mapProps`,
  state`gmap.markers`,
  state`gmap.clusterOptions`,
  (mapProps, dataMarkers, clusterOptions) => {
    const getCluster = supercluster(dataMarkers, {...clusterOptions})
    if (!mapProps.bounds) return []
    return getCluster(mapProps).map(({wx, wy, numPoints, points}) => ({
      lat: wy,
      lng: wx,
      numPoints,
      points,
      id: `${numPoints}_${points[0].id}`,
    }))
  },
)

export default computedClusters
