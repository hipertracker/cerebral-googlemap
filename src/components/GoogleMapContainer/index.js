import React from 'react'
import { connect } from 'cerebral/react'
import { signal, state } from 'cerebral/tags'
import GoogleMap from 'google-map-react'
import Marker from './markers/Marker'
import ClusterMarker from './markers/ClusterMarker'
import computedClusters from 'modules/computed/computedClusters'

export default connect({
    defaultCenter: state`gmap.defaultCenter`,
    defaultZoom: state`gmap.defaultZoom`,
    mapProps: state`gmap.mapProps`,
    mapChanged: signal`mapChanged`,
    clusters: computedClusters,
  },
  function GoogleMapContainer ({defaultCenter, defaultZoom, mapProps, mapChanged, clusters}) {
    const mapStyle = {
      width: 800,
      height: 450,
    }

    const markers = clusters.map(({id, lat, lng, numPoints, points}) => {
      if (numPoints > 1) {
        return <ClusterMarker key={id} lat={lat} lng={lng} num={numPoints}/>
      } else {
        return <Marker key={id} id={id} lat={lat} lng={lng} point={points[0]}/>
      }
    })

    return (
      <div style={mapStyle}>
        <GoogleMap defaultCenter={defaultCenter}
                   defaultZoom={defaultZoom}
                   mapProps={mapProps}
                   onChange={mapProps => mapChanged({mapProps})}>
          {markers}
        </GoogleMap>
      </div>
    )
  },
)

// function createMapOptions (maps) {
//   return {
//     zoomControl: true,
//     zoomControlOptions: {
//       // position: maps.ControlPosition.RIGHT_CENTER,
//       // style: maps.ZoomControlStyle.SMALL
//     },
//     // mapTypeControlOptions: {
//     //   position: maps.ControlPosition.TOP_RIGHT,
//     // },
//     // mapTypeControl: true,
//   }
// }
