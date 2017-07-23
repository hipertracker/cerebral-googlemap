import React from 'react'
import { connect } from 'cerebral/react'
import { state } from 'cerebral/tags'

export default connect({
    selected: state`gmap.markerSelected`,
  }, function Marker ({point: {id}, selected}) {
    const icon = selected === id ? 'branch-selected.svg' : 'branch.svg'
    return <img src={`/assets/${icon}`} alt=""/>
  },
)
